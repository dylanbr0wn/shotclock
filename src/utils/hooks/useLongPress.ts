import * as React from "react";

const useLongPress = (
	onClick: () => void,
	{
		shouldPreventDefault = true,
		delay = 300,
	}: { shouldPreventDefault?: boolean; delay?: number } = {}
) => {
	const [longPressTriggered, setLongPressTriggered] = React.useState(false);
	const timeout = React.useRef<NodeJS.Timer>();
	const target = React.useRef<any>();

	const start = (event: any) => {
		if (shouldPreventDefault && event.target) {
			event.target.addEventListener("touchend", preventDefault, {
				passive: false,
			});
			target.current = event.target;
		}
		timeout.current = setTimeout(() => {
			setLongPressTriggered(true);
		}, delay);
	};

	const clear = (event: any, shouldTriggerClick = true) => {
		timeout.current && clearTimeout(timeout.current);
		shouldTriggerClick && !longPressTriggered && onClick();
		setLongPressTriggered(false);
		if (shouldPreventDefault && target.current) {
			target?.current?.removeEventListener("touchend", preventDefault);
		}
	};

	return {
		triggered: longPressTriggered,
		onMouseDown: (e: any) => start(e),
		onTouchStart: (e: any) => start(e),
		onMouseUp: (e: any) => clear(e),
		onMouseLeave: (e: any) => clear(e, false),
		onTouchEnd: (e: any) => clear(e),
	};
};

const isTouchEvent = (event: any) => {
	return "touches" in event;
};

const preventDefault = (event: any) => {
	if (!isTouchEvent(event)) return;

	if (event.touches.length < 2 && event.preventDefault) {
		event.preventDefault();
	}
};

export default useLongPress;
