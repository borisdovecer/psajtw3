import React, {useState, useEffect, useContext} from "react";
import {AiFillPlayCircle} from "react-icons/ai";
import {CreateModal, UpdateModal, Sidebar, Table } from "./index"
import {getPsychedelicsList} from "../../api/api";
import {TransactionContext} from "../../context/TransactionContext";

const PsychedelicsList = () => {
    const [data, setData] = useState([]);
    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const {openModal, setOpenModal, openUpdateModal, handleChange, setOpenUpdateModal, setEntity} = useContext(TransactionContext);

    const fields = [
        { name: "name", type: "text",func: handleChange, showOnCreate: true},
        { name: "subname", type: "text", func: handleChange, showOnCreate: true},
        { name: "description", type: "text", func: handleChange, showOnCreate: true},
        { name: "molecule", type: "text", func: handleChange, showOnCreate: true},
        { name: "content.overview", type: "text", func: handleChange, showOnCreate: true},
        { name: "content.experience", type: "text", func: handleChange, showOnCreate: true},
        { name: "content.effects", type: "text", func: handleChange, showOnCreate: true},
        { name: "content.benefits", type: "text", func: handleChange, showOnCreate: true},
        { name: "content.therapeutic", type: "text", func: handleChange, showOnCreate: true},
        { name: "content.growth", type: "text", func: handleChange, showOnCreate: true},
        { name: "content.legality", type: "text", func: handleChange, showOnCreate: true},
        { name: "content.history", type: "text", func: handleChange, showOnCreate: true},
        { name: "image", type: "text", func: handleChange, showOnCreate: true},
        { name: "createdOn", type: "date", showOnCreate: false},
    ]

    const setAllPsychedelics = (currentPage) => {
        setTimeout(async () => {
            const response = await getPsychedelicsList(currentPage);
            setData(response.data);
            setPages(response.pages);
        }, 0);
    }

    useEffect(() => {
        setAllPsychedelics(currentPage);
        setEntity('psychedelics');
    },[currentPage])

    return (
        <div className="flex w-full">
            <Sidebar/>
            <div className="w-8/12 text-white justify-center items-center pl-20 pt-4 mt-16">
                {openModal && <CreateModal fields={fields} />}
                {openUpdateModal && <UpdateModal fields={fields}/>}
                <h1>Psychedelics</h1>
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
        </div>
    );
};

export default PsychedelicsList;
