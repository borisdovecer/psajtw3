import React, {useEffect, useState}  from "react";
import { useParams } from "react-router-dom";
import {Footer, Navbar} from "./index";
import {getNewsDetails} from "../api/api";

const NewsDetails = () => {
    const [data, setData] = useState([]);
    const { slug } = useParams();
    const setNews = () => {
        setTimeout(async () => {
            const response = await getNewsDetails(slug);
            setData(response.data);
        }, 0);
    }

    useEffect(() => {
        setNews();
    },[])

    return (
        <div>
            <div className="gradient-bg-welcome">
                <Navbar />
            </div>
            <div className="flex w-full mf:flex-row flex-col justify-between mt-10 md:p-20 py-12">
                <h1 className="text-3xl sm:text-5xl text-white py-1 sm:px-4 md:px-48">
                    {data.title}
                </h1>
                <div className="justify-between mx-44">
                    <img
                        src={`../../images/news/${data.image}`}
                        alt="img-blur-shadow"
                        className="w-11/12 p-10"
                    />
                </div>
                <div className='flex md:px-4 xl:px-48'>
                    <div className="justify-between items-start w-full mf:mr-10">
                        <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
                            {data.content_text}
                        </p>
                    </div>
                </div>
            </div>
            <div className="gradient-bg-services">
                <Footer />
            </div>
        </div>
    );
};

export default NewsDetails;
