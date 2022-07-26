import React, {useState, useEffect, useContext} from "react";
import {AiFillPlayCircle} from "react-icons/ai";
import {CreateModal, UpdateModal, Sidebar, Table } from "./index"
import {getNewsList} from "../../api/api";
import {TransactionContext} from "../../context/TransactionContext";

const NewsList = () => {
    const [data, setData] = useState([]);
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const {openModal, setOpenModal, openUpdateModal, handleChange,handleImage, setOpenUpdateModal, setEntity} = useContext(TransactionContext);

    const fields = [
        { name: "title", type: "text", func: handleChange, showOnCreate: true},
        { name: "description", type: "text", func: handleChange, showOnCreate: true},
        { name: "content_text", type: "text", func: handleChange, showOnCreate: true},
        { name: "image", type: "text", func: handleChange, showOnCreate: true},
        { name: "createdOn", type: "date", showOnCreate: false},
        { name: "author", type: "text", showOnCreate: false}
    ]

    const setAllNews = (p) => {
        setTimeout(async () => {
            const response = await getNewsList(p);
            setData(response.data);
            setPages(response.pages);
        }, 0);
    }

    useEffect(() => {
        setAllNews(currentPage);
        setEntity('news');
    },[currentPage])

    return <div className="flex w-full">
        <Sidebar/>
        <div className="w-8/12 text-white justify-center items-center pl-20 pt-4 mt-16">
            {openModal && <CreateModal fields={fields} />}
            {openUpdateModal && <UpdateModal fields={fields} />}
            <h1>News</h1>
            <button onClick={() => {setOpenModal(true);setOpenUpdateModal(false);}}
                    type="button"
                    className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd]"
            >
                <AiFillPlayCircle className="text-white mr-2" />
                Create
            </button>
            {pages.map((p, index) => (
                <span key={index} className={`bg-fuchsia-600 p-1 m-1 rounded-full cursor-pointer hover:bg-fuchsia-400 ${p===currentPage && 'bg-fuchsia-400'}`}
                      onClick={() => setCurrentPage(p)}
                >
                    {p}
                </span>
            ))}
            {data.length > 0 && <Table data={data} fields={fields}/>}
        </div>
    </div>;
};

export default NewsList;
