import React, { useContext } from "react";
import { AiFillPlayCircle } from 'react-icons/ai';
import logo from '../../images/logo.png';
import { logout } from "../api/api";
import {TransactionContext} from "../context/TransactionContext";
// import { shortenAddress } from "../utils/shortenAddress";

const NavBarItem = ({ title, link }) => (
    <a href={link}><li className="mx-4 cursor-pointer">{title}</li></a>
);

const Navigation = [
    { title: "Početna", link: '/' },
    { title: "Novosti", link: "/news"},
    { title: "Psihodelici", link: "/psychedelics" },
    { title: "O nama", link: "/about"},
    { title: "Kontakt", link: "/contact"}
];

const Navbar = () => {
    const { currentUser } = useContext(TransactionContext);

    const handleLogout = async () => {
        try {
            await logout();
            window.location.href='/';
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <nav className="w-full flex md:justify-center justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial justify-center items-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {Navigation.map((item, index) => (
                    <NavBarItem key={index} title={item.title} link={item.link} />
                ))}
                <li>
                    {!currentUser.username ?
                        <a href='/login' className="text-white text-base font-semibold">
                            <button
                                type="button"
                                className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
                            >
                                <AiFillPlayCircle className="text-white mr-2" />
                                login
                            </button>
                        </a>
                        :
                        <p onClick={handleLogout} className="text-white text-base font-semibold">
                            Logout ({currentUser.username})
                        </p>
                    }
                </li>
                {/*<li>*/}
                {/*    { !currentAccount ?*/}
                {/*        <button*/}
                {/*            type="button"*/}
                {/*            onClick={connectWallet}*/}
                {/*            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"*/}
                {/*        >*/}
                {/*            <AiFillPlayCircle className="text-white mr-2" />*/}
                {/*            <p className="text-white text-base font-semibold">*/}
                {/*                Connect Wallet*/}
                {/*            </p>*/}
                {/*        </button>*/}
                {/*        :*/}
                {/*        <p>{shortenAddress(currentAccount)}</p>*/}
                {/*    }*/}
                {/*</li>*/}
            </ul>
        </nav>
    );
}

export default Navbar;
