import React, {useContext} from "react";
import {TransactionContext} from "../../context/TransactionContext";

const CreateModal = ({ fields }) => {
    const { handleSubmit, handleChange, message, setOpenModal } = useContext(TransactionContext);
    return (
        <div className="modalBackground ml-60">
            <div className="modalContainer text-emerald-600">
                <div className="titleCloseBtn">
                    <button onClick={() => setOpenModal(false)}>X</button>
                </div>
                <div className="title text-emerald-600">
                    <h1>Create news</h1>
                </div>
                <div className="body flex-col">
                    {fields.map((field, index) => (
                        field.showOnCreate &&
                        <input
                            key={index}
                            placeholder={field.name.split(".")[1] ? field.name.split(".")[1] : field.name.split(".")[0]}
                            type={field.type}
                            name={field.name}
                            onChange={handleChange}
                            className="my-2 w-full rounded-sm p-2 outline-none bg-gray-900 border-none text-sm white-glassmorphism"
                        />
                    ))}

                </div>
                <div className="footer">
                    <button onClick={() => setOpenModal(false)} id="cancelBtn">Cancel</button>
                    <button onClick={handleSubmit}>Create</button>
                </div>
                <h1 className="text-emerald-600 text-center">{message}</h1>
            </div>
        </div>
    );
}

export default CreateModal;
