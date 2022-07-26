import React, {useContext} from "react";
import {TransactionContext} from "../../context/TransactionContext";
import moment from 'moment';

const Table = ({ data, fields }) => {
    const { showUpdateModal, handleDelete } = useContext(TransactionContext);

    return (
        <table className="w-full justify-center text-center mt-2 p-2 border-[1px] border-indigo-600 rounded-full">
            <thead className="border-[1px] border-indigo-600">
                <th>#</th>
                {fields.map((field, index) => (
                    <th key={index}>{field.name.split(".")[1] ? field.name.split(".")[1] : field.name.split(".")[0]}</th>
                ))}
                <th>Edit</th>
                <th>Delete</th>
            </thead>
            {data.map((d, index) => (
                <tbody key={index} className="border-[1px] border-indigo-600">
                    <td>{data.indexOf(d) + 1}</td>
                    {fields.map((field, index) => (
                        <td key={index}>
                            {field.type === 'date' ?
                                moment(d[field.name]).format('Do MMMM YYYY')
                                :
                                field.name.split('.')[1] ? d[field.name.split('.')[0]][field.name.split('.')[1]] : d[field.name.split('.')[0]]
                            }
                        </td>
                    ))}
                    <td onClick={showUpdateModal} id={d.slug} className="text-yellow-300 cursor-pointer">EDIT</td>
                    <td onClick={handleDelete} id={d._id} className="text-red-600 cursor-pointer">DELETE</td>
                </tbody>
            ))}
        </table>
    );
}

export default Table;
