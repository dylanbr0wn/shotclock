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
import splitbee from "@splitbee/web";
import DefaultInput from "./DefaultInput";
import { useTheme } from "next-themes";

const notify = (dark: boolean) =>
	toast.success(
		"Saved your brew ☕️",
		dark
			? {
					icon: "👏",
					style: {
						borderRadius: "10px",
						background: "#333",
						color: "#fff",
					},
			  }
			: {}
	);
const notifyError = () => toast.error("Uh oh... soemthing broke 😬");

const TasteForm = ({
	closeModal,
	defaultForm,
}: {
	closeModal: () => void;
	defaultForm?: Brew | undefined;
}) => {
	const { resolvedTheme } = useTheme();
	const { addBrew, updateBrew } = useBrews();
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
			if (defaultForm?.id) updateBrew(defaultForm?.id, data);
			else
				addBrew({
					...data,
					id: cuid(),
					created: new Date().toISOString(),
				});
			notify(resolvedTheme === "dark");
			splitbee.track("Brew made");
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
					<DefaultInput
						labelName="name"
						title="Name:"
						placeholder="My best brew ever!!"
						width="w-2/3"
						{...register("name", { required: true })}
					/>
				</div>
				<div className="my-3">
					<FormDisclosure title="Coffee Details">
						<div className="flex flex-col space-y-3">
							<div className="flex flex-col md:flex-row space-y-3 md:space-x-3 md:space-y-0">
								<DefaultInput
									labelName="coffeeName"
									title="Coffee Name:"
									placeholder="Kickass Coffee Beans"
									width="w-full"
									{...register("coffeeName")}
								/>

								<label className="flex flex-col w-2/3">
									<div className=" text-sm text-stone-500 dark:text-amber-100/60">
										Coffee Roast:
									</div>
									<Roast control={control} setValue={setValue} />
								</label>
							</div>
						</div>
					</FormDisclosure>
				</div>
				<div className="my-3">
					<FormDisclosure title="Brew Details">
						<div className="flex flex-col space-y-3 w-full">
							<div className="flex flex-col md:flex-row space-y-3 md:space-x-3 md:space-y-0">
								<label className="flex flex-col w-full">
									<div className=" text-sm text-stone-500 dark:text-amber-100/60">
										Brew Method:
									</div>
									<BrewType
										control={control}
										setValue={setValue}
										getValues={getValues}
									/>
								</label>
								<DefaultInput
									labelName="grindSetting"
									title="Grind Setting:"
									placeholder="9 and 3/4"
									width="w-full"
									{...register("grindSetting")}
								/>
							</div>
							<div className="flex space-x-3 w-full">
								<DefaultInput
									labelName="coffeeIn"
									title="Coffee In (weight):"
									placeholder="18"
									width="flex-grow"
									{...register("coffeeIn")}
								/>
								<DefaultInput
									labelName="coffeeOut"
									title="Coffee Out (weight):"
									placeholder="35"
									width="flex-grow"
									{...register("coffeeOut")}
								/>
								{/* <DefaultInput
                                    number
                                    labelName="coffeeOut"
                                    title="Coffee Out (weight):"
                                    placeholder="35"
                                    width="w-1/3"
                                    {...register("coffeeOut", {
                                        valueAsNumber: true,
                                    })}
                                /> */}
							</div>
							<div className="flex space-x-3 w-full">
								<label className="flex flex-col w-1/2 md:1/3">
									<div className=" text-sm text-stone-500 dark:text-amber-100/60">
										Time(from timer):
									</div>
									<input {...register("time")} className="hidden" />
									<input
										disabled
										className="p-2 dark:text-amber-300 w-full rounded-lg border focus:ring-0 dark:bg-stone-900 bg-white border-stone-200 dark:border-stone-600 placeholder:text-stone-400 transition-colors ring-0 outline-none focus:outline focus:outline-amber-500 outline-offset-0 focus:border-amber-500 hover:border-amber-500"
										value={`${("0" + Math.floor((time / 1000) % 60)).slice(
											-2
										)}:${("0" + (Math.floor(time / 10) % 100)).slice(-2)}`}
									/>
								</label>
							</div>
						</div>
					</FormDisclosure>
				</div>
				<div className=" flex flex-col my-3 space-y-3">
					<label className="flex flex-col ">
						<div className=" text-sm text-stone-500 dark:text-amber-100/60">
							Rating:
						</div>
						<Rating getValues={getValues} setValue={setValue} />
					</label>
					<label className="flex flex-col w-full md:w-2/3">
						<div className=" text-sm text-stone-500 dark:text-amber-100/60">
							Comments:
						</div>
						<textarea
							rows={4}
							placeholder={`Aroma, Sweetness, Bitterness, Taste, Body, Aftertaste`}
							className="p-2 dark:text-amber-300 w-full rounded-lg border dark:bg-stone-900 border-stone-200 dark:border-stone-600 placeholder:text-stone-400 transition-colors ring-0 outline-none focus:ring focus:ring-amber-500 ring-offset-0 focus:border-amber-500 hover:border-amber-500"
							{...register("comments")}
						/>
					</label>
				</div>

				<div className="mt-4 flex ">
					<button
						type="submit"
						className="inline-flex justify-center rounded-md border border-transparent bg-amber-100 dark:bg-amber-600 dark:text-stone-900 px-4 py-2  font-medium text-amber-900 hover:bg-amber-200 dark:hover:bg-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 transition-colors"
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
