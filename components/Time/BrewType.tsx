import { Listbox, Transition } from "@headlessui/react";
import {
    Controller,
    Control,
    SetFieldValue,
    UseFormSetValue,
    UseFormGetValues,
} from "react-hook-form";
import z from "zod";
import * as React from "react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/outline";
import { zTasteForm } from "./TasteForm";

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

export const zBrewMethod = z.object({
    name: z.string(),
    id: z.string(),
});

interface IBrewType {
    control: Control<z.infer<typeof zTasteForm>>;
    setValue: UseFormSetValue<z.infer<typeof zTasteForm>>;
    getValues: UseFormGetValues<z.infer<typeof zTasteForm>>;
}

const BrewType = ({ control, setValue, getValues }: IBrewType) => {
    const [selectedBrewMethod, setSelectedBrewMethod] =
        React.useState<z.infer<typeof zBrewMethod>>();
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
                        <Listbox.Button className="p-2 w-full relative rounded-lg border border-stone-200 bg-white transition-colors ring-0 outline-none focus:outline focus:outline-amber-500 outline-offset-0 focus:border-amber-500 hover:border-amber-500 flex ">
                            <span className="block truncate">
                                {getValues("coffeeType.name") ?? (
                                    <span className="text-stone-400">
                                        Choose a method...
                                    </span>
                                )}
                            </span>
                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                <SelectorIcon
                                    className="h-5 w-5 text-gray-400"
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
                            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                {brewMethods.map((method) => (
                                    <Listbox.Option
                                        key={method.id}
                                        className={({ active }) =>
                                            `relative cursor-default select-none py-2 pl-10 pr-4 ${
                                                active
                                                    ? "bg-amber-100 text-amber-900"
                                                    : "text-gray-900"
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
                                                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
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
