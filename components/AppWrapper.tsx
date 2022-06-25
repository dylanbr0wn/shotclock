import { Toaster } from "react-hot-toast";
import Menu from "./Menu";

import * as React from "react";
import { useTheme } from "next-themes";
import Welcome from "./Welcome";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    const { resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <div>
            <div
                className={`  selection:bg-amber-500 selection:text-amber-200 w-screen text-stone-900 dark:text-amber-100 dark:bg-stone-900 bg-white `}
            >
                <Menu />
                {children}
            </div>
            <Welcome />
            <Toaster />
        </div>
    );
};

export default AppWrapper;
