import {
    HomeIcon,
    MenuIcon,
    PhoneIcon,
    QuestionMarkCircleIcon,
    XIcon,
} from "@heroicons/react/outline";
import { useSpring, a } from "@react-spring/web";
import * as React from "react";

const Menu = () => {
    const [open, setOpen] = React.useState(false);
    const props = useSpring({ translateX: !open ? "-100%" : "0%" });

    return (
        <>
            <button
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
            </button>
            {/* <SlideMenu
                isOpen={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                pageWrapId={"page-wrap"}
                outerContainerId={"outer-container"}
                customBurgerIcon={false}
                customCrossIcon={false}
            > */}
            <a.div
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
            </a.div>
            {/* </SlideMenu> */}
        </>
    );
};

export default Menu;
