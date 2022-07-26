import React, { useState, useEffect } from "react";
import {
    createNews,
    deleteNews,
    getUser,
    updateNews,
    createPsychedelics,
    updatePsychedelics,
    deletePsychedelics,
    getNewsDetails,
    getPsychedelicsDetails,
    uploadImage
} from "../api/api";

export const TransactionContext = React.createContext();

export const TransactionProvider = ({ children }) => {
    const [openModal, setOpenModal] = useState(false);
    const [openUpdateModal, setOpenUpdateModal] = useState(false);
    const [currentUser, setCurrentUser] = useState("");
    const [formData, setFormData] = useState({});
    const [message, setMessage] = useState("");
    const [entity, setEntity] = useState("");
    const [file, setFile] = useState();
    const [fileName, setFileName] = useState("");

    const handleChange = (e) => {
        const name = e.target.name.split(".");
        setFormData((prevState) => ({ ...prevState, [name[0]]: name[1] ? {...prevState[name[0]], [name[1]]: e.target.value} : e.target.value }));
    };

    const handleImage = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const showUpdateModal = async (e) => {
        try {
            let response;
            if (entity === 'news') {
                response = await getNewsDetails(e.target.id);
            }
            if (entity === 'psychedelics') {
                response = await getPsychedelicsDetails(e.target.id);
            }
            setOpenModal(false);
            setOpenUpdateModal(true);
            setFormData(response.data);
        } catch (e) {
            console.log(e);
        }
    }

    const handleSubmit = async () => {
        try {
            if (entity === 'news') {
                await createNews(formData)
            }
            if (entity === 'psychedelics') {
                await createPsychedelics(formData)
            }
            setMessage('Created');
            window.location.reload();
        } catch (e) {
            console.log(e);
            setMessage(e);
        }
    }

    const handleUpdate = async () => {
        try {
            if (entity === 'news') {
                await updateNews(formData._id, formData);
            }
            if (entity === 'psychedelics') {
                await updatePsychedelics(formData._id, formData)
            }
            setMessage('Updated');
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }

    const handleDelete = async (e) => {
        try {
            if (entity === 'news') {
                window.confirm('Are you sure you wish to delete this item?') ? await deleteNews(e.target.id) : console.log('nah...')
            }
            if (entity === 'psychedelics') {
                window.confirm('Are you sure you wish to delete this item?') ? await deletePsychedelics(e.target.id) : console.log('nah...')
            }
            window.location.reload();
        } catch (e) {
            console.log(e);
        }
    }

    const setUserData = () => {
        setTimeout(async () => {
            const usr = await getUser();
            setCurrentUser(usr);
        }, 0);
    }

    useEffect(() => {
        setUserData();
    }, []);

    return (
        <TransactionContext.Provider
            value={{
                currentUser,
                setFormData,
                formData,
                handleChange,
                handleSubmit,
                handleUpdate,
                handleDelete,
                handleImage,
                setEntity,
                message,
                setMessage,
                openModal,
                setOpenModal,
                showUpdateModal,
                openUpdateModal,
                setOpenUpdateModal
            }}
        >
            {children}
        </TransactionContext.Provider>
    );
}
