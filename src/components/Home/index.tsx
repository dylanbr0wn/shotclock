import { useStopWatch } from "../../hooks";
import Progress from "../Progress";
import Time from "../Time";

const Home = () => {
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
