import { NextPage } from "next";
import dynamic from "next/dynamic";
import * as React from "react";

const Brewery = dynamic(() => import("../components/Brewery"), {
	ssr: false,
});
const Home: NextPage = () => {
	return <Brewery />;
};
export default Home;
