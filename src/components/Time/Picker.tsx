import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/outline";
import * as React from "react";
import useLongPress from "../../hooks";

interface IPickerProps {
    seconds: number;
    setSeconds: (seconds: number | ((val: number) => number)) => void;
    minutes: number;
    setMinutes: (minutes: number | ((val: number) => number)) => void;
    setOpen: (open: boolean) => void;
    open: boolean;
}

const Picker = ({
    seconds,
    minutes,
    setSeconds,
    setMinutes,
    setOpen,
    open,
}: IPickerProps) => {
    const minuteRef = React.useRef<HTMLInputElement>(null);
    const secondRef = React.useRef<HTMLInputElement>(null);
    const [buttonHover, setButtonHover] = React.useState(false);

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
                onBlur={(e) => {
                    e.preventDefault();
                    if (!buttonHover) {
                        setOpen(false);
                        e.target.blur();
                    }
                }}
                className={`flex justify-center cursor-pointer hover:text-amber-600  align-middle content-center rounded-md transition-colors border-0 ${
                    open &&
                    "bg-stone-900/30 text-amber-100 hover:text-amber-100 "
                }`}
            >
                <div className="relative">
                    <button
                        {...longPressMinuteUp}
                        onMouseEnter={() => {
                            setButtonHover(true);
                        }}
                        onMouseLeave={(e) => {
                            setButtonHover(false);
                            longPressMinuteUp.onMouseLeave(e);
                        }}
                        // onClick={increaseMinute}
                        className={`${
                            open
                                ? minutes === 59
                                    ? "opacity-50 cursor-not-allowed"
                                    : "opacity-100"
                                : "opacity-0 pointer-events-none"
                        } rounded-full p-0.5 absolute -translate-y-9 inset-x-0 transition-opacity`}
                    >
                        <PlusCircleIcon className="h-7 w-7 m-auto text-amber-100" />
                    </button>
                    <input
                        ref={minuteRef}
                        onFocus={() => setOpen(true)}
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
                        className={`w-8 mx-auto cursor font-mono text-center p-0 transition-all font-bold text-lg outline-none  relative  focus:ring-0 bg-transparent border-none ring-0 ${
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
                        onMouseEnter={() => setButtonHover(true)}
                        onMouseLeave={(e) => {
                            setButtonHover(false);
                            longPressMinuteDown.onMouseLeave(e);
                        }}
                        // onClick={decreaseMinute}
                        className={`${
                            open
                                ? minutes === 0
                                    ? "opacity-50 cursor-not-allowed"
                                    : "opacity-100"
                                : "opacity-0 pointer-events-none"
                        } rounded-full p-0.5 absolute translate-y-8 transition-opacity inset-x-0`}
                    >
                        <MinusCircleIcon className="h-7 w-7 m-auto text-amber-100" />
                    </button>
                </div>
                <div
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
                        onMouseEnter={() => setButtonHover(true)}
                        onMouseLeave={(e) => {
                            setButtonHover(false);
                            longPressSecondUp.onMouseLeave(e);
                        }}
                        // onClick={increaseSecond}
                        className={`${
                            open
                                ? seconds === 59
                                    ? "opacity-50 cursor-not-allowed"
                                    : "opacity-100"
                                : "opacity-0 pointer-events-none"
                        } rounded-full p-0.5 absolute -translate-y-9 inset-x-0 transition-opacity`}
                    >
                        <PlusCircleIcon className="h-7 w-7 m-auto text-amber-100" />
                    </button>
                    <input
                        ref={secondRef}
                        onFocus={() => setOpen(true)}
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
                        className={`w-8 mx-auto font-mono text-center p-0 transition-all font-bold text-lg outline-none  relative  focus:ring-0 bg-transparent border-none ring-0  ${
                            !open ? "cursor-pointer" : "pointer-events-auto"
                        }`}
                        value={("0" + seconds).slice(-2)}
                        onChange={({ target }) => {
                            if (parseInt(target.value) < 1) return;
                            setSeconds(parseInt(target.value) % 60);
                            if (parseInt(target.value) > 59) {
                                setMinutes(
                                    Math.round(
                                        (parseInt(target.value) - 1) / 60
                                    )
                                );
                            }
                        }}
                        type="number"
                    />
                    <button
                        {...longPressSecondDown}
                        onMouseEnter={() => setButtonHover(true)}
                        onMouseLeave={(e) => {
                            setButtonHover(false);
                            longPressSecondDown.onMouseLeave(e);
                        }}
                        // onClick={decreaseSeconds}
                        className={`${
                            open
                                ? seconds < 2
                                    ? "opacity-50 cursor-not-allowed"
                                    : "opacity-100"
                                : "opacity-0 pointer-events-none"
                        } rounded-full p-0.5 absolute translate-y-8 transition-opacity inset-x-0`}
                    >
                        <MinusCircleIcon className="h-7 w-7 m-auto text-amber-100" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Picker;
