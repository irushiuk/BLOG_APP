// import React, { useContext, useEffect, useState } from 'react';
// import Navbar from '../component/Navbar';
// import Footer from '../component/Footer';
// import axios from 'axios';
// import { useNavigate, useParams } from 'react-router-dom';
// import { UserContext } from '../context/UserContext';

// const EditPost = () => {
//     const postId = useParams().id;
//     const { user } = useContext(UserContext);
//     const navigate = useNavigate();
//     const [title, setTitle] = useState('');
//     const [desc, setDesc] = useState('');
//     const [file, setFile] = useState(null);

//     const fetchPost = async () => {
//         try {
//             const res = await axios.get(`${URL}/api/posts/${postId}`);
//             setTitle(res.data.title);
//             setDesc(res.data.description);
//             setFile(res.data.photo);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     const handleUpdate = async (e) => {
//         e.preventDefault();
//         if (!user) {
//             console.log("User is not logged in");
//             return;
//         }

//         const post = {
//             title,
//             description: desc,
//             username: user.username,
//             userId: user._id,
//         };

//         if (file) {
//             const data = new FormData();
//             const filename = Date.now() + file.name;
//             data.append('img', filename);
//             data.append('file', file);
//             post.photo = filename;

//             try {
//                 await axios.post(`${URL}/api/upload`, data);
//             } catch (err) {
//                 console.log(err);
//             }
//         }

//         try {
//             const res = await axios.put(`${URL}/api/posts/${postId}`, post, { withCredentials: true });
//             navigate(`/posts/post/${res.data._id}`);
//         } catch (err) {
//             console.log(err);
//         }
//     };

//     useEffect(() => {
//         fetchPost();
//     }, [postId]);

//     return (
//         <div>
//             <Navbar />
//             <div className='px-6 md:px[200px] mt-8'>
//                 <h1 className='font-bold md:text-2xl text-xl'>Edit Post</h1>
//                 <form className='w-full flex flex-col space-x-4'>
//                     <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter post title' className='px-4 py-2 outline-none' />
//                     <input onChange={(e) => setFile(e.target.files[0])} type="file" className='px-4' />

//                     <textarea onChange={(e) => setDesc(e.target.value)} value={desc} rows={15} cols={30} className='px-4 py-2 outline-none' placeholder='Enter post description'></textarea>
//                     <button onClick={handleUpdate} className='bg-black w-full mx-auto md:w-[20%] text-white font-semibold px-4 py-2 md:text-xl text-lg'>Edit</button>
//                 </form>
//             </div>

//             <Footer />
//         </div>
//     );
// }

// export default EditPost;

import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import { URL } from '../url';

const EditPost = () => {
    const { id: postId } = useParams();
    const { user } = useContext(UserContext);
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [file, setFile] = useState(null);

    const fetchPost = async () => {
        try {
            const res = await axios.get(`${URL}/api/posts/${postId}`);
            setTitle(res.data.title);
            setDesc(res.data.description);
            setFile(res.data.photo);
        } catch (err) {
            console.log(err);
        }
    };

    const handleUpdate = async (e) => {
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
            const filename = Date.now() + file.name;
            data.append('img', filename);
            data.append('file', file);
            post.photo = filename;

            try {
                await axios.post(`${URL}/api/upload`, data);
            } catch (err) {
                console.log(err);
            }
        }

        try {
            const res = await axios.put(`${URL}/api/posts/${postId}`, post, { withCredentials: true });
            navigate(`/posts/post/${res.data._id}`);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        fetchPost();
    }, [postId]);

    return (
        <div>
            <Navbar />
            <div className='px-6 md:px[200px] mt-8'>
                <h1 className='font-bold md:text-2xl text-xl'>Edit Your Post</h1>
                <div className='p-8 rounded-lg shadow-lg border border-gray-300 mt-4 mb-10'>
                <form className='w-full flex flex-col space-x-4'>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Enter post title' className='px-4 py-2 outline-none' />

                    <textarea onChange={(e) => setDesc(e.target.value)} value={desc} rows={15} cols={30} className='px-4 py-2 outline-none' placeholder='Enter post description'></textarea>
                    <input onChange={(e) => setFile(e.target.files[0])} type="file" className='px-4' />

                    <button onClick={handleUpdate} className='bg-black px-4 py-2 mx-auto md:w-[20%] text-white rounded-full font-semibold
                            center  md:text-xl text-lg'>Edit</button>
                </form>
                </div>
               
            </div>
            <Footer />
        </div>
    );
}

export default EditPost;
