import { Toaster } from "react-hot-toast";
import Menu from "./Menu";

import * as React from "react";
import Welcome from "./Welcome";
import CustErrorBoundary from "./ErrorBoundary";

const AppWrapper = ({ children }: { children: React.ReactNode }) => {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }
    return (
        <CustErrorBoundary>
            <div>
                <div
                    className={`  selection:bg-amber-500 selection:text-amber-200 w-screen text-stone-900 dark:text-amber-100 dark:bg-stone-900 bg-white `}
                >
                    <Menu />
                    <CustErrorBoundary>{children}</CustErrorBoundary>
                </div>
                <Welcome />
                <Toaster />
            </div>
        </CustErrorBoundary>
    );
};

export default AppWrapper;
