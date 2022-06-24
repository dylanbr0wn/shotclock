import Table from "../components/Brews/Table";
import AppWrapper from "./AppWrapper";

const Dashboard = () => {
    return (
        <AppWrapper>
            <div className=" h-screen w-full overflow-hidden">
                <div className=" max-w-3xl mx-auto mt-24 h-full">
                    <h1 className="text-3xl font-bold my-5 text-stone-900 dark:text-amber-100">
                        Your Brews
                    </h1>
                    <div className="rounded-xl">
                        <div className="relative rounded-xl overflow-auto h-[66vh]">
                            <div className="max-h-full h-full overflow-auto rounded-xl">
                                <Table />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppWrapper>
    );
};
export default Dashboard;
