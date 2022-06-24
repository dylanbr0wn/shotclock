import z from "zod";

import * as React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { TrashIcon } from "@heroicons/react/outline";
import TasteForm from "../Form/TasteForm";
import useBrews from "../../utils/hooks/useBrew";
import { Brew } from "../../utils/types";

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
            <table className="table-auto max-h-full min-w-full border-separate border-spacing-0">
                <thead className="">
                    <tr>
                        <th className="sticky top-0 border-b border-amber-300 bg-amber-100 bg-opacity-75 py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-amber-900 backdrop-blur backdrop-filter sm:pl-6 lg:pl-8 mx-0">
                            Name
                        </th>
                        <th className="sticky top-0 hidden border-b border-amber-300 bg-amber-100 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-amber-900 backdrop-blur backdrop-filter lg:table-cell  mx-0">
                            Rating
                        </th>
                        <th className="sticky top-0 border-b border-amber-300 bg-amber-100 bg-opacity-75 px-3 py-3.5 text-left text-sm font-semibold text-amber-900 backdrop-blur backdrop-filter mx-0">
                            Created On
                        </th>
                    </tr>
                </thead>
                <tbody className="">
                    {brews.map((brew) => {
                        return (
                            <tr
                                onClick={() => loadBrew(brew)}
                                className="odd:bg-amber-50 cursor-pointer"
                                key={brew.id}
                            >
                                <td className="whitespace-nowrap border-b border-amber-200 py-4 pl-4 pr-3 text-sm font-medium text-stone-900 sm:pl-6 lg:pl-8">
                                    {brew.name ?? ""}
                                </td>
                                <td className="whitespace-nowrap border-b border-amber-200 px-3 py-4 text-sm text-stone-500 hidden lg:table-cell">
                                    {brew.rating ?? "N/A "}
                                </td>
                                <td className="whitespace-nowrap border-b border-amber-200 px-3 py-4 text-sm text-stone-500">
                                    {new Date(
                                        brew.created ?? ""
                                    ).toLocaleDateString()}
                                </td>
                            </tr>
                        );
                    })}
                    {brews.length === 0 && (
                        <tr>
                            <td colSpan={3} className="text-center py-3">
                                No caffiene to display... yet 🤔
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <Transition appear show={isOpen} as={React.Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                                <Dialog.Panel className="w-full max-w-xl transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900 flex"
                                    >
                                        <div className="flex-grow">
                                            Your Brew
                                        </div>

                                        <button
                                            onClick={() =>
                                                pourOneOut(selectedBrew)
                                            }
                                            className="inline-flex text-sm justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 transition-colors"
                                        >
                                            <TrashIcon className="h-5 w-5 my-auto mr-3" />
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
