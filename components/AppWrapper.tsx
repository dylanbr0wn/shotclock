import { Toaster } from "react-hot-toast";
import Menu from "./Menu";

import React from "react";
import { useTheme } from "next-themes";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();
    return (
        <div className={`${theme === "dark" ? "dark" : ""}`}>
            <div
                className={`  selection:bg-amber-500 selection:text-amber-200 w-screen min-h-screen text-stone-900 dark:text-amber-100 dark:bg-stone-900 bg-white`}
            >
                <Menu />
                {children}
            </div>
            <Toaster />
        </div>
    );
};

export default AppWrapper;
