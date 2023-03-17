import { PauseIcon, PlayIcon, RefreshIcon } from "@heroicons/react/outline";
import { config, useSpring, a } from "@react-spring/web";
import * as React from "react";
import shallow from "zustand/shallow";
import { useStopWatch } from "../../utils/hooks";
import useStore from "../../utils/zustand";
import Picker from "./Picker";
import SaveButton from "./SaveButton";

const Time = () => {
	const { start, stop, reset } = useStopWatch();
	const { percent, running, time } = useStore(
		(state) => ({
			running: state.running,
			percent: state.percent,
			time: state.time,
		}),
		shallow
	);

	const { opacity } = useSpring({
		opacity: time > 0 ? 0 : 1,
		config: config.molasses,
	});

	React.useEffect(() => {
		return () => {
			reset();
		};
	}, []);

	return (
		<>
			<span className="absolute transform -translate-x-[50%] -translate-y-[50%] top-[60%]  md:top-[50%] left-[50%] inline-block text-center">
				<div
					className={`text-7xl ${
						percent < 75
							? "text-stone-800 dark:text-amber-200"
							: "text-amber-200 dark:text-stone-800"
					} font-mono font-semibold transition-colors  duration-1000`}
				>
					{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:
					{("0" + (Math.floor(time / 10) % 100)).slice(-2)}
				</div>
				<div className="flex flex-col space-y-2 mt-4 md:mt-8 bg-amber-700/10 dark:bg-amber-100/70 p-2 rounded-lg">
					<div className="flex mx-auto space-x-2">
						<button
							title="start"
							disabled={running}
							onClick={start}
							className="rounded-lg px-4 py-3 bg-white dark:bg-stone-900 dark:text-amber-100  flex transition-all  duration-300 hover:text-green-500 dark:hover:text-green-500 shadow-md w-44 disabled:opacity-60  disabled:pointer-events-none"
						>
							<PlayIcon className="h-8 w-8 mx-4" />
							<div className="text-2xl my-auto ">Start</div>
						</button>
						<button
							title="pause"
							disabled={!running}
							onClick={stop}
							className="rounded-lg transition-all   hover:text-cyan-500 dark:hover:text-cyan-500 px-4 py-3 w-44 bg-white dark:bg-stone-900 dark:text-amber-100 flex shadow-md  disabled:opacity-60 disabled:pointer-events-none"
						>
							<PauseIcon className="h-8 w-8 mx-4" />
							<div className="text-2xl my-auto ">Pause</div>
						</button>
					</div>
					<div className="flex mx-auto space-x-2">
						<button
							title="reset"
							disabled={running || time === 0}
							onClick={reset}
							className="rounded-lg px-4 py-3 w-44 bg-white dark:bg-stone-900 dark:text-amber-100 flex transition-all hover:text-red-500 dark:hover:text-red-500 shadow-md  disabled:opacity-60 disabled:pointer-events-none"
						>
							<RefreshIcon className="h-8 w-8 mx-4" />
							<div className="text-2xl my-auto ">Reset</div>
						</button>
						<SaveButton />
					</div>
				</div>
				<div
					className={`${
						time > 0 && "opacity-0 pointer-events-none"
					} transition-opacity duration-1000 text-stone-900 dark:text-amber-100 mt-4 md:mt-8 font-extrabold text-2xl text-center`}
				>
					Target Brew Time
				</div>
				<div className="flex flex-col mx-auto  mt-4 rounded-lg ">
					<a.div
						style={{ opacity }}
						className={`text-3xl ${
							percent > 0 && "pointer-events-none"
						} flex flex-col  transition-colors bg-amber-700/10 dark:bg-amber-100/70 py-12 px-2 rounded-lg mx-auto`}
						// onMouseLeave={() => setOpen(false)}
					>
						<div className="my-auto">
							<div className="my-auto flex space-x-0.5">
								<Picker />
								{/* <div className="w-full text-left">s</div> */}
							</div>
						</div>
					</a.div>
				</div>
			</span>
		</>
	);
};
export default Time;
