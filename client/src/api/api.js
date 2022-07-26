import axios from 'axios';

export const register = async (username, password) => {
    try{
        const response = await axios.post('http://localhost:8080/register', { username, password }, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const login = async (username, password) => {
    try{
        const response = await axios.post('http://localhost:8080/auth/login', { username, password }, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const logout = async () => {
    try{
        const response = await axios.get('http://localhost:8080/logout', { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const getUser = async () => {
    try{
        const response = await axios.get('http://localhost:8080/user', { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const getNewsList = async (page) => {
    try{
        const response = await axios.get(`http://localhost:8080/news?page=${page}`, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const getNewsDetails = async (slug) => {
    try{
        const response = await axios.get(`http://localhost:8080/news/${slug}`, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const uploadImage = async (image) => {
    console.log(image);
    try{
        const response = await axios.post('http://localhost:8080/upload', image );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const createNews = async (formData) => {
    try{
        const response = await axios.post('http://localhost:8080/create-news', {formData}, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const updateNews = async (id, formData) => {
    try{
        const response = await axios.post(`http://localhost:8080/update-news/${id}`, {formData}, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const deleteNews = async (id) => {
    try{
        const response = await axios.post(`http://localhost:8080/delete-news/${id}`, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const getPsychedelicsList = async (page) => {
    try{
        const response = await axios.get(`http://localhost:8080/psychedelics?page=${page}`, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const getPsychedelicsDetails = async (id) => {
    try{
        const response = await axios.get(`http://localhost:8080/psychedelics/${id}`, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const createPsychedelics = async (formData) => {
    try{
        const response = await axios.post('http://localhost:8080/create-psychedelics', {formData}, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const updatePsychedelics = async (id, formData) => {
    try{
        const response = await axios.post(`http://localhost:8080/update-psychedelics/${id}`, {formData}, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}

export const deletePsychedelics = async (id) => {
    try{
        const response = await axios.post(`http://localhost:8080/delete-psychedelics/${id}`, { withCredentials: true } );
        return response.data;
    }catch(err){
        console.log(err);
    }
}
