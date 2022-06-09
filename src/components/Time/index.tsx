import { config, useSpring, a } from "@react-spring/web";

const Time = ({
    time,
    percent,
    goal,
}: {
    time: number;
    percent: number;
    goal: number;
}) => {
    const props = useSpring({
        opacity: time > 0 ? 0 : 1,
        config: config.molasses,
    });

    return (
        <>
            <div
                className={`text-5xl ${
                    percent < 45 ? "text-stone-800" : "text-amber-200"
                } font-mono font-semibold transition-colors  duration-1000`}
            >
                {("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
                {("0" + ((time / 10) % 100)).slice(-2)}
            </div>
            <a.div style={props} className="text-lg">
                Target time:{" "}
                <strong className="font-bold">
                    {("0" + Math.floor((goal / 1000) % 60)).slice(-2)}
                </strong>{" "}
                seconds
            </a.div>
        </>
    );
};
export default Time;
