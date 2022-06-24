import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import useStore from "../../utils/zustand";
import shallow from "zustand/shallow";
import * as React from "react";
import BrewType from "./BrewType";
import FormDisclosure from "./FormDisclosure";
import Roast from "./Roast";
import Rating from "./Rating";
import cuid from "cuid";
import toast from "react-hot-toast";
import useBrews from "../../utils/hooks/useBrew";
import { Brew, zBrew } from "../../utils/types";
const notify = () => toast.success("Saved your brew ☕️");
const notifyError = () => toast.error("Uh oh... soemthing broke 😬");

const TasteForm = ({
    closeModal,
    defaultForm,
}: {
    closeModal: () => void;
    defaultForm?: Brew | undefined;
}) => {
    const { addBrew } = useBrews();
    const { time } = useStore((state) => ({ time: state.time }), shallow);

    const {
        register,
        handleSubmit,
        watch,
        control,
        getValues,
        setValue,
        formState: { errors, isValid },
    } = useForm<Brew>({
        mode: "onChange",
        reValidateMode: "onChange",
        resolver: zodResolver(zBrew),
        defaultValues: defaultForm
            ? {
                  ...defaultForm,
              }
            : {
                  time,
              },
    });

    const onSubmit = (data: Brew) => {
        if (!isValid) return;
        try {
            addBrew({ ...data, id: cuid(), created: new Date().toISOString() });
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
                            {...register("name", { required: true })}
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

                <div className="mt-4 flex ">
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-amber-100 px-4 py-2  font-medium text-amber-900 hover:bg-amber-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 transition-colors"
                    >
                        Save this sucker!
                    </button>

                    <div className="my-auto text-red-500 text-sm px-4 flex-grow">
                        {errors?.name?.message}
                    </div>
                </div>
            </form>
        </div>
    );
};
export default TasteForm;
