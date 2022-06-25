import { BookmarkIcon, XIcon } from "@heroicons/react/outline";
import { Dialog, Transition } from "@headlessui/react";
import shallow from "zustand/shallow";
import useStore from "../../utils/zustand";
import * as React from "react";
import TasteForm from "../Form/TasteForm";
import { useTheme } from "next-themes";

const SaveButton = () => {
    const { time, running } = useStore(
        (state) => ({ time: state.time, running: state.running }),
        shallow
    );
    const [isOpen, setIsOpen] = React.useState(false);

    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);
    const { theme } = useTheme();

    return (
        <>
            <button
                title="save"
                onClick={openModal}
                disabled={time === 0 || running}
                className="hover:text-amber-600 dark:hover:text-amber-600  transition-all  rounded-lg px-4 py-3 w-44 bg-white dark:bg-stone-900 dark:text-amber-100 flex  shadow-md disabled:opacity-60 disabled:pointer-events-none"
            >
                <BookmarkIcon className="h-8 w-8 mx-4" />
                <div className="text-2xl my-auto ">Save</div>
            </button>
            <Transition appear show={isOpen} as={React.Fragment}>
                <Dialog
                    as="div"
                    className={`relative z-10 ${theme} dark:text-amber-100 text-stone-900 dark:bg-stone-900 bg-white selection:bg-amber-500 selection:text-amber-200 `}
                    onClose={closeModal}
                >
                    <Transition.Child
                        as={React.Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={React.Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-xl transform rounded-2xl bg-white dark:bg-stone-800 p-6 text-left align-middle shadow-xl transition-all">
                                    <button
                                        onClick={closeModal}
                                        className="p-1 absolute top-[1%] right-[1%] text-stone-700 dark:text-amber-300"
                                    >
                                        <XIcon className="h-6 w-6" />
                                    </button>
                                    <Dialog.Title
                                        as="h3"
                                        className="text-2xl font-medium leading-6 text-gray-900 dark:text-amber-100"
                                    >
                                        Fresh Brew
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <TasteForm closeModal={closeModal} />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
};
export default SaveButton;
