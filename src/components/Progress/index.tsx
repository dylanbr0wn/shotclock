import styles from "./Progress.module.scss";
import * as React from "react";
import { useSpring, a, config } from "@react-spring/web";
import useStore from "../../utils/zustand";
import shallow from "zustand/shallow";

const Progress = () => {
	const [sab, setSab] = React.useState(0);
	const [sat, setSat] = React.useState(0);
	const { percent, running } = useStore(
		(state) => ({
			running: state.running,
			percent: state.percent,
		}),
		shallow
	);

	const [{ height }, api] = useSpring(() => ({
		height: "0vh",
		config: config.molasses,
	}));

	React.useEffect(() => {
		const sat = Number(
			getComputedStyle(window.document.documentElement)
				.getPropertyValue("--sat")
				.slice(0, -2)
		);
		setSat(sat);
	}, []);

	React.useEffect(() => {
		let height = "0vh";
		if (sab > 0 && sat > 0) {
			height = `${(percent / 100) * 70}vh`;
		} else if (sab > 0 || sat > 0) {
			height = `${(percent / 100) * 75}vh`;
		} else {
			height = `${(percent / 100) * 80}vh`;
		}

		api({
			height,
		});
	}, [api, percent, sab, sat]);

	return (
		<>
			<div
				className={`absolute ${
					sab > 0 && sat > 0
						? "bottom-[70vh]"
						: sab > 0 || sat > 0
						? "bottom-[75vh]"
						: "bottom-[80vh]"
				} right-0 w-20 text-center border-b dark:border-amber-100 border-stone-900 dark:text-amber-100 text-stone-900 duration-500 transition-opacity ${
					percent > 0 ? "opacity-100" : "opacity-25"
				}`}
			>
				max fill
			</div>
			<div
				className={`fixed pointer-events-none w-screen overflow-hidden ${styles.safeBottom}`}
			>
				<div className={`flex flex-col h-full relative bottom-0`}>
					<svg
						// style={{
						//     ...props,
						// }}
						className={`${
							styles.waves
						} mt-auto flex-shrink-0 h-[1vh] md:h-[10vh] duration-1000 transform translate-y-1 ${
							running ? "scale-y-125" : "scale-y-50"
						} transition-all  `}
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						viewBox="0 24 150 28"
						preserveAspectRatio="none"
						shapeRendering="auto"
					>
						<defs>
							<path
								id="gentle-wave"
								d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
							/>
						</defs>
						<g className={styles.parallax}>
							<use
								xlinkHref="#gentle-wave"
								x="48"
								y="3"
								fill="#CA8A04"
								fillOpacity={0.8}
							/>
							<use
								xlinkHref="#gentle-wave"
								x="48"
								y="5"
								fill="#B45309"
								fillOpacity={0.8}
							/>
							<use fill="#92400E" xlinkHref="#gentle-wave" x="48" y="7" />
						</g>
					</svg>
					<a.div
						style={{ height }}
						className="flex bg-amber-800 origin-bottom flex-shrink"
					/>
					{/* <div
                        className={`flex  bg-amber-800 origin-bottom flex-shrink ${styles.tabExtra}`}
                    /> */}
				</div>
			</div>
		</>
	);
};

export default Progress;
