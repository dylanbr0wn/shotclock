import * as React from "react";

export const useStopWatch = (ref: React.RefObject<HTMLDivElement>) => {
    const [time, setTime] = React.useState(0);
    const [running, setRunning] = React.useState(false);
    const [goal, setGoal] = React.useState(23000);

    const [percent, setPercent] = React.useState(0);

    React.useEffect(() => {
        let interval: number | undefined;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime +10);
            }, 10);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

    React.useEffect(() => {
        let percent = 0;
        if(time <= goal ){
            percent = time / goal * 100;
        }if(time > goal){
            percent = 100;
        }
        setPercent(percent);
        // if(!ref?.current?.style) return
        // ref.current?.style.setProperty("--progress-value", `${percent}`);
    },[time,goal,ref])

    const reset = () => {
        setRunning(false);
        setTime(0);
    };

    const start = () => {
        setRunning(true);
    };

    const stop = () => {
        setRunning(false);
    };

    return { time, reset, start, stop, percent,goal,running };
}