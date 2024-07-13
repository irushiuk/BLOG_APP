const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const cookieParser = require('cookie-parser');
const authRoute = require('./routes/auth'); 
const userRoute = require('./routes/users');
const postRoute = require('./routes/posts')
const commentRoute = require('./routes/comments')
const app = express();

// Configure dotenv
dotenv.config();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use("/images",express.static(path.join(__dirname,"/images")))
app.use(cors({origin:"http://localhost:5173",credentials:true}))

// Use the user routes
app.use('/api/auth', authRoute);
app.use('/api/users',userRoute);
app.use('/api/posts',postRoute);
app.use('/api/comments',commentRoute);

//image upload
const storage = multer.diskStorage({
    destination:(req,file,fn)=>{
        fn(null,"images")
    },
    filename:(req,file,fn)=>{
        fn(null,req.body.img)  
        // fn(null,"image1.jpg")
    }
})

const upload=multer({storage:storage})
app.post("/api/upload",upload.single("file"),(req,res)=>{
    // console.log(req.body)
    res.status(200).json("Image has been uploaded succesfully!")
})


// Database connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log("Database is connected");
    } catch (err) {
        console.error("Database connection failed:", err.message);
        process.exit(1); // Exit process with failure
    }
};

// Start server and connect to the database
const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
    await connectDB();
    console.log(`App is running on port ${PORT}`);
});
