import "../styles/index.scss";
import type { AppProps } from "next/app";
import * as React from "react";
import splitbee from "@splitbee/web";
import { ThemeProvider } from "next-themes";

// This initiliazes Splitbee.js
splitbee.init({
    scriptUrl: "/bee.js",
    apiUrl: "/_hive",
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
