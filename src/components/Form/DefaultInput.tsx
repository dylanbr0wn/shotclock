import { UseFormRegisterReturn } from "react-hook-form";
import * as React from "react";

interface IDefaultInput extends UseFormRegisterReturn {
	title: string;
	placeholder: string;
	width: string;
	labelName: string;
	number?: boolean;
}

const DefaultInput = React.forwardRef<
	HTMLInputElement,
	Omit<IDefaultInput, "ref">
>(({ labelName, title, placeholder, width, ...props }, ref) => {
	return (
		<label htmlFor={labelName} className={`"flex flex-col ${width}`}>
			<div className=" text-sm text-stone-500 dark:text-amber-100/60">
				{title}
			</div>
			<input
				type={"text"}
				ref={ref!}
				placeholder={placeholder}
				className="p-2 dark:text-amber-100 w-full rounded-lg border dark:bg-stone-900 border-stone-200 dark:border-stone-600 placeholder:text-stone-400 transition-colors ring-0 outline-none focus:ring focus:ring-amber-500 ring-offset-0 focus:border-amber-500 hover:border-amber-500"
				{...props}
			/>
		</label>
	);
});
export default DefaultInput;
