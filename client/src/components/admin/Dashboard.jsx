import React from "react";
import Sidebar from "./Sidebar";

const Dashboard = () => {

    return (
        <div className="flex w-full">
            <Sidebar />
            <div className="w-8/12 text-white justify-center items-center pl-20 pt-4">
                <p>Dashboard</p>
            </div>
        </div>
    );
};

export default Dashboard;
