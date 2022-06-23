import {
    ChevronDownIcon,
    ChevronUpIcon,
    MinusCircleIcon,
    PlusCircleIcon,
    PlusIcon,
} from "@heroicons/react/outline";
import * as React from "react";
import useLongPress from "../../utils/hooks/useLongPress";

interface IPickerProps {
    seconds: number;
    setSeconds: (seconds: number | ((val: number) => number)) => void;
    minutes: number;
    setMinutes: (minutes: number | ((val: number) => number)) => void;
    setOpen: (open: boolean) => void;
    open: boolean;
    isVisible: boolean;
}

const Picker = ({
    seconds,
    minutes,
    setSeconds,
    setMinutes,
    setOpen,
    open,
    isVisible,
}: IPickerProps) => {
    const minuteRef = React.useRef<HTMLInputElement>(null);
    const secondRef = React.useRef<HTMLInputElement>(null);
    // const [buttonHover, setButtonHover] = React.useState(false);

    React.useEffect(() => {
        if (!open) {
            minuteRef.current?.blur();
            secondRef.current?.blur();
        }
    }, [open]);

    const increaseMinute = () => {
        if (!open || minutes > 58) return;
        setMinutes((prevState: number) => prevState + 1);
    };
    const decreaseMinute = () => {
        if (!open || minutes < 1) return;
        setMinutes((prevState: number) => prevState - 1);
    };

    const increaseSecond = () => {
        if (!open || seconds > 58) return;
        setSeconds((prevState: number) => prevState + 1);
    };
    const decreaseSeconds = () => {
        if (!open || seconds < 2) return;
        setSeconds((prevState: number) => prevState - 1);
    };

    React.useEffect(() => {
        if (minuteUpTriggered) {
            const interval = setInterval(() => increaseMinute(), 250);
            return () => {
                clearInterval(interval);
            };
        }
    }, [increaseMinute]);

    React.useEffect(() => {
        if (minuteDownTriggered) {
            const interval = setInterval(() => decreaseMinute(), 250);
            return () => {
                clearInterval(interval);
            };
        }
    }, [decreaseMinute]);

    React.useEffect(() => {
        if (secondsUpTriggered) {
            const interval = setInterval(() => increaseSecond(), 250);
            return () => {
                clearInterval(interval);
            };
        }
    }, [increaseSecond]);

    React.useEffect(() => {
        if (secondsDownTriggered) {
            const interval = setInterval(() => decreaseSeconds(), 250);
            return () => {
                clearInterval(interval);
            };
        }
    }, [decreaseSeconds]);

    const { triggered: minuteUpTriggered, ...longPressMinuteUp } =
        useLongPress(increaseMinute);
    const { triggered: minuteDownTriggered, ...longPressMinuteDown } =
        useLongPress(decreaseMinute);
    const { triggered: secondsUpTriggered, ...longPressSecondUp } =
        useLongPress(increaseSecond);
    const { triggered: secondsDownTriggered, ...longPressSecondDown } =
        useLongPress(decreaseSeconds);

    return (
        <>
            <div
                // onBlur={(e) => {
                //     e.preventDefault();
                //     if (!buttonHover) {
                //         setOpen(false);
                //         e.target.blur();
                //     }
                // }}
                className={`flex justify-center bg-white ${
                    isVisible && "pointer-events-auto"
                } transition-colors mx-auto shadow-md py-3 px-4 align-middle content-center  rounded-lg border-0 `}
            >
                <div className="relative ">
                    <button
                        {...longPressMinuteUp}
                        // onMouseEnter={() => {
                        //     setButtonHover(true);
                        // }}
                        onMouseLeave={(e) => {
                            // setButtonHover(false);
                            longPressMinuteUp.onMouseLeave(e);
                        }}
                        disabled={minutes > 58}
                        // onClick={increaseMinute}
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
                        className={`w-12 mx-auto cursor-auto font-mono text-center p-0 transition-all font-bold text-4xl outline-none  relative  focus:ring-0 bg-transparent border-none ring-0 ${
                            !open ? "cursor-pointer" : "pointer-events-auto"
                        }`}
                        value={("0" + minutes).slice(-2)}
                        onChange={({ target }) =>
                            setMinutes(parseInt(target.value) % 60)
                        }
                        type="number"
                    />
                    <button
                        {...longPressMinuteDown}
                        // onMouseEnter={() => setButtonHover(true)}
                        onMouseLeave={(e) => {
                            // setButtonHover(false);
                            longPressMinuteDown.onMouseLeave(e);
                        }}
                        disabled={minutes < 1}
                        // onClick={decreaseMinute}
                        className={`rounded-lg py-1 px-3 transform absolute shadow-md translate-y-16  inset-x-0 transition-opacity bg-white mx-auto disabled:opacity-50`}
                    >
                        <ChevronDownIcon className="h-6 w-6 m-auto text-stone-900" />
                    </button>
                </div>
                <div
                    className={`pointer-events-auto`}
                    onClick={() => {
                        setOpen(true);
                        secondRef.current?.focus();
                    }}
                >
                    :
                </div>
                <div className="relative">
                    <button
                        {...longPressSecondUp}
                        // onMouseEnter={() => setButtonHover(true)}
                        onMouseLeave={(e) => {
                            // setButtonHover(false);
                            longPressSecondUp.onMouseLeave(e);
                        }}
                        disabled={seconds > 58}
                        // onClick={increaseSecond}
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
                        value={("0" + seconds).slice(-2)}
                        onChange={({ target }) => {
                            if (parseInt(target.value) < 1) {
                                setSeconds(1);
                            } else {
                                setSeconds(parseInt(target.value) % 60);
                                if (parseInt(target.value) > 59) {
                                    setMinutes(
                                        Math.round(
                                            (parseInt(target.value) - 1) / 60
                                        )
                                    );
                                }
                            }
                        }}
                        type="number"
                    />
                    <button
                        {...longPressSecondDown}
                        // onMouseEnter={() => setButtonHover(true)}
                        onMouseLeave={(e) => {
                            // setButtonHover(false);
                            longPressSecondDown.onMouseLeave(e);
                        }}
                        disabled={seconds < 2}
                        // onClick={decreaseSeconds}
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
