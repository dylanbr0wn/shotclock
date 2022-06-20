import {
    BookmarkIcon,
    PauseIcon,
    PlayIcon,
    RefreshIcon,
    StopIcon,
} from "@heroicons/react/outline";
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
    start,
    stop,
    reset,
    running,
}: ITimeProps) => {
    const [open, setOpen] = React.useState(true);

    const [seconds, setSeconds] = React.useState(23);
    const [minutes, setMinutes] = React.useState(0);

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
            {/* <div
                className={`${
                    open ? "opacity-100" : "opacity-0 "
                } pointer-events-none absolute h-screen w-screen bg-stone-900/50 top-0 left-0 transition-all`}
            /> */}
            <span className="absolute transform -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] inline-block text-center">
                <div
                    className={`text-7xl ${
                        percent < 75 ? "text-stone-800" : "text-amber-200"
                    } font-mono font-semibold transition-colors  duration-1000`}
                >
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
                    {("0" + (Math.floor(time / 10) % 100)).slice(-2)}
                </div>

                {/* <Controls start={start} stop={stop} reset={reset} /> */}
                <div className="flex flex-col space-y-2 mt-8 bg-amber-700/10 p-2 rounded-lg">
                    <div className="flex mx-auto space-x-2">
                        <button
                            disabled={running}
                            onClick={start}
                            className="rounded-lg px-4 py-3 bg-white flex transition-all  duration-300 hover:text-green-500 shadow-md w-44 disabled:opacity-60  disabled:pointer-events-none"
                        >
                            <PlayIcon className="h-8 w-8 mx-4" />
                            <div className="text-2xl my-auto ">Start</div>
                        </button>
                        <button
                            disabled={!running}
                            onClick={stop}
                            className="rounded-lg transition-all   hover:text-cyan-500 px-4 py-3 w-44 bg-white flex shadow-md  disabled:opacity-60 disabled:pointer-events-none"
                        >
                            <PauseIcon className="h-8 w-8 mx-4" />
                            <div className="text-2xl my-auto ">Pause</div>
                        </button>
                    </div>
                    <div className="flex mx-auto space-x-2">
                        <button
                            disabled={running || time === 0}
                            onClick={reset}
                            className="rounded-lg px-4 py-3 w-44 bg-white flex transition-all hover:text-red-500 shadow-md  disabled:opacity-60 disabled:pointer-events-none"
                        >
                            <RefreshIcon className="h-8 w-8 mx-4" />
                            <div className="text-2xl my-auto ">Reset</div>
                        </button>
                        <button
                            disabled={time === 0}
                            className="hover:text-amber-600 transition-all  rounded-lg px-4 py-3 w-44 bg-white flex  shadow-md disabled:opacity-60 disabled:pointer-events-none"
                        >
                            <BookmarkIcon className="h-8 w-8 mx-4" />
                            <div className="text-2xl my-auto ">Save</div>
                        </button>
                    </div>
                </div>
                <div
                    className={`${
                        time > 0 && "opacity-0"
                    } transition-opacity duration-1000 text-stone-900 mt-8 font-extrabold text-2xl text-center`}
                >
                    Target Brew Time
                </div>
                <div className="flex flex-col mx-auto  mt-8 rounded-lg ">
                    <a.div
                        style={{ opacity }}
                        className={`text-3xl ${
                            (percent > 0 || !open) && "pointer-events-none"
                        } flex flex-col  transition-colors bg-amber-700/10 py-12 px-2 rounded-lg mx-auto`}
                        // onMouseLeave={() => setOpen(false)}
                    >
                        <div className="my-auto">
                            <div className="my-auto flex space-x-0.5">
                                <Picker
                                    isVisible={time === 0}
                                    minutes={minutes}
                                    seconds={seconds}
                                    setMinutes={setMinutes}
                                    setSeconds={setSeconds}
                                    setOpen={setOpen}
                                    open={open}
                                />
                                {/* <div className="w-full text-left">s</div> */}
                            </div>
                        </div>
                    </a.div>
                </div>
            </span>
        </>
    );
};
export default Time;
