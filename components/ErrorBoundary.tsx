import splitbee from "@splitbee/web";
import { ErrorBoundary } from "react-error-boundary";
import toast from "react-hot-toast";

const notify = () => toast.error("😵 Oh jeez, something went wrong.");

const FallbackComponent = () => {
    return (
        <div className="h-full w-full text-center">
            <h1 className="text-lg my-auto">😵</h1>
        </div>
    );
};

const myErrorHandler = (error: Error, info: { componentStack: string }) => {
    splitbee.track("Error", {
        message: error.message,
    });
    notify();
};

const CustErrorBoundary = ({ children }) => {
    return (
        <ErrorBoundary
            FallbackComponent={FallbackComponent}
            onError={myErrorHandler}
        >
            {children}
        </ErrorBoundary>
    );
};

export default CustErrorBoundary;
