const express = require('express');
const router = express.Router();

const { register, getUser, logout } = require('../controllers/mainController.js');
const { getNewsList, getNewsDetails,uploadImage, createNews, updateNews, deleteNews } = require('../controllers/newsController.js');
const { getPsychedelicsList, getPsychedelicsDetails, createPsychedelics, updatePsychedelics, deletePsychedelics } = require('../controllers/psychedelicsController.js');

router.post('/register', register);
router.get('/user', getUser);
router.get('/logout', logout);
router.post('/upload-image', uploadImage);

router.get('/news', getNewsList);
router.get('/news/:slug', getNewsDetails);
router.post('/create-news', createNews);
router.post('/update-news/:id', updateNews);
router.post('/delete-news/:id', deleteNews);

router.get('/psychedelics', getPsychedelicsList);
router.get('/psychedelics/:id', getPsychedelicsDetails);
router.post('/create-psychedelics', createPsychedelics);
router.post('/update-psychedelics/:id', updatePsychedelics);
router.post('/delete-psychedelics/:id', deletePsychedelics);

module.exports = router;
