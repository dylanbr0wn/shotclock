import "../styles/index.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import * as React from "react";
import splitbee from "@splitbee/web";
import { ThemeProvider } from "next-themes";

// This initiliazes Splitbee.js
splitbee.init({
    scriptUrl: "/bee.js",
    apiUrl: "/_hive",
});

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <Component {...pageProps} />
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default MyApp;
