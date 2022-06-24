import { useQuery } from "react-query";
import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import AppWrapper from "../../components/AppWrapper";

const getAbout = async () => {
    return (
        await fetch("api/page/shotclock-9ebbc7b285f84acf80c2a961e989ec31")
    ).json();
};

const About = () => {
    const { data } = useQuery(["getAbout"], getAbout);

    if (!data) return <div>Loading...</div>;

    return (
        <AppWrapper>
            <div className="max-w-3xl mx-auto pt-10">
                <NotionRenderer blockMap={data.body} />
            </div>
        </AppWrapper>
    );
};
export default About;
