import React, {useContext} from "react";
import {TransactionContext} from "../../context/TransactionContext";

const UpdateModal = ({ fields }) => {
    const { setOpenUpdateModal, formData, handleChange, handleUpdate, message } = useContext(TransactionContext);
    return (
        <div className="modalBackground ml-60">
            <div className="modalContainer text-emerald-600">
                <div className="titleCloseBtn">
                    <button onClick={() => setOpenUpdateModal(false)}>X</button>
                </div>
                <div className="title text-emerald-600">
                    <h1>Update news</h1>
                </div>
                <div className="body flex-col">
                    {fields.map((field, index) => (
                        field.showOnCreate &&
                        <div key={index} className="text-left flex w-full">
                            <p className="text-sm pt-4 w-1/5">{field.name.split(".")[1] ? field.name.split(".")[1] : field.name.split(".")[0]}:</p>
                            <input
                                placeholder={field.name}
                                type={field.type}
                                name={field.name}
                                value={field.name.split(".")[1] ? formData[field.name.split(".")[0]][field.name.split(".")[1]] : formData[field.name]}
                                onChange={handleChange}
                                className="my-2 w-4/5 rounded-sm p-2 outline-none bg-gray-900 border-none text-sm white-glassmorphism"
                            />
                        </div>
                    ))}
                </div>
                <div className="footer">
                    <button onClick={() => setOpenUpdateModal(false)} id="cancelBtn">
                        Cancel
                    </button>
                    <button onClick={handleUpdate}>Update</button>
                </div>
                <h1 className="text-emerald-600 text-center">{message}</h1>
            </div>
        </div>
    );
}

export default UpdateModal;
