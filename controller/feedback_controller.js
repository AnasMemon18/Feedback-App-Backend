const Feedback = require('../models/Feedback');

const getAllFeedback = (req, res, next) => {
    Feedback.find()
    .then(feedback => {
        // console.log("Fetched users: ",users);
        res.status(200).json({feedback: feedback});
    })
    .catch(err => {
        console.log("Error fetching users: ", err);
        res.status(500).json({ error: "Couldn't fetch users" });
    })
}

const createFeedback = (req, res, next) => {
   const {firstName, lastName, email, feedback} = req.body;
   console.log(req.body);
    const newFeedback = new Feedback({
        firstName,
        lastName,
        email,
        feedback
    })
    newFeedback.save().then(feedback => {
        // console.log( "Feedback:   ",feedback);
        res.status(201).json({msg:"Feedback registered successfullty!!!", feedback:feedback, status:201})
    }).catch(err => {
        console.log("Couldn't add feedback, here is the reason: ", err)
    })
}

const deleteFeedback = (req, res, next) => {
    const feedbackId = req.body.id;
    console.log(feedbackId)
    Feedback.findByIdAndDelete(feedbackId)
    .then(deletedFeeback => {
        console.log("Deleted feedback: ", deletedFeeback)
        res.status(200).json({message: "Feedback deleted successfully!", status:200});
    })
    .catch(err => {
        console.log("Error deleting feedback: ", err)
        res.status(500).json({ error: "Couldn't delete feedback" });
    })
}

const getDataById = (req, res, next) => {
    const id =  req.params.id;
    Feedback.findById(id)
    .then(data => {
        console.log("Data: ", data)
        res.status(200).json({message:"User found succesfully!",  status: 200, data: data})
    })
    .catch(err => {
        console.log("Error fetching user: ", err)
        res.status(500).json({ error: "Couldn't fetch user by id!!!" });
    })
}

const updateFeedback = (req, res , next) => {
    const { userId, firstName, lastName, email, feedback } = req.body;

    Feedback.findByIdAndUpdate(
        userId,
        {
            firstName,
            lastName,
            email,
            feedback,
        },
    )
    .then(updatedResult => {
        console.log(updatedResult);
        res.status(200).json({ message: "Feedback updated successfully!", status: 200, data: updatedResult });
    })
    .catch(err => {
        console.error("Error updating feedback:", err);
        res.status(500).json({ message: "Couldn't update feedback!", error: err });
    });
}

module.exports = {createFeedback, getAllFeedback, deleteFeedback, getDataById, updateFeedback};