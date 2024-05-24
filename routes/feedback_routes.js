const express = require("express");

const feedbackController = require('../controller/feedback_controller');

const router = express.Router();

router.get('/getAllFeedback', feedbackController.getAllFeedback)
router.post('/createFeedback', feedbackController.createFeedback);
router.post('/updateFeedback', feedbackController.updateFeedback);
router.post('/deleteFeedback', feedbackController.deleteFeedback);
router.get('/getDataById/:id', feedbackController.getDataById);


module.exports= router