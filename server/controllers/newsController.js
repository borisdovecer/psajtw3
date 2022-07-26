const ObjectId = require('mongodb').ObjectId;
const slug = require('slug');
const newsModel = require('../models/newsModel');

const uploadImage = async (req, res) => {
    console.log(req.files);
}

const getNewsList = async (req, res) => {
    let find = {};
    let current = 1;
    let skip = 0;
    let limit = 10;

    if(req.query.page){
        current = parseInt(req.query.page);
        skip = limit * (current - 1)
    }
    try {
        const count = await newsModel.find(find);
        const data = await newsModel.find(find).limit(limit).skip(skip);
        const total = parseInt(( count.length / limit ) + 0.9);
        let pages = [];
        for (let i=1; i<=total; i++){
            pages.push(i);
        }
        res.send({ data, pages })
    } catch (e) {
        console.log(e);
    }
};

const getNewsDetails = async (req, res) => {
    const slug = req.params.slug;
    try {
        const response = await newsModel.findOne({ slug });
        res.send({ data: response })
    } catch (e) {
        console.log(e);
    }
};

const createNews = async (req, res) => {
    const { title, description, content_text, image } = req.body.formData;
    try {
        const news = new newsModel({title, description, content_text, image, createdOn: new Date(), slug: slug(title), author: req.user.username})
        await news.save()
        res.send({ message: 'ok' })
    } catch (e) {
        console.log(e);
    }
};

const updateNews = async (req, res) => {
    const { title, description, content_text, image } = req.body.formData;
    try {
        let find = { _id: new ObjectId(req.params.id) };
        const set = { title, description, content_text, image };
        await newsModel.updateOne(find,  set, { upsert: true }  , data => res.send({message: 'updated'})).clone()
    } catch (e) {
        console.log(e);
    }

};

const deleteNews = async (req, res) => {
    const id = req.params.id;
    try {
        await newsModel.deleteOne({ _id: id });
        res.send({ message: 'Deleted' })
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    getNewsList,
    getNewsDetails,
    createNews,
    updateNews,
    deleteNews,
    uploadImage
}
