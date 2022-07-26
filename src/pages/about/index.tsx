import { NotionRenderer } from "react-notion";
import "react-notion/src/styles.css";
import AppWrapper from "../../components/AppWrapper";
import * as React from "react";

export const getStaticProps = async () => {
	const res = await fetch(
		"https://notion.dylanbrown.space/page/shotclock-9ebbc7b285f84acf80c2a961e989ec31"
	);

	const data = await res.json();

	return {
		props: {
			blockMap: data,
		},
	};
};

const About = ({ blockMap }) => {
	return (
		<AppWrapper>
			<div className="max-w-3xl mx-auto pt-10 text-stone-900 dark:text-amber-100 px-2 md:px-0">
				<NotionRenderer blockMap={blockMap} />
			</div>
		</AppWrapper>
	);
};
export default About;
