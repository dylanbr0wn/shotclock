import { useStopWatch } from "../../hooks";
import styles from "./Progress.module.scss";
import * as React from "react";
import Time from "../Time";
import { useSpring, a, config } from "@react-spring/web";

interface IProgressProps {
    running: boolean;
    percent: number;
    start: () => void;
    stop: () => void;
    reset: () => void;
}

const Progress = ({ stop, start, reset, percent, running }: IProgressProps) => {
    const props = useSpring({
        scaleY: running ? 1 : 0.3,
        translateY: 1, // use this to fix the small line between waves and bar on mobile
        config: config.molasses,
    });

    const [{ height }, api] = useSpring(() => ({
        height: "0vh",
        config: config.molasses,
    }));

    React.useEffect(() => {
        api({
            height: `${(percent / 100) * 80}%`,
        });
    }, [percent]);

    return (
        <>
            <div className="absolute inset-0 pointer-events-none w-screen h-screen  overflow-hidden">
                <div className="flex flex-col h-screen">
                    <svg
                        // style={{
                        //     ...props,
                        // }}
                        className={`${
                            styles.waves
                        } mt-auto flex-shrink-0 h-[1vh] md:h-[10vh] duration-1000 transform translate-y-1 ${
                            running ? "scale-y-125" : "scale-y-50"
                        } transition-all  `}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 24 150 28"
                        preserveAspectRatio="none"
                        shapeRendering="auto"
                    >
                        <defs>
                            <path
                                id="gentle-wave"
                                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                            />
                        </defs>
                        <g className={styles.parallax}>
                            <use
                                xlinkHref="#gentle-wave"
                                x="48"
                                y="3"
                                fill="#CA8A04"
                                fillOpacity={0.8}
                            />
                            <use
                                xlinkHref="#gentle-wave"
                                x="48"
                                y="5"
                                fill="#B45309"
                                fillOpacity={0.8}
                            />
                            <use
                                fill="#92400E"
                                xlinkHref="#gentle-wave"
                                x="48"
                                y="7"
                            />
                        </g>
                    </svg>
                    <a.div
                        style={{ height }}
                        className="flex bg-amber-800 h-[80vh] origin-bottom flex-shrink"
                    />
                </div>
            </div>
        </>
    );
};

export default Progress;
