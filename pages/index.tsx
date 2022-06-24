import Progress from "../components/Progress";
import Time from "../components/Time";
import { NextPage } from "next";

const Home: NextPage = () => {
    return (
        <div className="h-full w-full overflow-hidden">
            <Progress />
            <Time />
        </div>
    );
};
export default Home;
