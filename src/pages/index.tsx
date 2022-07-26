import Progress from "../components/Progress";
import Time from "../components/Time";
import { NextPage } from "next";
import { Toaster } from "react-hot-toast";
import Menu from "../components/Menu";
import dynamic from "next/dynamic";
const Brewery = dynamic(() => import("../components/Brewery"), {
	ssr: false,
});
const Home: NextPage = () => {
	return <Brewery />;
};
export default Home;
