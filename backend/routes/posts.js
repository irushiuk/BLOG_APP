const express = require('express')
const router = express.Router()
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const Post = require('../models/Post')
const Comment = require('../models/Comments')
const verifyToken = require('../verifyToken')

//CREATE
router.post('/create',verifyToken,async(req,res)=>{
    try{
        const newPost = new Post(req.body)
        const  savedPost = await newPost.save()
        res.status(200).json(savedPost)
    }
    catch{
        res.status(500).json(err);
    }
})

//UPDATE
router.put("/:id",verifyToken,async(req,res)=>{
    try{
        
        const updatedPost = await Post.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(updatedPost)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//DELETE
router.delete("/:id",verifyToken,async(req,res)=>{
    try{
        // await Comments.delete(Many({postId:req.params.id}))

        await Post.findByIdAndDelete(req.params.id)
        res.status(200).json("Post has been deleted!")

    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET POST DETAILS
router.get("/:id",async(req,res)=>{
    try{
        const posts = await Post.findById(req.params.id)
        //to not show the password
        
        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET POST
router.get("/",async(req,res)=>{
    const query = req.query
   
    try{
        const searchFilter = {
            title:{$regex:query.search,$options:"i"}
        }
        const posts = await Post.find(query.search?searchFilter:null)
        //to not show the password
        
        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//GET USER POST
router.get("/user/:userId",async(req,res)=>{
    try{
        const posts = await Post.find({userId:req.params.userId})
        //to not show the password
        
        res.status(200).json(posts)
    }
    catch(err){
        res.status(500).json(err)
    }
})

//SEARCH
// router.get('/search/:prompt',async(req,res)=>{
//     try{

//     }
//     catch(err){
//         res.status(500).json(err)
//     }
// })

module.exports = router
