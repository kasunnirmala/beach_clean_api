const express = require('express');
const router = express.Router();
const PostDataModel = require('../model/post-data');
var moment = require('moment-timezone');

router.get('/getAll', async (req, res) => {
    try {
        var posts = await PostDataModel.find();
        res.json(posts);
    } catch (error) {
        res.json({ message: error.message });
    }
})

router.post('/add', async (req, res) => {
    console.log("Added new Post Data Value");
    req.body['_id']=null;
    try {
        const savedPostData = await new PostDataModel(req.body).save();

        console.log(savedPostData);
        res.status(200).json("Successfully Saved");
    } catch (error) {
        res.status(400).json(error.message);
      
    }

});

router.post('/update', async (req, res) => {
    req.body['resolved']=true;
    console.log("Updated post data");
    try {
        const savedPostData= await PostDataModel.findOneAndUpdate({'_id':req.body['_id']}, { $set: req.body});
        // const savedPostData = await new PostDataModel(req.body).save();

        console.log(savedPostData);
        res.status(200).json("Successfully Saved");
    } catch (error) {
        res.status(400).json(error.message);
      
    }

});

module.exports = router;