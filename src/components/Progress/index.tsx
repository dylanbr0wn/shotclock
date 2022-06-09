import { useStopWatch } from "../../hooks";
import styles from "./Progress.module.scss";
import * as React from "react";
import Time from "../Time";
import { useSpring, a, config } from "@react-spring/web";

const Progress = () => {
    const progressRef = React.useRef<HTMLDivElement>(null);
    const { time, start, stop, reset, percent, goal, running } =
        useStopWatch(progressRef);

    const props = useSpring({
        scaleY: running ? 1 : 0.3,
        config: config.molasses,
    });

    const [{ height }, api] = useSpring(() => ({
        height: "0%",
        config: config.molasses,
    }));

    React.useEffect(() => {
        api({
            height: `${percent}%`,
        });
    }, [percent]);

    return (
        <>
            <button onClick={() => start()}>Start</button>
            <button onClick={() => stop()}>Stop</button>
            <button onClick={() => reset()}>Reset</button>
            <div className="absolute top-0 pointer-events-none h-screen overflow-hidden">
                <div className="flex flex-col h-full">
                    <a.svg
                        style={{
                            ...props,
                        }}
                        className={`${styles.waves} mt-auto`}
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
                    </a.svg>
                    <a.div style={{ height }} className="flex bg-amber-800" />
                </div>
            </div>
            <span className=" absolute transform -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] inline-block text-center">
                <Time time={time} percent={percent} goal={goal} />
            </span>
        </>
    );
};

export default Progress;
