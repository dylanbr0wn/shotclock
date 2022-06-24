import { NextPage } from "next";
import * as React from "react";
import dynamic from "next/dynamic";
const Dashboard = dynamic(() => import("../../components/Dashboard"), {
    ssr: false,
});

const Brews: NextPage = () => {
    return <Dashboard />;
};
export default Brews;
