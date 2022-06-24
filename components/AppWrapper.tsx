import { Toaster } from "react-hot-toast";
import Menu from "./Menu";

import * as React from "react";
import { useTheme } from "next-themes";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    const { theme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <div className={`${theme}`}>
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
