import Progress from "../components/Progress";
import Time from "../components/Time";
import AppWrapper from "./AppWrapper";

const Brewery = () => {
    return (
        <AppWrapper>
            <div className="h-full w-full overflow-hidden">
                <Progress />
                <Time />
            </div>
        </AppWrapper>
    );
};
export default Brewery;
