import { Dialog, Transition } from "@headlessui/react";
import splitbee from "@splitbee/web";
import { useTheme } from "next-themes";
import * as React from "react";
import useLocalStorage from "../utils/hooks/useLocalStorage";

const Welcome = () => {
	const [isOpen, setIsOpen] = React.useState(false);
	const [welcome, setWelcome] = useLocalStorage<boolean>("welcome", false);

	React.useEffect(() => {
		if (!welcome) {
			setIsOpen(true);
		}
	}, [welcome]);

	const closeModal = () => {
		splitbee.track("User Welcomed");
		setWelcome(true);
		setIsOpen(false);
	};

	const { theme } = useTheme();

	return (
		<Transition appear show={isOpen} as={React.Fragment}>
			<Dialog
				as="div"
				className={`relative z-10 ${theme} dark:text-amber-100 text-stone-900 dark:bg-stone-900 bg-white selection:bg-amber-500 selection:text-amber-200 `}
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
					<div className="fixed inset-0 bg-black bg-opacity-50" />
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
							<Dialog.Panel className="w-full max-w-xl transform rounded-2xl bg-white dark:bg-stone-800 p-6 text-left align-middle shadow-xl transition-all text-gray-900 dark:text-amber-100">
								<Dialog.Title
									as="h3"
									className="text-2xl font-medium leading-6 text-gray-900 dark:text-amber-100"
								>
									Welcome to shotclock!
								</Dialog.Title>
								<div className="mt-3">
									We are glad to have you! Using shotclock you can:
									<ul className="list-disc list-inside my-2">
										<li>⏰ Time your shots/brews</li>
										<li>🎉 Set a goal time </li>
										<li>💾 Save your recipes for later</li>
									</ul>
									All data is stored in your browser so you are in charge of
									your data 🔐.
								</div>
								<div className="mt-4">
									<button
										onClick={closeModal}
										className="inline-flex justify-center rounded-md border border-transparent bg-amber-100 dark:bg-amber-600 dark:text-stone-900 px-4 py-2  font-medium text-amber-900 hover:bg-amber-200 dark:hover:bg-amber-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 transition-colors"
									>
										Start Brewing!
									</button>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
};

export default Welcome;
