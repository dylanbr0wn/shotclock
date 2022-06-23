import { Controller, useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import useLocalStorage from "../../utils/hooks/useLocalStorage";
import useStore from "../../utils/zustand";
import shallow from "zustand/shallow";
import { Disclosure, Listbox, RadioGroup, Transition } from "@headlessui/react";
import * as React from "react";
import BrewType, { zBrewMethod } from "./BrewType";
import FormDisclosure from "./FormDisclosure";
import Roast, { zRoast } from "./Roast";
import Rating from "./Rating";
import cuid from "cuid";
import toast from "react-hot-toast";
const notify = () => toast.success("Saved your brew ☕️");
const notifyError = () => toast.error("Uh oh... soemthing broke 😬");

export const zTasteForm = z.object({
    name: z.string(),
    time: z.number(),
    coffeeName: z.string().optional(),
    coffeeType: zBrewMethod.optional(),
    coffeeRoast: zRoast.optional(),
    grindSetting: z.string().optional(),
    coffeeIn: z.number().min(0).optional(),
    coffeeOut: z.number().min(0).optional(),
    // aroma: z.string().optional(),
    // sweetness: z.string().optional(),
    // body: z.string().optional(),
    // aftertaste: z.string().optional(),
    // taste: z.string().optional(),
    // bitterness: z.string().optional(),
    rating: z.number().min(0).max(10).step(1).optional(),
    comments: z.string().optional(),
});

const zTasteForms = z.array(zTasteForm.merge(z.object({ id: z.string() })));

const TasteForm = ({ closeModal }: { closeModal: () => void }) => {
    const [forms, setForms] = useLocalStorage<z.infer<typeof zTasteForms>>(
        "tasteForms",
        []
    );
    const [coffeeTasteOpen, setcoffeeTasteOpen] = React.useState(false);
    const { time } = useStore((state) => ({ time: state.time }), shallow);

    const {
        register,
        handleSubmit,
        watch,
        control,
        getValues,
        setValue,
        formState: { errors },
    } = useForm<z.infer<typeof zTasteForm>>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: zodResolver(zTasteForm),
        defaultValues: {
            name: "",
            time: time,
        },
    });

    const onSubmit = (data: z.infer<typeof zTasteForm>) => {
        try {
            setForms([...forms, { ...data, id: cuid() }]);
            notify();
            closeModal();
        } catch (e) {
            notifyError();
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <h1 className="text-xl font-bold">Save your coffee</h1> */}
                <div className="flex space-x-3">
                    <label className="flex flex-col w-2/3">
                        <div className=" text-sm text-stone-500">Name:</div>
                        <input
                            placeholder="My best brew ever!!"
                            className="p-2 rounded-lg border border-stone-200 placeholder:text-stone-400 transition-colors ring-0 outline-none focus:outline focus:outline-amber-500 outline-offset-0 focus:border-amber-500 hover:border-amber-500"
                            {...register("name")}
                        />
                    </label>
                </div>
                <div className="my-3">
                    <FormDisclosure title="Coffee Details">
                        <div className="flex flex-col space-y-3">
                            <div className="flex space-x-3">
                                <label className="flex flex-col w-full">
                                    <div className=" text-sm text-stone-500">
                                        Coffee Name:
                                    </div>
                                    <input
                                        placeholder="Kickass Coffee Beans"
                                        className="p-2 rounded-lg border border-stone-200 placeholder:text-stone-400   transition-colors ring-0 outline-none focus:outline focus:outline-amber-500 outline-offset-0 focus:border-amber-500 hover:border-amber-500"
                                        {...register("coffeeName")}
                                    />
                                </label>
                                <label className="flex flex-col w-2/3">
                                    <div className=" text-sm text-stone-500">
                                        Coffee Roast:
                                    </div>
                                    <Roast
                                        control={control}
                                        setValue={setValue}
                                    />
                                </label>
                            </div>
                        </div>
                    </FormDisclosure>
                </div>
                <div className="my-3">
                    <FormDisclosure title="Brew Details">
                        <div className="flex flex-col space-y-3 w-full">
                            <div className="flex space-x-3">
                                <label className="flex flex-col w-full">
                                    <div className=" text-sm text-stone-500">
                                        Coffee Name:
                                    </div>
                                    <input
                                        placeholder="Kickass Coffee Beans"
                                        className="p-2 rounded-lg border border-stone-200 placeholder:text-stone-400   transition-colors ring-0 outline-none focus:outline focus:outline-amber-500 outline-offset-0 focus:border-amber-500 hover:border-amber-500"
                                        {...register("coffeeName")}
                                    />
                                </label>
                                <label className="flex flex-col w-full">
                                    <div className=" text-sm text-stone-500">
                                        Brew Method:
                                    </div>
                                    <BrewType
                                        control={control}
                                        setValue={setValue}
                                        getValues={getValues}
                                    />
                                </label>
                            </div>
                            <div className="flex space-x-3 w-full">
                                <label className="flex flex-col w-1/3">
                                    <div className=" text-sm text-stone-500">
                                        Grind Setting:
                                    </div>
                                    <input
                                        placeholder="8"
                                        type="number"
                                        className="p-2 w-full rounded-lg border border-stone-200 placeholder:text-stone-400   transition-colors ring-0 outline-none focus:outline focus:outline-amber-500 outline-offset-0 focus:border-amber-500 hover:border-amber-500 focus:ring-0 focus:outline-offset-0"
                                        {...register("grindSetting", {
                                            valueAsNumber: true,
                                        })}
                                    />
                                </label>
                                <label className="flex flex-col w-1/3">
                                    <div className=" text-sm text-stone-500">
                                        Coffee In (weight):
                                    </div>
                                    <input
                                        placeholder="18"
                                        type="number"
                                        className="p-2 w-full  rounded-lg border border-stone-200 placeholder:text-stone-400   transition-colors ring-0 outline-none focus:outline focus:outline-amber-500 outline-offset-0 focus:border-amber-500 hover:border-amber-500 focus:ring-0 focus:outline-offset-0"
                                        {...register("coffeeIn", {
                                            valueAsNumber: true,
                                        })}
                                    />
                                </label>
                                <label className="flex flex-col w-1/3">
                                    <div className=" text-sm text-stone-500">
                                        Coffee Out (weight):
                                    </div>
                                    <input
                                        placeholder="35"
                                        type="number"
                                        className="p-2 w-full rounded-lg border border-stone-200 placeholder:text-stone-400   transition-colors ring-0 outline-none focus:outline focus:outline-amber-500 outline-offset-0 focus:border-amber-500 hover:border-amber-500 focus:ring-0 focus:outline-offset-0"
                                        {...register("coffeeOut", {
                                            valueAsNumber: true,
                                        })}
                                    />
                                </label>
                            </div>
                            <div className="flex space-x-3 w-full">
                                <label className="flex flex-col w-1/3">
                                    <div className=" text-sm text-stone-500">
                                        Time(from timer):
                                    </div>
                                    <input
                                        {...register("time")}
                                        className="hidden"
                                    />
                                    <input
                                        disabled
                                        className="p-2 rounded-lg border border-stone-200 placeholder:text-stone-400   transition-colors ring-0 outline-none focus:outline "
                                        value={`${(
                                            "0" + Math.floor((time / 1000) % 60)
                                        ).slice(-2)}:${(
                                            "0" +
                                            (Math.floor(time / 10) % 100)
                                        ).slice(-2)}`}
                                    />
                                </label>
                            </div>
                        </div>
                    </FormDisclosure>
                </div>
                <div className=" flex flex-col my-3 space-y-3">
                    <label className="flex flex-col ">
                        <div className=" text-sm text-stone-500">Rating:</div>
                        <Rating getValues={getValues} setValue={setValue} />
                    </label>
                    <label className="flex flex-col w-2/3">
                        <div className=" text-sm text-stone-500">Comments:</div>
                        <textarea
                            rows={4}
                            placeholder={`Aroma, Sweetness, Bitterness, Taste, Body, Aftertaste`}
                            className="p-2 w-full rounded-lg border border-stone-200 placeholder:text-stone-400   transition-colors ring-0 outline-none focus:outline focus:outline-amber-500 outline-offset-0 focus:border-amber-500 hover:border-amber-500 focus:ring-0 focus:outline-offset-0"
                            {...register("comments")}
                        />
                    </label>
                </div>

                <div className="mt-4">
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-amber-100 px-4 py-2 text-sm font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2"
                    >
                        Save this sucker!
                    </button>
                </div>
            </form>
        </div>
    );
};
export default TasteForm;
