import Link from "next/link";
import * as React from "react";
import { FeedbackFish } from "@feedback-fish/react";
import Head from "next/head";
import Script from "next/script";

const Menu = () => {
    return (
        <>
            <Head>
                <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
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
                <link rel="manifest" href="/site.webmanifest" />
                <title>shotclock</title>
                <Script async data-api="/_hive" src="/bee.js"></Script>
            </Head>
            <div className="fixed w-screen h-16 z-10 inset-0 bg-white/70 ">
                <div className="max-w-7xl mx-auto h-full flex py-2">
                    <Link href="/">
                        <a>
                            <button className=" my-auto h-14 px-3 underline decoration-transparent hover:decoration-stone-900 flex ">
                                <svg
                                    className="h-8 w-auto  my-auto"
                                    width="118"
                                    height="148"
                                    viewBox="0 0 118 148"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M118 59.2516C118 71.8152 108.598 82 97 82C85.402 82 76 71.8152 76 59.2516C76 55.8516 76.6886 52.6259 77.9229 49.729C87.2326 27.8799 97 0 97 0C97 0 106.835 28.0387 116.077 49.729C117.311 52.6259 118 55.8516 118 59.2516Z"
                                        fill="#B45309"
                                    />
                                    <path
                                        d="M81 125.252C81 137.815 71.3741 148 59.5 148C47.6259 148 38 137.815 38 125.252C38 121.852 38.705 118.626 39.9687 115.729C49.5 93.8799 59.5 66 59.5 66C59.5 66 69.5693 94.0387 79.0313 115.729C80.295 118.626 81 121.852 81 125.252Z"
                                        fill="#F59E0B"
                                    />
                                    <path
                                        d="M42 59.2516C42 71.8152 32.598 82 21 82C9.40202 82 0 71.8152 0 59.2516C0 55.8516 0.688566 52.6259 1.92288 49.729C11.2326 27.8799 21 0 21 0C21 0 30.8351 28.0387 40.0771 49.729C41.3114 52.6259 42 55.8516 42 59.2516Z"
                                        fill="#78350F"
                                    />
                                </svg>
                                <div className="text-lg ml-3 my-auto font-extrabold">
                                    shotclock
                                </div>
                            </button>
                        </a>
                    </Link>
                    <Link href="/brews">
                        <a>
                            <button className="underline decoration-transparent hover:decoration-stone-900 transition-all my-auto  h-14 px-3   flex  disabled:opacity-60 ">
                                {/* <HomeIcon className="h-6 w-6 mr-3 my-auto" /> */}
                                <div className="text-lg my-auto ">my brews</div>
                            </button>
                        </a>
                    </Link>
                    <Link href="/about">
                        <a>
                            <button className="underline decoration-transparent hover:decoration-stone-900 transition-all my-auto  h-14 px-3   flex  disabled:opacity-60 ">
                                {/* <HomeIcon className="h-6 w-6 mr-3 my-auto" /> */}
                                <div className="text-lg my-auto ">about</div>
                            </button>
                        </a>
                    </Link>

                    <div className="flex-grow"></div>
                    <FeedbackFish projectId="98bcbfde97c737">
                        <button className="underline text-stone-600 decoration-transparent hover:decoration-stone-600 transition-all my-auto  h-14 px-3   flex  disabled:opacity-60 ">
                            {/* <HomeIcon className="h-6 w-6 mr-3 my-auto" /> */}
                            <div className="text-lg my-auto ">feedback</div>
                        </button>
                    </FeedbackFish>
                    <a href="https://github.com/dylanbr0wn/shotclock">
                        <button className="underline text-stone-600 decoration-transparent hover:decoration-stone-600 transition-all my-auto  h-14 px-3   flex  disabled:opacity-60 ">
                            {/* <HomeIcon className="h-6 w-6 mr-3 my-auto" /> */}
                            <div className="text-lg my-auto ">github</div>
                        </button>
                    </a>
                </div>
            </div>
            {/* <button
                onClick={() => setOpen(!open)}
                className="rounded text-stone-800 hover:text-amber-600 active:bg-amber-600/30 focus:outline-none fixed left-8 top-8 z-40"
            >
                <MenuIcon
                    className={`h-16 w-16 transition-all transform absolute inset-0 ${
                        open ? "rotate-90 opacity-0" : ""
                    }`}
                />
                <XIcon
                    className={`h-16 w-16 transition-all transform absolute inset-0 ${
                        !open ? "rotate-90 opacity-0" : ""
                    }`}
                />
            </button> */}
            {/* <SlideMenu
                isOpen={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
                customBurgerIcon={false}
                customCrossIcon={false}
            > */}
            {/* <a.div
                style={props}
                className="bg-stone-800  absolute w-screen h-screen z-50"
            >
                <div className="flex flex-col justify-center space-y-8 relative">
                    <button
                        onClick={() => setOpen(!open)}
                        className="rounded text-amber-500 hover:text-amber-600 active:bg-amber-600/30 focus:outline-none absolute right-20 top-8 z-40"
                    >
                        <MenuIcon
                            className={`h-16 w-16 transition-all transform absolute inset-0 ${
                                open ? "rotate-90 opacity-0" : ""
                            }`}
                        />
                        <XIcon
                            className={`h-16 w-16 transition-all transform absolute inset-0 ${
                                !open ? "rotate-90 opacity-0" : ""
                            }`}
                        />
                    </button>
                    <div className="text-xl">Menu</div>
                    <div className="flex">
                        <a className="mx-auto" href="/">
                            <button className="text-amber-500 flex justify-center content-center mx-auto hover:text-amber-600 active:bg-amber-600/30 focus:outline-none focus:ring focus:ring-amber-500 px-4 py-3 rounded-full">
                                <HomeIcon className="h-8 w-8 mx-3 my-auto" />
                                <div className="text-5xl my-auto mx-3 font-medium">
                                    Home
                                </div>
                            </button>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="mx-auto" href="/">
                            <button className="text-amber-500 flex justify-center content-center mx-auto hover:text-amber-600 active:bg-amber-600/30 focus:outline-none focus:ring focus:ring-amber-500 px-4 py-3 rounded-full">
                                <QuestionMarkCircleIcon className="h-8 w-8 mx-3 my-auto" />
                                <div className="text-5xl my-auto mx-3 font-medium">
                                    About
                                </div>
                            </button>
                        </a>
                    </div>
                    <div className="flex">
                        <a className="mx-auto" href="/">
                            <button className="text-amber-500 flex justify-center content-center mx-auto hover:text-amber-600 active:bg-amber-600/30 focus:outline-none focus:ring focus:ring-amber-500 px-4 py-3 rounded-full">
                                <PhoneIcon className="h-8 w-8 mx-3 my-auto" />
                                <div className="text-5xl my-auto mx-3 font-medium">
                                    Contact
                                </div>
                            </button>
                        </a>
                    </div>
                </div>
            </a.div> */}
            {/* </SlideMenu> */}
        </>
    );
};

export default Menu;
