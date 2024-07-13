// import axios from "axios"
// import Footer from "../component/Footer"
// import Navbar from "../component/Navbar"
// import {BiEdit} from 'react-icons/bi'
// import {MdDelete} from 'react-icons/md'
// import { useContext, useEffect, useState } from "react"
// import { useNavigate, useParams } from "react-router-dom"
// import { UserContext } from "../context/UserContext"
// import { If,URL } from "../url"

// const PostDetail = () => {

//   // const postId=useParams().postId
//   const { id:postId } = useParams();

//   const[post,setPost]= useState({})
//   const {user} = useContext(UserContext)
//   const [loader,setLoader] = useState(false)
//   const navigate = useNavigate()

//   const fetchPost= async()=>{
//     setLoader(true)
//     try{
//       const res = await axios.get(URL+"/api/posts/"+postId)
//       // console.group(res.data)
//       setPost(res.data)
//       setLoader(false)
//     }
//     catch(err){
//       console.log(err)
//     }
//   }

//   const handleDeletePost= async()=>{
//     try{
//       const res = await axios.delete(URL+"/api/posts/"+postId,{withCredentials:true})
//       console.log(res.data)
//       navigate("/")
//     }
//     catch(err){
//       console.log(err)
//     }
//   }

//   useEffect(()=>{
//     fetchPost()
//   },[postId])

//   return (
//     <div>
//         <Navbar/>
//         <div className="px-8 md:px-[200px] mt-8">
//             <div className="flex justify-between items-center">
              
//                 <h1 className="text-2xl font-bold text-black md:text-3xl">{post.title}</h1>
//                 {user?._id===post?.userId && <div  className="flex items-center justify-center space-x-2">
//                     <p><BiEdit/></p>
//                     <p className="cursor-pointer" onClick={handleDeletePost}><MdDelete/></p>
//                 </div>}
                

//             </div>
//             <div className="flex items-center justify-between mt-2 md:mt-4">
//               <p>{post.username}</p>
//               <div className="flex space-x-2">
//               <p>
//                   {new Date(post.updatedAt).toString().slice(0,15)}
//                 </p>
//                 <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>

//               </div>

//             </div>

//             <img src={If+post.photo} alt="" />
//             <p className="mx-auto mt-8">{post.description}</p>
//             <div className="flex items-center mt-8 space-x-4 font-semibold">
//               <p>categories</p>
//               <div></div>
//             </div>

//             <div className="flex flex-col mt-4">
//               <h3>Comments</h3>
//               {/*Comments */}
//               <div className="px-2 py-2 bg-gray-200 rounded-lg">
//               <div className="flex items-center justify-between">
//                 <h3>
//                   co
//                 </h3>
//               </div>

//             </div>


//             </div>

            


           


//         </div>
//         <Footer/>
//     </div>
//   )
// }

// export default PostDetail

// import axios from "axios";
// import Footer from "../component/Footer";
// import Navbar from "../component/Navbar";
// import { BiEdit } from 'react-icons/bi';
// import { MdDelete } from 'react-icons/md';
// import { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { UserContext } from "../context/UserContext";
// import { If, URL } from "../url";
// import Comment from "../component/Comment";

// const PostDetail = () => {
//   const { id:postId } = useParams();
//   const [post, setPost] = useState({});
//   const { user } = useContext(UserContext);
//   const [comments,setComments] = useState([]);
//   const [comment,setComment] = useState("")
//   const [loader, setLoader] = useState(false);
//   const navigate = useNavigate();

//   const fetchPost = async () => {
//     setLoader(true);
//     try {
//       const res = await axios.get(`${URL}/api/posts/${postId}`);
//       setPost(res.data);
//     } catch (err) {
//       console.log(err);
//     } finally {
//       setLoader(false);
//     }
//   };

//   const postComment=async(e)=>{
//     e.preventDefault()
//     try{
//       const res=await axios.post(URL+"/api/comments/write",
//         {comment:comment, author:user.username, postId:postId, userId:user._id},
//         {withCredentials:true})
//       // fetchPostComments()

//       setComment("")
//       window.location.reload(true)
//     }
//     catch(err){
//       console.log(err)

//     }
//   }

//   const handleDeletePost = async () => {
//     try {
//       const res = await axios.delete(`${URL}/api/posts/${postId}`, { withCredentials: true });
//       // console.log(res.data);
//       navigate("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchPost();
//   }, [postId]);

//   const fetchPostComments = async()=>{
//     try{
//       const res = await axios.get(URL+"/api/comments/post/"+postId)
//       setComments(res.data)
//     }
//     catch(err){
//       console.log(err)
//     }
//   }

//   useEffect(() => {
//     fetchPostComments();
//   }, [postId]);

//   if (loader) return <div>Loading...</div>;

//   return (
//     <div>
//       <Navbar />
//       <div className="px-8 md:px-[200px] mt-8">
//         <div className="flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-black md:text-3xl">{post.title}</h1>
//           {user?._id === post?.userId && (
//             <div className="flex items-center justify-center space-x-2">
//               <p className="cursor-pointer" onClick={()=>navigate("/edit/"+postId)}><BiEdit /></p>
//               <p className="cursor-pointer" onClick={handleDeletePost}><MdDelete /></p>
//             </div>
//           )}
//         </div>
//         <div className="flex items-center justify-between mt-2 md:mt-4">
//           <p>{post.username}</p>
//           <div className="flex space-x-2">
//             <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
//             <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
//           </div>
//         </div>
//         {post.photo && <img src={`${If}${post.photo}`} alt={post.title} />}
//         <p className="mx-auto mt-8">{post.description}</p>
//         {/* <div className="flex items-center mt-8 space-x-4 font-semibold">
//           <p>Categories</p>
//           <div></div>
//         </div> */}
//         <div className="flex flex-col mt-4">
//           <h3>Comments</h3>
//           <div className="px-2 py-2 bg-gray-200 rounded-lg">
//             <div className="flex items-center justify-between">
//               <h3>{comments?.map((c)=>(
//                 <Comment key={c._id} c={c}/>
//               ))}</h3>
//             </div>
//             {/*write a comment */}
//             <div>
//               <input onChange={(e)=>setComment(e.target.value)} type="text" placeholder="write a comment.." className="md:w-[80%] outline-none py-2 px-4 md"  />
//               <button onClick={postComment} className="bg-black text-sm text-white px-2 py-2 md:w-[20%]">Add Comment</button>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default PostDetail;

import axios from "axios";
import Footer from "../component/Footer";
import Navbar from "../component/Navbar";
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { If, URL } from "../url";
import Comment from "../component/Comment";

const PostDetail = () => {
  const { id: postId } = useParams();
  const [post, setPost] = useState({});
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const fetchPost = async () => {
    setLoader(true);
    try {
      const res = await axios.get(`${URL}/api/posts/${postId}`);
      setPost(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoader(false);
    }
  };

  const postComment = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        `${URL}/api/comments/write`,
        { comment, author: user.username, postId, userId: user._id },
        { withCredentials: true }
      );
      setComment("");
      window.location.reload(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeletePost = async () => {
    try {
      await axios.delete(`${URL}/api/posts/${postId}`, { withCredentials: true });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [postId]);

  const fetchPostComments = async () => {
    try {
      const res = await axios.get(`${URL}/api/comments/post/${postId}`);
      setComments(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchPostComments();
  }, [postId]);

  if (loader) return <div>Loading...</div>;

  return (
    <div>
      <Navbar />
      <div className="px-8 md:px-[200px] mt-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-[#043263] md:text-3xl">{post.title}</h1>
          {user?._id === post?.userId && (
            <div className="flex items-center justify-center space-x-2">
              <p className="cursor-pointer" onClick={() => navigate("/edit/" + postId)}><BiEdit /></p>
              <p className="cursor-pointer" onClick={handleDeletePost}><MdDelete /></p>
            </div>
          )}
        </div>
        <div className="flex items-center justify-between mt-2 md:mt-4">
          <p>{post.username}</p>
          <div className="flex space-x-2">
            <p>{new Date(post.updatedAt).toString().slice(0, 15)}</p>
            <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
          </div>
        </div>
        {post.photo && <img src={`${If}${post.photo}`} alt={post.title} />}
        <p className="mx-auto mt-8">{post.description}</p>
        <div className="flex flex-col mt-4">
          <h3>Comments</h3>
          <div className="px-2 py-2 bg-gray-200 rounded-lg">
            <div className="flex items-center justify-between">
              <h3>{comments?.map((c) => (
                <Comment key={c._id} c={c} />
              ))}</h3>
            </div>
            <div>
              <input onChange={(e) => setComment(e.target.value)} value={comment} type="text" placeholder="Write a comment..." className="md:w-[80%] outline-none py-2 px-4 md" />
              <button onClick={postComment} className="bg-black text-sm text-white px-2 py-2 md:w-[20%]">Add Comment</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetail;

