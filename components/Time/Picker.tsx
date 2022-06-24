import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import * as React from "react";
import shallow from "zustand/shallow";
import useLocalStorage from "../../utils/hooks/useLocalStorage";
import useLongPress from "../../utils/hooks/useLongPress";
import useStore from "../../utils/zustand";

const Picker = () => {
    const { setZuGoal, goal, goalLoaded, time, setGoalLoaded } = useStore(
        (state) => ({
            setZuGoal: state.setGoal,
            goal: state.goal,
            time: state.time,
            goalLoaded: state.goalLoaded,
            setGoalLoaded: state.setGoalLoaded,
        }),
        shallow
    );
    const [storeGoal, setStoreGoal] = useLocalStorage<number>(
        "timerGoal",
        23000
    );
    const minuteRef = React.useRef<HTMLInputElement>(null);
    const secondRef = React.useRef<HTMLInputElement>(null);

    React.useEffect(() => {
        if (!goalLoaded) {
            setZuGoal(storeGoal);
            setGoalLoaded(true);
        }
    }, [storeGoal, goalLoaded]);

    const getSeconds = React.useCallback(() => {
        return Math.floor((goal % 60000) / 1000);
    }, [goal]);

    const getMinutes = React.useCallback(() => {
        return Math.floor((goal % 3600000) / 60000);
    }, [goal]);

    const setGoal = (goal: number) => {
        setZuGoal(goal);
        setStoreGoal(goal);
    };

    return (
        <>
            <div
                className={`flex justify-center bg-white ${
                    time === 0 ? "pointer-events-auto" : "pointer-events-none"
                } transition-colors mx-auto shadow-md py-3 px-4 align-middle content-center  rounded-lg border-0 `}
            >
                <div className="relative ">
                    <button
                        // {...longPressMinuteUp}
                        // // onMouseEnter={() => {
                        // //     setButtonHover(true);
                        // // }}
                        // onMouseLeave={(e) => {
                        //     // setButtonHover(false);
                        //     longPressMinuteUp.onMouseLeave(e);
                        // }}
                        disabled={getMinutes() > 58}
                        onClick={() => {
                            setGoal(goal + 60000);
                        }}
                        className={`rounded-lg opacity-100 py-1 px-3 absolute transform -translate-y-[3.25rem]  inset-x-0 transition-opacity mx-auto bg-white shadow-md disabled:opacity-50`}
                    >
                        <ChevronUpIcon className="h-6 w-6 m-auto text-stone-900" />
                    </button>
                    <input
                        ref={minuteRef}
                        // onBlur={(e) => {
                        //     e.preventDefault();
                        //     if (!buttonHover) {
                        //         setOpen(false);
                        //         e.target.blur();
                        //     }
                        // }}
                        min={0}
                        max={59}
                        step={1}
                        title="minutes"
                        className={`w-12 mx-auto cursor-auto font-mono text-center p-0 transition-all font-bold text-4xl outline-none  relative  focus:ring-0 bg-transparent border-none ring-0 ${"cursor-pointer"}`}
                        value={("0" + getMinutes()).slice(-2)}
                        onChange={({ target }) =>
                            setGoal(
                                (goal % 60000) +
                                    (Number(target.value) % 60) * 60000
                            )
                        }
                        type="number"
                    />
                    <button
                        // {...longPressMinuteDown}
                        // // onMouseEnter={() => setButtonHover(true)}
                        // onMouseLeave={(e) => {
                        //     // setButtonHover(false);
                        //     longPressMinuteDown.onMouseLeave(e);
                        // }}
                        disabled={getMinutes() < 1}
                        onClick={() => setGoal(goal - 60000)}
                        className={`rounded-lg py-1 px-3 transform absolute shadow-md translate-y-16  inset-x-0 transition-opacity bg-white mx-auto disabled:opacity-50`}
                    >
                        <ChevronDownIcon className="h-6 w-6 m-auto text-stone-900" />
                    </button>
                </div>
                <div
                    className={`pointer-events-auto`}
                    onClick={() => {
                        secondRef.current?.focus();
                    }}
                >
                    :
                </div>
                <div className="relative">
                    <button
                        // {...longPressSecondUp}
                        // // onMouseEnter={() => setButtonHover(true)}
                        // onMouseLeave={(e) => {
                        //     // setButtonHover(false);
                        //     longPressSecondUp.onMouseLeave(e);
                        // }}
                        disabled={getSeconds() > 58}
                        onClick={() => setGoal(goal + 1000)}
                        className={`rounded-lg py-1 px-3 absolute transform shadow-md -translate-y-[3.25rem] inset-x-0 transition-opacity bg-white mx-auto disabled:opacity-50`}
                    >
                        <ChevronUpIcon className="h-6 w-6 m-auto text-stone-900" />
                    </button>
                    <input
                        ref={secondRef}
                        // onFocus={() => setOpen(true)}
                        // onBlur={(e) => {
                        //     e.preventDefault();
                        //     if (!buttonHover) {
                        //         setOpen(false);
                        //         e.target.blur();
                        //     }
                        // }}
                        min={1}
                        max={59}
                        step={1}
                        title="seconds"
                        className={`w-12 mx-auto font-mono text-center p-0 transition-all font-bold text-4xl outline-none  relative  focus:ring-0 bg-transparent border-none ring-0`}
                        value={("0" + getSeconds()).slice(-2)}
                        onChange={({ target }) => {
                            if (parseInt(target.value) < 1) {
                                setGoal(getMinutes() + 1000);
                            } else {
                                if (parseInt(target.value) > 59) {
                                    console.log(
                                        "adding",
                                        Math.floor(Number(target.value) / 60) *
                                            60000
                                    );
                                    console.log(
                                        "and",
                                        (Number(target.value) % 60) * 1000
                                    );
                                    setGoal(
                                        Math.floor(Number(target.value) / 60) *
                                            60000 +
                                            (Number(target.value) % 60) * 1000
                                    );
                                } else {
                                    setGoal(
                                        getMinutes() +
                                            (Number(target.value) % 60) * 1000
                                    );
                                }
                            }
                        }}
                        type="number"
                    />
                    <button
                        // {...longPressSecondDown}
                        // // onMouseEnter={() => setButtonHover(true)}
                        // onMouseLeave={(e) => {
                        //     // setButtonHover(false);
                        //     longPressSecondDown.onMouseLeave(e);
                        // }}
                        disabled={getSeconds() < 2}
                        onClick={() => setGoal(goal - 1000)}
                        className={`rounded-lg py-1 px-3 transform absolute shadow-md translate-y-16 inset-x-0 transition-opacity bg-white mx-auto disabled:opacity-50`}
                    >
                        <ChevronDownIcon className="h-6 w-6 m-auto text-stone-900" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Picker;
