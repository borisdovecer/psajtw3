import React, {useContext} from "react";
import logo from '../../../images/logo.png'
import {TransactionContext} from "../../context/TransactionContext";

const Sidebar = () => {
    const { currentUser } = useContext(TransactionContext);

    const sidebarItems = [
        {name: "Dashboard", link: "/admin", active: true},
        {name: "News", link: "/admin/news", active: false},
        {name: "Psychedelics", link: "/admin/psychedelics", active: false},
        {name: "Settings", link: "/admin/settings", active: false},
    ];
    return (
        <div className="w-2/12 h-screen border-r border-indigo-600 text-white text-center content-center">
            <a href="/"><img src={logo} alt="logo" className="w-32 cursor-pointer ml-auto mr-auto mt-16" /></a>
            <div className="p-4 text-fuchsia-600">
                Welcome, {currentUser.username}
            </div>
            <ul>
                {sidebarItems.map((item, index) => (
                    <a href={item.link} key={index}>
                        <li className={`p-4 cursor-pointer hover:bg-indigo-600 rounded-l-2xl ${window.location.pathname === item.link && "border-b border-t border-fuchsia-600"}`}>
                            <h1 className="text-lg">{item.name}</h1>
                        </li>
                    </a>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
