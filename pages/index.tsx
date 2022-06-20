import { useStopWatch } from "../utils/hooks";
import Progress from "../components/Progress";
import Time from "../components/Time";
import { NextPage } from "next";

const Home: NextPage = () => {
    const { time, start, stop, reset, percent, running, setGoal } =
        useStopWatch();

    return (
        <div className="h-full w-full overflow-hidden">
            <Progress
                start={start}
                stop={stop}
                reset={reset}
                running={running}
                percent={percent}
            />
            <Time
                start={start}
                stop={stop}
                reset={reset}
                time={time}
                percent={percent}
                running={running}
                setGoal={setGoal}
            />
        </div>
    );
};
export default Home;
