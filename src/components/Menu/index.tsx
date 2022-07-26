import Link from "next/link";
import * as React from "react";
import { FeedbackFish } from "@feedback-fish/react";
import Head from "next/head";
import {
	ChevronDownIcon,
	MoonIcon,
	SunIcon,
	VolumeOffIcon,
	VolumeUpIcon,
} from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import useLocalStorage from "../../utils/hooks/useLocalStorage";
import ShotClockLogo from "./ShotclockLogo";
import { Menu, Transition } from "@headlessui/react";
import CustMobileLink from "./CustMobileLink";

const CustMenu = () => {
	const { resolvedTheme, setTheme } = useTheme();
	const [volumeOn, setVolumeOn] = useLocalStorage<boolean>("volumeOn", true);
	return (
		<>
			<Head>
				<link rel="icon" type="image/svg+xml" href="/favicon.ico" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />

				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<meta
					name="description"
					content="Time, track, and log your coffee journey."
				/>
				<meta
					name="theme-color"
					content={resolvedTheme === "dark" ? "#1c1917" : "#92400E"}
				/>
				{/* <meta
                    name="theme-color"
                    content="#FFFFFF"
                    media="(prefers-color-scheme: light)"
                /> */}

				<link rel="manifest" href="/site.webmanifest" />
				<title>shotclock</title>
			</Head>
			<div className="fixed w-screen h-24 md:h-16 z-10 inset-0 bg-white/70 dark:bg-stone-900/70 dark:text-amber-100">
				<div className="max-w-7xl mx-auto h-full flex py-2">
					<Link href="/">
						<a>
							<button
								title="shotclock"
								className=" my-auto h-20 md:h-14 px-3 flex group "
							>
								<ShotClockLogo />
								<div className="text-2xl md:text-lg ml-5 md:ml-3 my-auto font-extrabold underline decoration-transparent hover:decoration-stone-900 dark:hover:decoration-amber-100  ">
									shotclock
								</div>
							</button>
						</a>
					</Link>
					<Link href="/brews">
						<a className="hidden md:inline">
							<button
								title="my brews"
								className=" my-auto  h-14 px-3 group flex transition-colors "
							>
								{/* <HomeIcon className="h-6 w-6 mr-3 my-auto" /> */}
								<div className="text-lg my-auto underline decoration-transparent dark:group-hover:decoration-amber-100  hover:decoration-stone-900">
									my brews
								</div>
							</button>
						</a>
					</Link>
					<Link href="/about">
						<a className="hidden md:inline">
							<button
								title="about"
								className="transition-colors my-auto  h-14 px-3 group  flex"
							>
								{/* <HomeIcon className="h-6 w-6 mr-3 my-auto" /> */}
								<div className="text-lg my-auto underline decoration-transparent dark:hover:decoration-amber-100 hover:decoration-stone-900 ">
									about
								</div>
							</button>
						</a>
					</Link>

					<div className="flex-grow"></div>
					<button
						title="toggle volume"
						name="toggle volume"
						onClick={() => setVolumeOn(!volumeOn)}
						className="my-auto hidden md:block h-14 mx-3 group pointer-events-auto border-b border-white  dark:border-stone-900 hover:border-transparent dark:hover:border-transparent " //this bs is for safari
					>
						{!volumeOn ? (
							<VolumeOffIcon className="h-6 w-6 border-b border-transparent text-stone-600 dark:text-amber-600 group-hover:border-stone-600 dark:group-hover:border-amber-600 pointer-events-none" />
						) : (
							<VolumeUpIcon className="h-6 w-6 border-b border-transparent text-stone-600 dark:text-amber-600 group-hover:border-stone-600 dark:group-hover:border-amber-600 pointer-events-none" />
						)}
					</button>
					<button
						title="toggle theme"
						name="toggle theme"
						onClick={() =>
							setTheme(resolvedTheme === "dark" ? "light" : "dark")
						}
						className="my-auto hidden md:block h-14 mx-3 group pointer-events-auto border-b border-white dark:border-stone-900 hover:border-transparent dark:hover:border-transparent"
					>
						{resolvedTheme === "light" ? (
							<MoonIcon className="h-6 w-6 border-b border-transparent text-stone-600 dark:text-amber-600 group-hover:border-stone-600 dark:group-hover:border-amber-600 pointer-events-none" />
						) : (
							<SunIcon className="h-6 w-6 border-b border-transparent text-stone-600 dark:text-amber-600 group-hover:border-stone-600 dark:group-hover:border-amber-600 pointer-events-none " />
						)}
					</button>
					<FeedbackFish projectId="98bcbfde97c737">
						<button
							title="feedback"
							className="hidden md:flex transition-colors group my-auto  h-14 px-3    "
						>
							{/* <HomeIcon className="h-6 w-6 mr-3 my-auto" /> */}
							<div className="text-lg my-auto underline text-stone-600 dark:text-amber-600 decoration-transparent hover:decoration-stone-600 dark:hover:decoration-amber-600">
								feedback
							</div>
						</button>
					</FeedbackFish>
					<a
						className="hidden md:inline"
						href="https://github.com/dylanbr0wn/shotclock"
					>
						<button
							title="see project code"
							className=" transition-colors group my-auto h-14 px-3   flex  disabled:opacity-60 "
						>
							{/* <HomeIcon className="h-6 w-6 mr-3 my-auto" /> */}
							<div className="text-lg my-auto underline text-stone-600 dark:text-amber-600 decoration-transparent hover:decoration-stone-600 dark:hover:decoration-amber-600">
								github
							</div>
						</button>
					</a>
					<Menu
						as="div"
						className="relative inline-block md:hidden z-10 mx-3 my-auto "
					>
						<div>
							<Menu.Button className="inline-flex w-full justify-center bg-amber-100 rounded-lg px-4 py-2 text-xl font-medium text-stone-900 dark:text-amber-100 dark:bg-amber-700/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ">
								Menu
								<ChevronDownIcon
									className="ml-2 -mr-1 h-7 w-7 "
									aria-hidden="true"
								/>
							</Menu.Button>
						</div>
						<Transition
							as={React.Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute right-0 mt-2 w-80 origin-top-right divide-y divide-stone-200 dark:divide-stone-700 rounded-md bg-stone-100 dark:bg-stone-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="flex w-full py-3 px-3 space-x-3">
									<Menu.Item>
										<button
											title="toggle volume"
											name="toggle volume"
											onClick={() => setVolumeOn(!volumeOn)}
											className="my-auto flex-grow h-14 p-3 group pointer-events-auto  bg-white dark:bg-amber-700/10 border-white shadow-md  rounded-lg
                                                dark:border-stone-900 hover:border-transparent dark:hover:border-transparent " //this bs is for safari
										>
											{!volumeOn ? (
												<VolumeOffIcon className="h-8 w-8 mx-auto text-stone-600 dark:text-amber-600 group-hover:border-stone-600 dark:group-hover:border-amber-600 pointer-events-none" />
											) : (
												<VolumeUpIcon className="h-8 w-8 mx-auto text-stone-600 dark:text-amber-600 group-hover:border-stone-600 dark:group-hover:border-amber-600 pointer-events-none" />
											)}
										</button>
									</Menu.Item>
									<Menu.Item>
										<button
											title="toggle theme"
											name="toggle theme"
											onClick={() =>
												setTheme(resolvedTheme === "dark" ? "light" : "dark")
											}
											className="my-auto flex-grow h-14 p-3 group pointer-events-auto bg-white dark:bg-amber-700/10 shadow-md  rounded-lg
                                                dark:border-stone-900 hover:border-transparent dark:hover:border-transparent "
										>
											{resolvedTheme === "light" ? (
												<MoonIcon className="h-8 w-8 mx-auto  text-stone-600 dark:text-amber-600 group-hover:border-stone-600 dark:group-hover:border-amber-600 pointer-events-none" />
											) : (
												<SunIcon className="h-8 w-8 mx-auto text-stone-600 dark:text-amber-600 dark:group-hover:border-amber-600 pointer-events-none " />
											)}
										</button>
									</Menu.Item>
								</div>
								<div className="flex flex-col w-full py-3 px-3 space-y-2">
									<Menu.Item>
										<CustMobileLink href="/">
											<button
												title="my brews"
												className="my-auto w-full h-14 p-3 group pointer-events-auto bg-white dark:bg-amber-700/10 shadow-md  rounded-lg"
											>
												{/* <HomeIcon className="h-6 w-6 mr-3 my-auto" /> */}
												<div className="text-xl my-auto ">⏰ shotclock</div>
											</button>
										</CustMobileLink>
									</Menu.Item>
									<Menu.Item>
										<CustMobileLink href="/brews">
											<button
												title="my brews"
												className="my-auto w-full h-14 p-3 group pointer-events-auto bg-white dark:bg-amber-700/10 shadow-md  rounded-lg"
											>
												{/* <HomeIcon className="h-6 w-6 mr-3 my-auto" /> */}
												<div className="text-xl my-auto ">☕️ my brews</div>
											</button>
										</CustMobileLink>
									</Menu.Item>

									<Menu.Item>
										<CustMobileLink href="/about">
											<button
												title="about"
												className="my-auto w-full h-14 p-3 group pointer-events-auto bg-white dark:bg-amber-700/10 shadow-md  rounded-lg"
											>
												{/* <HomeIcon className="h-6 w-6 mr-3 my-auto" /> */}
												<div className="text-xl my-auto ">🤨 about</div>
											</button>
										</CustMobileLink>
									</Menu.Item>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</div>
		</>
	);
};

export default CustMenu;
