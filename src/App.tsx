import * as React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useLocalStorage } from "@mantine/hooks";
import { useStopWatch } from "./hooks";
import Progress from "./components/Progress";
import Menu from "./components/Menu";

function App() {
    const [count, setCount] = React.useState(0);

    // hook will read value from localStorage.getItem('color-scheme')
    // if localStorage is not available or value at given key does not exist
    // 'dark' will be assigned to value variable
    const [value, setValue] = useLocalStorage({
        key: "color-scheme",
        defaultValue: "dark",
    });

    return (
        <div
            id="outer-container"
            className="h-screen w-screen bg-amber-100 overflow-hidden"
        >
            <Menu />
            <div id="page-wrap" className="pt-24 h-full w-full">
                <Progress />
            </div>
        </div>
    );
}

export default App;
