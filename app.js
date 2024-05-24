const express = require("express");
const mongoose = require("mongoose")
const bodyParser = require("body-parser");
const cors = require("cors");

const routes = require('./routes/feedback_routes');
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(routes);
const url="mongodb+srv://root:root@cluster0.jzewljl.mongodb.net/feedbackDB?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(url, {useUnifiedTopology:true}, app.listen(5000, ()=>console.log('Server started at port 5000.'))
)
