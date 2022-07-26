import { RadioGroup } from "@headlessui/react";
import { Control, Controller, UseFormSetValue } from "react-hook-form";
import * as React from "react";
import { IZRoast, Brew } from "../../utils/types";

const roasts = [
	{
		id: "light",
		name: "Light",
		bg: "bg-amber-500 text-white dark:text-stone-900",
	},
	{
		id: "medium",
		name: "Medium",
		bg: "bg-amber-700 text-white ",
	},
	{
		id: "dark",
		name: "Dark",
		bg: "bg-amber-900 text-white ",
	},
];

interface IRoast {
	control: Control<Brew>;
	setValue: UseFormSetValue<Brew>;
}

const Roast = ({ control, setValue }: IRoast) => {
	const [roast, setRoast] = React.useState<IZRoast>();
	return (
		<Controller
			name="coffeeRoast"
			control={control}
			render={({ field }) => (
				<RadioGroup
					ref={field.ref}
					name="coffeeRoast"
					value={roast}
					onChange={(val: IZRoast) => {
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
																				? `${plan.bg}`
																				: "bg-white dark:bg-stone-900 dark:text-amber-100"
																		}
                                    relative  border  border-stone-200 dark:border-stone-600 placeholder:text-stone-400  ring-0 outline-none focus:ring focus:ring-amber-500 ring-offset-0 focus:border-amber-500 hover:border-amber-500 flex cursor-pointer transition-colors rounded-lg px-3 py-2 focus:outline-none`
								}
							>
								{({ active, checked }) => (
									<>
										<div className="flex w-full items-center justify-between">
											<div className="flex items-center">
												<div className="">
													<RadioGroup.Label as="p" className={`font-medium  `}>
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
