import "../styles/index.scss";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import * as React from "react";
import Menu from "../components/Menu";
import { Toaster } from "react-hot-toast";

function MyApp({ Component, pageProps }: AppProps) {
    const [queryClient] = React.useState(() => new QueryClient());
    return (
        <QueryClientProvider client={queryClient}>
            <div className=" selection:bg-amber-500 selection:text-amber-200">
                <Menu />
                <Component {...pageProps} />
                <Toaster />
            </div>
        </QueryClientProvider>
    );
}

export default MyApp;
