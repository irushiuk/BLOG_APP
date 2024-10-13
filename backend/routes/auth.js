const express = require('express');
const router = express.Router();
const User = require('../models/User'); // Ensure the correct path
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// REGISTER
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Validate input
        if (!username || !email || !password) {
            console.error("Validation error: All fields are required");
            return res.status(400).json({ error: "All fields are required" });
        }

        console.log(`Received registration request: username=${username}, email=${email}`);

        // Check if the user already exists by username or email
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            console.error("User already exists with this email or username");
            return res.status(400).json({ error: "User already exists" });
        }

        // Hash the password before saving
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hashSync(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: "Internal Server Error" });
    }
});

//LOGiN
router.post('/login',async(req,res) =>{
    try{
        const user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(404).json("User not found!")

        }
        const match = await bcrypt.compareSync(req.body.password,user.password)
        if(!match){
            return res.status(401).json("Wrong credentials")
        }
        const token = jwt.sign({_id:user._id,username:user.username,email:user.email},process.env.SECRET,{expiresIn:"3d"})
        const {password,...info}= user._doc
        res.cookie("token",token).status(200).json(info)
        

    }
    catch(err){
        res.status(500).json(err)
    }
})

//LOG OUT
router.get("/logout",async(req,res)=>{
    try{
        res.clearCookie("token",{sameSite:"none",secure:true}).status(200).send("User logged out succesfull!")
    }

    catch(err){
        res.status(500).json(err)
    }
}
)

//REFETCh USER
// router.get("/refetch",(req,res)=>{
//     const token = req.cookies.token
//     jwt.verify(token.process.env.SECRET,{},async(err,data)=>{
//         if(err){
//             return res.status(404).json(err)
//         }
//         res.status(200).json(data)
//     })
// })

router.get("/refetch", (req, res) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ error: "No token provided" });
    }

    jwt.verify(token, process.env.SECRET, (err, data) => {
        if (err) {
            return res.status(403).json({ error: "Invalid token" });
        }
        res.status(200).json(data);
    });
});


module.exports = router;
