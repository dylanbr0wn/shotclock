import { RadioGroup } from "@headlessui/react";
import { Control, Controller, UseFormSetValue } from "react-hook-form";
import z from "zod";
import * as React from "react";
import { zTasteForm } from "./TasteForm";

export const zRoast = z.object({
    name: z.string(),
    id: z.string(),
});

const roasts = [
    { id: "light", name: "Light", bg: "bg-amber-500" },
    { id: "medium", name: "Medium", bg: "bg-amber-700" },
    { id: "dark", name: "Dark", bg: "bg-amber-900" },
];

interface IRoast {
    control: Control<z.infer<typeof zTasteForm>>;
    setValue: UseFormSetValue<z.infer<typeof zTasteForm>>;
}

const Roast = ({ control, setValue }) => {
    const [roast, setRoast] = React.useState<z.infer<typeof zRoast>>();
    return (
        <Controller
            name="coffeeRoast"
            control={control}
            render={({ field }) => (
                <RadioGroup
                    ref={field.ref}
                    name="coffeeRoast"
                    value={roast}
                    onChange={(val) => {
                        setRoast(val);
                        setValue("coffeeRoast", val, {
                            shouldValidate: true,
                            shouldDirty: true,
                            shouldTouch: true,
                        });
                    }}
                >
                    <div className=" flex space-x-1">
                        {roasts.map((plan) => (
                            <RadioGroup.Option
                                key={plan.id}
                                value={plan}
                                className={({ active, checked }) =>
                                    `${
                                        active
                                            ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-amber-300"
                                            : ""
                                    }
                                                                                    ${
                                                                                        checked
                                                                                            ? `${plan.bg} text-white`
                                                                                            : "bg-white"
                                                                                    }
                                                                                    relative border border-stone-200 flex cursor-pointer transition-colors rounded-lg px-3 py-2 focus:outline-none`
                                }
                            >
                                {({ active, checked }) => (
                                    <>
                                        <div className="flex w-full items-center justify-between">
                                            <div className="flex items-center">
                                                <div className="">
                                                    <RadioGroup.Label
                                                        as="p"
                                                        className={`font-medium  ${
                                                            checked
                                                                ? "text-white"
                                                                : "text-stone-600"
                                                        }`}
                                                    >
                                                        {plan.name}
                                                    </RadioGroup.Label>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </RadioGroup.Option>
                        ))}
                    </div>
                </RadioGroup>
            )}
        />
    );
};

export default Roast;
