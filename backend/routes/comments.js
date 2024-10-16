const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const Post = require('../models/Post')
const Comment = require('../models/Comments')
const Comments = require('../models/Comments')
const verifyToken = require('../verifyToken')

//CREATE
router.post('/write',verifyToken,async(req,res)=>{
    try{
        const newComment = new Comments(req.body)
        const  savedComment = await newComment.save()
        res.status(200).json(savedComment)
    }
    catch(err){
        res.status(500).json(err);
    }
})

//UPDATE
router.put("/:id",verifyToken,async(req,res)=>{
    try{
        
        const updatedComment = await Comments.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedComment)
    }
    catch(err){
        res.status(500).json(err);
    }
})

//DELETE
router.delete("/:id",verifyToken,async(req,res)=>{
    try{
        await Comment.findByIdAndDelete(req.params.id)
        
        res.status(200).json("Comment has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
})



//GET POST COMMENTS
router.get("/post/:postId",async(req,res)=>{
    try{
        const comments = await Comments.find({postId:req.params.postId})
        //to not show the password
        
        res.status(200).json(comments)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router
