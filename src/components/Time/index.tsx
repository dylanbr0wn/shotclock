import { config, useSpring, a } from "@react-spring/web";
import * as React from "react";
import Controls, { IControlsProps } from "../Controls";
import Picker from "./Picker";

interface ITimeProps extends IControlsProps {
    time: number;
    percent: number;
    setGoal: (goal: number) => void;
    running: boolean;
}

const Time = ({
    time,
    percent,
    setGoal,
    running,
    start,
    stop,
    reset,
}: ITimeProps) => {
    const [open, setOpen] = React.useState(false);

    const [seconds, setSeconds] = React.useState(23);
    const [minutes, setMinutes] = React.useState(0);
    const secondOptions = React.useMemo(
        () => new Array(60).fill(undefined).map((_, i) => i),
        []
    );

    const { opacity } = useSpring({
        opacity: time > 0 ? 0 : 1,
        config: config.molasses,
    });

    const { scale } = useSpring({
        scale: open ? 2 : 1,
    });

    React.useEffect(() => {
        if (setGoal) {
            setGoal(minutes * 60 * 1000 + seconds * 1000);
        }
    }, [minutes, seconds]);

    return (
        <>
            <div
                className={`${
                    open ? "opacity-100" : "opacity-0 "
                } pointer-events-none absolute h-screen w-screen bg-stone-900/50 top-0 left-0 transition-all`}
            />
            <span className="absolute transform -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] inline-block text-center">
                <div
                    className={`text-5xl ${
                        percent < 50 ? "text-stone-800" : "text-amber-200"
                    } font-mono font-semibold transition-colors  duration-1000`}
                >
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
                    {("0" + ((time / 10) % 100)).slice(-2)}
                </div>
                <a.div
                    style={{ opacity, scale }}
                    className={`text-lg ${
                        percent > 0 && "pointer-events-none"
                    } flex flex-col text-stone-800 focus-within:text-amber-100 transition-colors inset-x-0 px-24 h-32 transform -translate-y-14`}
                    onMouseLeave={() => setOpen(false)}
                >
                    <div className="my-auto ">
                        <div className="my-auto flex">
                            <div className="mr-0.5">Target time: </div>
                            <Picker
                                minutes={minutes}
                                seconds={seconds}
                                setMinutes={setMinutes}
                                setSeconds={setSeconds}
                                setOpen={setOpen}
                                open={open}
                            />
                            <div className="ml-0.5">seconds</div>
                        </div>
                    </div>
                </a.div>
                <Controls start={start} stop={stop} reset={reset} />
            </span>
        </>
    );
};
export default Time;
