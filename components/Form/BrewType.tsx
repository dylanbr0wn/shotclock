import { Listbox, Transition } from "@headlessui/react";
import {
    Controller,
    Control,
    UseFormSetValue,
    UseFormGetValues,
} from "react-hook-form";
import z from "zod";
import * as React from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/outline";

import { Brew, IZBrewMethod } from "../../utils/types";

const brewMethods = [
    { id: "chemex", name: "Chemex" },
    { id: "espresso", name: "Espresso" },
    { id: "frenchPress", name: "French Press" },
    { id: "pourOver", name: "Pour Over" },
    { id: "mokaPot", name: "Moka Pot" },
    { id: "aeroPress", name: "Aeropress" },
    { id: "siphonBrewer", name: "Siphon Brewer" },
    { id: "v60", name: "V60" },
    { id: "percolator", name: "Percolator" },
    { id: "drip", name: "Drip" },
    { id: "melitta", name: "Melitta" },
    { id: "beeHouse", name: "BeeHouse" },
    { id: "nelDrip", name: "Nel Drip" },
    { id: "kalitaWave", name: "Kalita Wave" },
    { id: "other", name: "Other" },
];

interface IBrewType {
    control: Control<Brew>;
    setValue: UseFormSetValue<Brew>;
    getValues: UseFormGetValues<Brew>;
}

const BrewType = ({ control, setValue, getValues }: IBrewType) => {
    const [selectedBrewMethod, setSelectedBrewMethod] =
        React.useState<IZBrewMethod>();
    return (
        <Controller
            control={control}
            name="coffeeType"
            render={({ field }) => (
                <Listbox
                    name={field.name}
                    value={selectedBrewMethod}
                    onChange={(value) => {
                        // field.onChange(
                        //     e
                        // );
                        setSelectedBrewMethod(value);
                        setValue("coffeeType", value, {
                            shouldValidate: true,
                            shouldDirty: true,
                            shouldTouch: true,
                        });
                    }}
                >
                    <div className="relative w-full">
                        <Listbox.Button className="p-2 w-full relative text-left dark:text-amber-100 rounded-lg border dark:bg-stone-900 border-stone-200 dark:border-stone-600 placeholder:text-stone-400 transition-colors ring-0 bg-white outline-none focus:ring focus:ring-amber-500 ring-offset-0 focus:border-amber-500 hover:border-amber-500">
                            <span className="block truncate">
                                {getValues("coffeeType.name") ?? (
                                    <span className="text-stone-400">
                                        Choose a method...
                                    </span>
                                )}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <SelectorIcon
                                    className="h-5 w-5 text-stone-400"
                                    aria-hidden="true"
                                />
                            </span>
                        </Listbox.Button>
                        <Transition
                            as={React.Fragment}
                            leave="transition ease-in duration-100"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-stone-900  py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {brewMethods.map((method) => (
                                    <Listbox.Option
                                        key={method.id}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active
                                                    ? "bg-amber-100 text-amber-900 dark:bg-stone-800 dark:text-amber-300"
                                                    : "text-stone-900 dark:text-amber-100"
                                            }`
                                        }
                                        value={method}
                                    >
                                        {({ selected }) => (
                                            <>
                                                <span
                                                    className={`block truncate ${
                                                        selected
                                                            ? "font-medium"
                                                            : "font-normal"
                                                    }`}
                                                >
                                                    {method.name}
                                                </span>
                                                {selected ? (
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600 dark:text-amber-300">
                                                        <CheckIcon
                                                            className="h-5 w-5"
                                                            aria-hidden="true"
                                                        />
                                                    </span>
                                                ) : null}
                                            </>
                                        )}
                                    </Listbox.Option>
                                ))}
                            </Listbox.Options>
                        </Transition>
                    </div>
                </Listbox>
            )}
        />
    );
};

export default BrewType;
