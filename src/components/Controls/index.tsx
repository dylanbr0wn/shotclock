import { PauseIcon, PlayIcon, XCircleIcon } from "@heroicons/react/outline";
import { config, useTransition, a, useSpring } from "@react-spring/web";
import * as React from "react";

export interface IControlsProps {
    start: () => void;
    stop: () => void;
    reset: () => void;
}

const Controls = ({ start, stop, reset }: IControlsProps) => {
    const [buttons, setButtons] = React.useState(["start"]);
    const [stopHover, setStopHover] = React.useState(false);
    const [startHover, setStartHover] = React.useState(false);
    const [resetHover, setResetHover] = React.useState(false);

    const startTransition = useTransition(buttons.includes("start"), {
        from: { opacity: 0, y: -50 },
        enter: { opacity: 1, y: 0 },
        leave: { opacity: 0, y: 50 },
        config: config.stiff,
    });
    const resetTransition = useTransition(buttons.includes("reset"), {
        from: { opacity: 0, x: 0 },
        enter: { opacity: 1, x: 50 },
        leave: { opacity: 0, x: 0 },
        config: config.stiff,
    });
    const stopTransition = useTransition(buttons.includes("stop"), {
        from: { opacity: 0, y: -50 },
        enter: { opacity: 1, y: 0 },
        leave: { opacity: 0, y: 50 },
        config: config.stiff,
    });
    const stopSpring = useSpring({
        scale: stopHover ? 1.05 : 1,
    });
    const startSpring = useSpring({
        scale:
            (startHover ? 1.05 : 1) *
            (buttons.length === 1 && buttons[0] === "start" ? 1.3 : 1),
    });
    const resetSpring = useSpring({
        scale: resetHover ? 1.05 : 1,
    });
    return (
        <a.div className="flex space-x-2 px-10 h-24">
            <div className="w-full flex justify-around relative h-16 my-auto">
                {startTransition(
                    (style, item) =>
                        item && (
                            <a.button
                                style={{ ...style, ...startSpring }}
                                onMouseEnter={() => setStartHover(true)}
                                onMouseLeave={() => setStartHover(false)}
                                className="rounded-full origin-center absolute hover:text-stone-900/80 active:text-stone-900 transition-colors text-stone-900/50 focus:outline-none "
                                onClick={() => {
                                    start();
                                    setButtons(["stop", "reset"]);
                                }}
                            >
                                <PlayIcon className="h-16 w-16 mx-auto" />
                            </a.button>
                        )
                )}
                {stopTransition(
                    (style, item) =>
                        item && (
                            <a.button
                                style={{ ...style, ...stopSpring }}
                                onMouseEnter={() => setStopHover(true)}
                                onMouseLeave={() => setStopHover(false)}
                                className="rounded-full absolute hover:text-stone-900/80 active:text-stone-900 transition-colors text-stone-900/50 focus:outline-none "
                                onClick={() => {
                                    stop();
                                    setButtons(["start", "reset"]);
                                }}
                            >
                                <PauseIcon className="h-16 w-16 mx-auto" />
                            </a.button>
                        )
                )}
                {resetTransition(
                    (style, item) =>
                        item && (
                            <a.button
                                style={{ ...style, ...resetSpring }}
                                onMouseEnter={() => setResetHover(true)}
                                onMouseLeave={() => setResetHover(false)}
                                className="rounded-full absolute hover:text-stone-900/80 top-2 ml-3 active:text-stone-900 transition-colors text-stone-900/50 focus:outline-none "
                                onClick={() => {
                                    reset();
                                    setButtons(["start"]);
                                }}
                            >
                                <XCircleIcon className="h-12 w-12 mx-auto" />
                            </a.button>
                        )
                )}
            </div>
            {/* <div className="w-full">
                
            </div>
            <div className="w-full px-2"></div> */}
        </a.div>
    );
};
export default Controls;
