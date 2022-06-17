import * as React from "react";

export const useStopWatch = () => {
    const [time, setTime] = React.useState(0);
    const [running, setRunning] = React.useState(false);
    const [goal, setGoal] = React.useState(1000);
    const timer = React.useRef(0);
    const [timerStart, setTimerStart] = React.useState(0);

    const [percent, setPercent] = React.useState(0);

    const reset = () => {
        setRunning(false);
        setTime(0);
        setPercent(0);
        clearInterval(timer.current);
    };

    const start = () => {
        const timerStart = Date.now() - time
        setRunning(true);
        setTimerStart(timerStart);
        timer.current = setInterval(() => {
                let percent = 0;
                const time = Date.now() - timerStart
                if(time <= goal ){
                    
                    percent = Math.floor(time / goal * 100);
                }if(time > goal){
                    percent = 100;
                }
                setPercent(percent);
                setTime(Date.now() - timerStart);
            }, 10)
        
    };

    const stop = () => {
        setRunning(false);
        clearInterval(timer.current);
    };

    return { time, reset, start, stop, percent,goal,running, setGoal };
}

const useLongPress = (
    onClick: () => void,
    { shouldPreventDefault = true, delay = 300 }: {shouldPreventDefault?: boolean, delay?: number} = {}
    ) => {
    const [longPressTriggered, setLongPressTriggered] = React.useState(false);
    const timeout = React.useRef<number>();
    const target = React.useRef<any>();

    const start = 
        (event: any) => {
            if (shouldPreventDefault && event.target) {
                    event.target.addEventListener("touchend", preventDefault, {
                    passive: false
                });
                target.current = event.target;
            }
            timeout.current = setTimeout(() => {
                setLongPressTriggered(true);
            }, delay);
        }

    const clear = 
        (event:any, shouldTriggerClick = true) => {
            timeout.current && clearTimeout(timeout.current);
            shouldTriggerClick && !longPressTriggered && onClick();
            setLongPressTriggered(false);
            if (shouldPreventDefault && target.current) {
                target?.current?.removeEventListener("touchend", preventDefault);
            }
        }

    return {
        triggered: longPressTriggered,
        onMouseDown: (e:any) => start(e),
        onTouchStart: (e:any) => start(e),
        onMouseUp: (e:any)=> clear(e),
        onMouseLeave: (e:any) => clear(e, false),
        onTouchEnd: (e:any) => clear(e)
    };
};

const isTouchEvent = (event:any) => {
return "touches" in event;
};

const preventDefault = (event:any) => {
if (!isTouchEvent(event)) return;

if (event.touches.length < 2 && event.preventDefault) {
    event.preventDefault();
}
};

export default useLongPress;