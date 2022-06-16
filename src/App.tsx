import * as React from "react";
import logo from "./logo.svg";
import "./App.scss";
import { useLocalStorage } from "@mantine/hooks";
import { useStopWatch } from "./hooks";
import Progress from "./components/Progress";
import Menu from "./components/Menu";
import Time from "./components/Time";
import Controls from "./components/Controls";

function App() {
    const { time, start, stop, reset, percent, running, setGoal } =
        useStopWatch();

    // hook will read value from localStorage.getItem('color-scheme')
    // if localStorage is not available or value at given key does not exist
    // 'dark' will be assigned to value variable
    const [value, setValue] = useLocalStorage({
        key: "color-scheme",
        defaultValue: "dark",
    });

    return (
        <div className="h-screen w-screen bg-amber-50 overflow-hidden selection:bg-amber-500 selection:text-amber-200">
            <Menu />
            <div className="pt-24 h-full w-full relative">
                <Progress
                    start={start}
                    stop={stop}
                    reset={reset}
                    running={running}
                    percent={percent}
                />
                <Time
                    start={start}
                    stop={stop}
                    reset={reset}
                    time={time}
                    percent={percent}
                    running={running}
                    setGoal={setGoal}
                />
            </div>
        </div>
    );
}

export default App;
