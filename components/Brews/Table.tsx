import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TrashIcon, XIcon } from "@heroicons/react/outline";
import TasteForm from "../Form/TasteForm";
import useBrews from "../../utils/hooks/useBrew";
import { Brew } from "../../utils/types";
import splitbee from "@splitbee/web";

const CustTable = () => {
    const loadBrew = (brew: Brew) => {
        setSelectedBrew(brew);
        openModal();
        console.log(brew);
    };

    const [selectedBrew, setSelectedBrew] = React.useState<Brew>();

    const [isOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    const { brews, removeBrew } = useBrews();

    const pourOneOut = (brew: Brew | undefined) => {
        removeBrew(brew?.id ?? "");
        closeModal();
        setSelectedBrew(undefined);
    };

    return (
        <>
            <table className="table-auto max-h-full min-w-full border-separate border-spacing-0 rounded-t-xl">
                <thead className="rounded-t-xl">
                    <tr className="text-amber-900 dark:text-amber-100">
                        <th className="sticky top-0 border-b border-amber-300 dark:bg-amber-900/30  bg-amber-100 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold  backdrop-blur backdrop-filter sm:pl-6 lg:pl-8 mx-0">
                            Name
                        </th>
                        <th className="sticky top-0 hidden border-amber-300  border-b dark:bg-amber-900/30  bg-amber-100 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold  backdrop-blur backdrop-filter lg:table-cell  mx-0">
                            Rating
                        </th>
                        <th className="sticky top-0 border-amber-300  border-b dark:bg-amber-900/30  bg-amber-100 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold backdrop-blur backdrop-filter mx-0">
                            Created On
                        </th>
                    </tr>
                </thead>
                <tbody className="text-amber-100">
                    {brews.map((brew) => {
                        return (
                            <tr
                                onClick={() => loadBrew(brew)}
                                className="odd:bg-amber-50 dark:odd:bg-stone-800 cursor-pointer hover:bg-amber-50 odd:hover:bg-amber-100 dark:hover:bg-stone-800 dark:odd:hover:bg-stone-700 "
                                key={brew.id}
                            >
                                <td className="whitespace-nowrap border-b border-amber-200 dark:border-stone-700 py-4 pl-4 pr-3 text-sm font-medium text-stone-900 dark:text-amber-100 sm:pl-6 lg:pl-8">
                                    {brew.name ?? ""}
                                </td>
                                <td className="whitespace-nowrap border-b border-amber-200 dark:text-amber-100 dark:border-stone-700 px-3 py-4 text-sm text-stone-500 hidden lg:table-cell">
                                    {brew.rating ?? "N/A "}
                                </td>
                                <td className="whitespace-nowrap border-b border-amber-200 dark:text-amber-100 dark:border-stone-700 px-3 py-4 text-sm text-stone-500">
                                    {new Date(
                                        brew.created ?? ""
                                    ).toLocaleDateString()}
                                </td>
                            </tr>
                        );
                    })}
                    {brews.length === 0 && (
                        <tr>
                            <td
                                colSpan={3}
                                className="text-center py-3 text-stone-900 dark:text-amber-100"
                            >
                                No caffeine to display... yet 🤔
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Transition appear show={isOpen} as={React.Fragment}>
                <Dialog
                    as="div"
                    className={` relative z-10 dark:text-amber-100 text-stone-900 dark:bg-stone-900 bg-white selection:bg-amber-500 selection:text-amber-200 `}
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

                    <div className={` fixed inset-0 overflow-y-auto`}>
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
                                        className="text-2xl font-medium leading-6 text-gray-900 dark:text-amber-100 flex"
                                    >
                                        <div className="my-auto mr-3">
                                            Your Brew
                                        </div>

                                        <button
                                            onClick={() => {
                                                splitbee.track(
                                                    "Brews poured Out"
                                                );
                                                pourOneOut(selectedBrew);
                                            }}
                                            className="inline-flex text-sm justify-center rounded-md border border-transparent px-4 py-2 font-medium text-red-800 dark:text-red-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 transition-colors"
                                        >
                                            <TrashIcon className="h-5 w-5 my-auto mr-2" />
                                            <div>Pour out</div>
                                        </button>
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <TasteForm
                                            defaultForm={selectedBrew}
                                            closeModal={closeModal}
                                        />
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

export default CustTable;
