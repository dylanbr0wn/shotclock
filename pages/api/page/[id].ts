// pages/api/index.ts
import { fetchPageById, parsePageBlocks } from "../../../utils/api/notion";
import { parsePageId } from "../../../utils/api/utils";
import { createResponse } from "../../../utils/api/response";
import { getTableData } from "../table/[id]";


import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  response: NextApiResponse,
) {
  const pageId = parsePageId(req.query.id);
  const page = await fetchPageById(pageId!, undefined);

  const allBlocks = await parsePageBlocks(page, pageId);

  return createResponse(response, allBlocks);
}
