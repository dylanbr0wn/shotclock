import { useQuery } from "react-query";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import AppWrapper from "../../components/AppWrapper";
import { GetStaticPropsContext } from "next";
// pages/api/index.ts
import { fetchPageById, parsePageBlocks } from "../../utils/api/notion";
import { parsePageId } from "../../utils/api/utils";

export const getStaticProps = async () => {
    const pageId = parsePageId("shotclock-9ebbc7b285f84acf80c2a961e989ec31");
    const page = await fetchPageById(pageId!, undefined);

    const allBlocks = await parsePageBlocks(page, pageId);

    return {
        props: {
            blockMap: allBlocks,
        },
    };
};

const About = ({ blockMap }) => {
    return (
        <AppWrapper>
            <div className="max-w-3xl mx-auto pt-10 text-stone-900 dark:text-amber-100">
                <NotionRenderer blockMap={blockMap} />
            </div>
        </AppWrapper>
    );
};
export default About;
