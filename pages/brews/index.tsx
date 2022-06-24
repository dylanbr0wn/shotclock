import { NextPage } from "next";
import * as React from "react";
import dynamic from "next/dynamic";
const Table = dynamic(() => import("../../components/Brews/Table"), {
    ssr: false,
});

const Brews: NextPage = () => {
    return (
        <div className=" w-full overflow-hidden max-w-3xl mx-auto mt-24 ">
            <h1 className="text-3xl font-bold my-5 text-stone-900">
                Your Brews
            </h1>
            <div className="rounded-xl shadow-md">
                <div className="relative rounded-xl overflow-auto h-[66vh] shadow-md">
                    <div className="max-h-full h-full overflow-auto rounded-xl">
                        <Table />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Brews;
