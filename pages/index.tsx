import { useStopWatch } from "../utils/hooks";
import Progress from "../components/Progress";
import Time from "../components/Time";
import { NextPage } from "next";

const Home: NextPage = () => {
    const { start, stop, reset } = useStopWatch();

    return (
        <div className="h-full w-full overflow-hidden">
            <Progress start={start} stop={stop} reset={reset} />
            <Time start={start} stop={stop} reset={reset} />
        </div>
    );
};
export default Home;
