const ObjectId = require('mongodb').ObjectId;
const slug = require('slug');
const psychedelicsModel = require('../models/psychedelicsModel');

const getPsychedelicsList = async (req, res) => {
    let find = {};
    let current = 1;
    let skip = 0;
    let limit = 5;

    if(req.query.page){
        current = parseInt(req.query.page);
        skip = limit * (current - 1)
    }
    try {
        const count = await psychedelicsModel.find(find);
        const data = await psychedelicsModel.find(find).limit(limit).skip(skip);
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

const getPsychedelicsDetails = async (req, res) => {
    const id = req.params.id;
    try {
        const response = await psychedelicsModel.findOne({ _id: id });
        res.send({ data: response })
    } catch (e) {
        console.log(e);
    }
};

const createPsychedelics = async (req, res) => {
    const { name, subname, description, content, doses, image, molecule } = req.body.formData;
    const createdOn = new Date();
    try {
        const psy = new psychedelicsModel({name, subname, description, content, doses, image, molecule, createdOn, slug: slug(name)})
        await psy.save()
        res.send({ message: 'ok' })
    } catch (e) {
        console.log(e);
    }
};

const updatePsychedelics = async (req, res) => {
    const { name, subname, description, content, doses, image, molecule } = req.body.formData;
    try {
        let find = { _id: new ObjectId(req.params.id) };
        const set = { name, subname, description, content, doses, image, molecule };
        await psychedelicsModel.updateOne(find,  set, { upsert: true }  , data => res.send({message: 'updated'})).clone()
    } catch (e) {
        console.log(e);
    }

};

const deletePsychedelics = async (req, res) => {
    const id = req.params.id;
    try {
        await psychedelicsModel.deleteOne({ _id: id });
        res.send({ message: 'Deleted' })
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    getPsychedelicsList,
    getPsychedelicsDetails,
    createPsychedelics,
    updatePsychedelics,
    deletePsychedelics
}
