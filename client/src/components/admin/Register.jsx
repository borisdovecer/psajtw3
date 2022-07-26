import React, { useState } from "react";
import { Loader } from "../index";
import { register } from "../../api/api";

const Register = () => {
    const  [ username, setUsername ] = useState('');
    const  [ password, setPassword ] = useState('');
    const  [ loading, setLoading ] = useState(false);
    const  [ message, setMessage ] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const response = await register(username, password);
            setMessage(response.message);
            setLoading(false);
        } catch (e) {
            console.log(e)
        }
    };

    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10">
                    <div className="p-3 flex justify-center items-start flex-col w-6/12 my-5 text-white">
                        <h1 className="text-3xl sm:text-5xl text-white py-1">
                            Register
                        </h1>
                    </div>
                    <div className="p-5 mt-4 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
                        <input
                            placeholder="username"
                            type="text"
                            onChange={(e) => setUsername(e.target.value)}
                            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                        />
                        <input
                            placeholder="password"
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
                        />
                        <div className="h-[1px] w-full bg-gray-400 my-2" />
                        {loading
                            ? <Loader/>
                            : <button
                                type="button"
                                onClick={handleSubmit}
                                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                            >
                                Register
                            </button>
                        }
                        {message ?
                            <p className="text-emerald-600">{message}</p>
                            :
                            <span></span>
                        }
                        <a className="pt-4 text-blue-300" href="/login">
                            <p>login</p>
                        </a>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Register;
