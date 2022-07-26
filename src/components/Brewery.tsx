import React from "react";
import Progress from "./Progress";
import Time from "./Time";
import AppWrapper from "./AppWrapper";

const Brewery = () => {
	return (
		<AppWrapper>
			<div className="h-full w-full overflow-hidden">
				<Progress />
				<Time />
			</div>
		</AppWrapper>
	);
};
export default Brewery;
