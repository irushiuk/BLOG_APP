// import React, { useContext, useState } from 'react'
// import Navbar from '../component/Navbar'
// import Footer from '../component/Footer'
// import {ImCross} from 'react-icons/im'
// import { UserContext } from '../context/UserContext'
// import { useNavigate } from 'react-router-dom'
// import { URL } from '../url'
// import axios from 'axios'

// const CreatePost = () => {
//     const [title,setTitle] = useState("")
//     const[desc,setDesc] = useState("")
//     const[file,setFile] = useState(null)
//     const {user} = useContext(UserContext)

//     const navigate = useNavigate()

//     const handleCreate= async(e)=>{
//         e.preventDefault()
//         const post={
//             title,
//             description: desc,
//             username:user.username,
//             userId:user._id,
//         }

//         if(file){
//             const data = new FormData()
//             const filename = Date.now()+file.img
//             data.append("img",filename)
//             data.append("file",file)
//             post.photo= filename    

//             //image upload
//             try{
//                 await axios.post(URL+"/api/upload",data)
//                 // console.log(imgUpload.data)
//             }
//             catch(err){
//                 console.log(err)
//             }
//         }

//         //post upload
//         try{
//             const res = await axios.post(URL+"/api/posts/create",post,{withCredentials:true})
//             navigate("/posts/post/"+res.data._id)
//             // console.log(res.data)
//         }
//         catch(err){
//             console.log(err)
//         }
       

//     }

//   return (
//     <div>
//         <Navbar/>
//         <div className='px-6 md:px[200px] mt-8'>
//             <h1 className='font-bold md:text-2xl text-xl'>Create a post</h1>
//             <form className='w-full flex flex-col space-x-4'>
//                 <input onChange={(e)=>setTitle(e.target.value)} type="text" placeholder='Enter post title' className='px-4 py-2 outline-none' />
//                 <input onChange={(e)=>setFile(e.target.files[0])}type="file"  className='px-4 ' />

//                 <div className='flex flex-col'>
//                     <div className='flex items-center space-x-4 md:space-x-8'>
//                         {/* <input type="text" className='px-4 py-2 outline-none' placeholder='Enter post category' />
//                         <div className='bg-black text-white px-4 py-2 font-semibold cursor-pointer'>
//                             Add

//                         </div> */}

//                         {/* <div className='flex px-4 mt-3'>
//                         <div className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
//                             <p>Beach</p>
//                             <p className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
//                         </div>

//                         <div className='flex justify-center items-center space-x-2 mr-4 bg-gray-200 px-2 py-1 rounded-md'>
//                             <p>Greenary</p>
//                             <p className='text-white bg-black rounded-full cursor-pointer p-1 text-sm'><ImCross/></p>
//                         </div>

//                         </div> */}

                        
//                     </div>
//                     <textarea rows={15} cols={30} className='px-4 py-2 outline-none 'placeholder='Enter post description'></textarea>
//                 <button onClick={handleCreate } className='bg-black w-full mx-auto md:w-[20%] text-white font-semibold px-4 py-2 md:text-xl text-lg'>Create</button>

//                 </div>
                
//             </form>
//         </div>

//         <Footer/>
//     </div>
//   )
// }

// export default CreatePost

import React, { useContext, useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import { ImCross } from 'react-icons/im';
import { UserContext } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { URL } from '../url';
import axios from 'axios';

const CreatePost = () => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [file, setFile] = useState(null);
    const { user } = useContext(UserContext);

    const navigate = useNavigate();

    const handleCreate = async (e) => {
        e.preventDefault();
        if (!user) {
            console.log("User is not logged in");
            return;
        }

        const post = {
            title,
            description: desc,
            username: user.username,
            userId: user._id,
        };

        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name; // Use file.name to get the name of the file
            data.append("img", filename);
            data.append("file", file);
            post.photo = filename;

            // Image upload
            try {
                await axios.post(`${URL}/api/upload`, data);
            } catch (err) {
                console.log(err);
            }
        }

        // Post upload
        try {
            const res = await axios.post(`${URL}/api/posts/create`, post, { withCredentials: true });
            navigate("/posts/post/" + res.data._id);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <Navbar />
            <div className='px-6 md:px-[200px] mt-8  '>
            <h1 className='font-bold md:text-2xl text-xl'>Create a post</h1>
                <div className='p-8 rounded-lg shadow-lg outline-black'>
               
                <form className='w-full flex flex-col space-x-4 ' onSubmit={handleCreate}>
                    <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        placeholder='Enter post title'
                        className='px-4 py-2 text-2xl outline-none '
                    />
                   
                    <div className='flex flex-col'>
                        <div className='flex items-center space-x-4 md:space-x-8'>
                            {/* Additional input and buttons can be added here */}
                        </div>
                        <textarea
                            rows={15}
                            cols={30}
                            className='px-4 py-2 outline-none'
                            placeholder='Enter post description...'
                            onChange={(e) => setDesc(e.target.value)}
                            value={desc}
                        />
                         <input
                        onChange={(e) => setFile(e.target.files[0])}
                        type="file"
                        className='px-4 rounded-full  '
                    />
                        <button
                            type='submit'
                            className='bg-black px-4 py-2 mx-auto md:w-[20%] text-white rounded-full font-semibold
                            center  md:text-xl text-lg'
                        >
                            Create
                        </button>
                    </div>
                </form>
                </div>
                
            </div>
            <Footer />
        </div>
    );
};

export default CreatePost;
