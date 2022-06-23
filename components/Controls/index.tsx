// import { PauseIcon, PlayIcon, XCircleIcon } from "@heroicons/react/outline";
// import { config, useTransition, a, useSpring } from "@react-spring/web";
// import * as React from "react";

// export interface IControlsProps {
//     start: () => void;
//     stop: () => void;
//     reset: () => void;
// }

// const Controls = ({ start, stop, reset }: IControlsProps) => {
//     const [buttons, setButtons] = React.useState(["start"]);
//     const [stopHover, setStopHover] = React.useState(false);
//     const [startHover, setStartHover] = React.useState(false);
//     const [resetHover, setResetHover] = React.useState(false);

//     const startTransition = useTransition(buttons.includes("start"), {
//         from: { opacity: 0, y: -50 },
//         enter: { opacity: 1, y: 0 },
//         leave: { opacity: 0, y: 50 },
//         config: config.stiff,
//     });
//     const resetTransition = useTransition(buttons.includes("reset"), {
//         from: { opacity: 0, x: 0 },
//         enter: { opacity: 1, x: 90 },
//         leave: { opacity: 0, x: 0 },
//         config: config.stiff,
//     });
//     const stopTransition = useTransition(buttons.includes("stop"), {
//         from: { opacity: 0, y: -50 },
//         enter: { opacity: 1, y: 0 },
//         leave: { opacity: 0, y: 50 },
//         config: config.stiff,
//     });
//     const stopSpring = useSpring({
//         scale: stopHover ? 1.05 : 1,
//     });
//     const startSpring = useSpring({
//         scale:
//             (startHover ? 1.05 : 1) *
//             (buttons.length === 1 && buttons[0] === "start" ? 1.3 : 1),
//     });
//     const resetSpring = useSpring({
//         scale: resetHover ? 1.05 : 1,
//     });

//     return (
//         <div className="flex space-x-2 px-10 mt-4 mb-6 h-32">
//             <div className="w-full flex justify-around relative h-24 my-auto">
//                 {startTransition(
//                     (style, item) =>
//                         item && (
//                             <a.div
//                                 style={{ ...style, ...startSpring }}
//                                 className="absolute w-24 h-24 origin-center"
//                             >
//                                 <button
//                                     onMouseEnter={() => setStartHover(true)}
//                                     onMouseLeave={() => setStartHover(false)}
//                                     className="rounded-full inset-0 origin-center absolute hover:text-stone-900/80 active:text-stone-900 transition-colors text-stone-900/50 focus:outline-none "
//                                     onClick={() => {
//                                         start();
//                                         setButtons(["stop", "reset"]);
//                                     }}
//                                 >
//                                     <PlayIcon className="h-24 w-24 mx-auto" />
//                                 </button>
//                                 <div
//                                     // style={{ ...style, ...resetSpring }}
//                                     className={`absolute text-sm pointer-events-none bottom-0 delay-200 duration-300 transform transition-all ${
//                                         item && startHover
//                                             ? "opacity-50 translate-y-3"
//                                             : "opacity-0"
//                                     } w-24`}
//                                 >
//                                     Start Brewing
//                                 </div>
//                             </a.div>
//                         )
//                 )}
//                 {stopTransition(
//                     (style, item) =>
//                         item && (
//                             <a.div
//                                 style={{ ...style, ...stopSpring }}
//                                 className="absolute w-24 h-24 origin-center"
//                             >
//                                 <button
//                                     onMouseEnter={() => setStopHover(true)}
//                                     onMouseLeave={() => setStopHover(false)}
//                                     className="rounded-full inset-0 absolute hover:text-stone-900/80 active:text-stone-900 transition-colors text-stone-900/50 focus:outline-none"
//                                     onClick={() => {
//                                         stop();
//                                         setButtons(["start", "reset"]);
//                                     }}
//                                 >
//                                     <PauseIcon className="h-24 w-24 mx-auto" />
//                                 </button>
//                                 <div
//                                     // style={{ ...style, ...resetSpring }}
//                                     className={`absolute pointer-events-none bottom-0 delay-200 duration-300 transform transition-all ${
//                                         item && stopHover
//                                             ? "opacity-50 translate-y-5"
//                                             : "opacity-0"
//                                     } w-24`}
//                                 >
//                                     Stop
//                                 </div>
//                             </a.div>
//                         )
//                 )}
//                 {resetTransition(
//                     (style, item) =>
//                         item && (
//                             <a.div
//                                 style={{ ...style, ...resetSpring }}
//                                 className="absolute my-2 w-20 h-20 origin-center"
//                             >
//                                 <button
//                                     // style={{ ...style, ...resetSpring }}
//                                     onMouseEnter={() => setResetHover(true)}
//                                     onMouseLeave={() => setResetHover(false)}
//                                     className="rounded-full inset-0 absolute hover:text-stone-900/80  active:text-stone-900 transition-colors text-stone-900/50 focus:outline-none "
//                                     onClick={() => {
//                                         reset();
//                                         setButtons(["start"]);
//                                     }}
//                                 >
//                                     <XCircleIcon className="h-20 w-20 mx-auto" />
//                                 </button>
//                                 <div
//                                     // style={{ ...style, ...resetSpring }}
//                                     className={`absolute pointer-events-none bottom-0 delay-200 duration-300 transform transition-all ${
//                                         item && resetHover
//                                             ? "opacity-50 translate-y-5"
//                                             : "opacity-0"
//                                     } w-20`}
//                                 >
//                                     Reset
//                                 </div>
//                             </a.div>
//                         )
//                 )}
//             </div>
//             {/* <div className="w-full">

//             </div>
//             <div className="w-full px-2"></div> */}
//         </div>
//     );
// };
// export default Controls;
