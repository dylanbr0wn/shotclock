// pages/api/index.ts
import { fetchPageById, fetchBlocks } from "../../../utils/api/notion";
import { parsePageId } from "../../../utils/api/utils";
import { createResponse } from "../../../utils/api/response";
import { getTableData } from "../table/[id]";
import { BlockType, CollectionType} from "../../../utils/api/types";


import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  response: NextApiResponse,
) {
  const pageId = parsePageId(req.query.id);
  const page = await fetchPageById(pageId!, undefined);

  const baseBlocks = page.recordMap.block;

  let allBlocks: { [id: string]: BlockType & { collection?: any } } = {
    ...baseBlocks,
  };
  let allBlockKeys;

  while (true) {
    allBlockKeys = Object.keys(allBlocks);

    const pendingBlocks = allBlockKeys.flatMap((blockId) => {
      const block = allBlocks[blockId];
      const content = block.value && block.value.content;

      if (!content || (block.value.type === "page" && blockId !== pageId!)) {
        // skips pages other than the requested page
        return [];
      }

      return content.filter((id: string) => !allBlocks[id]);
    });

    if (!pendingBlocks.length) {
      break;
    }

    const newBlocks = await fetchBlocks(pendingBlocks, undefined).then(
      (res) => res.recordMap.block
    );

    allBlocks = { ...allBlocks, ...newBlocks };
  }

  const collection = page.recordMap.collection
    ? page.recordMap.collection[Object.keys(page.recordMap.collection)[0]]
    : null;

  const collectionView = page.recordMap.collection_view
    ? page.recordMap.collection_view[
        Object.keys(page.recordMap.collection_view)[0]
      ]
    : null;

  if (collection && collectionView) {
    const pendingCollections = allBlockKeys.flatMap((blockId) => {
      const block = allBlocks[blockId];

      return (block.value && block.value.type === "collection_view") ? [block.value.id] : [];
    });

    for (let b of pendingCollections) {
      const collPage = await fetchPageById(b!, undefined);

      const coll = Object.keys(collPage.recordMap.collection).map(
        (k) => collPage.recordMap.collection[k]
      )[0];

      const collView: {
        value: { id: CollectionType["value"]["id"] };
      } = Object.keys(collPage.recordMap.collection_view).map(
        (k) => collPage.recordMap.collection_view[k]
      )[0];

      const { rows, schema } = await getTableData(
        coll,
        collView.value.id,
        undefined,
        true
      );

      const viewIds = (allBlocks[b] as any).value.view_ids as string[];

      allBlocks[b] = {
        ...allBlocks[b],
        collection: {
          title: coll.value.name,
          schema,
          types: viewIds.map((id) => {
            const col = collPage.recordMap.collection_view[id];
            return col ? col.value : undefined;
          }),
          data: rows,
        },
      };
    }
  }

  return createResponse(response,allBlocks);
}
