// import { useContext, useEffect, useState } from "react"
// import Footer from "../component/Footer"
// import HomePosts from "../component/HomePosts"
// import Navbar from "../component/Navbar"
// import axios from "axios"
// import { URL } from "../url"
// import { Link, useLocation } from "react-router-dom"
// // import Loader from '../component/ '
// // import User from "../../../../backend/models/User"
// import { UserContext } from "../context/UserContext"

// const Home = () => {

//   const {search} = useLocation()
//   // console.log(search)

//   const [posts,setPosts] = useState([])
//   const [noResults,setNoResults] = useState(false)
//   const [loader,setLoader] = useState(false)
//   const {user} = useContext(UserContext)
//   console.log(user)

//   const fetchPosts = async()=>{
//     try{
//       const res = await axios.get(URL +"/api/posts/"+search)
//       //console.log(res.data)
//       setPosts(res.data)
//       if (res.data.length == 0){
//         setNoResults(true)
//       }
//       else{
//         setNoResults(false)
//       }
//       setLoader(false)
//     }
//     catch(err){
//       console.log(err)
//       setLoader(true)

//     }
//   }

//   useEffect(()=>{
//     fetchPosts()
//   },[search])
    

//   return (
    
//     <div>
//        <Navbar/>
  
//   <div className="px-8 md:px-[200px]"> 
//     {/*loader?<Loader/>:*/!noResults?posts.map((post)=>(
//       <>
//       <Link key={post._id} to={user?"/posts/post/${post._id}":"/login"}>
//        <HomePosts  post ={post}/>
//       </Link>
//       </>
      
     
//     )):<h3>No posts available</h3>}
      
//   </div>
//   <Footer/>
//     </div>
  
    
   
  
 
//     )
    
// }

// export default Home

import { useContext, useEffect, useState } from "react";
import Footer from "../component/Footer";
import HomePosts from "../component/HomePosts";
import Navbar from "../component/Navbar";
import axios from "axios";
import { URL } from "../url";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { BsTypeH3 } from "react-icons/bs";
import Hero from "../component/Hero";

const Home = () => {

  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [loader, setLoader] = useState(false);
  const { user } = useContext(UserContext);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(URL + "/api/posts/" + search);
      setPosts(res.data);
      if(res.data.length === 0){
        setNoResults(true)
      }
      else{
        setNoResults(false)
      };
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(true);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, [search]);

  return (
    <div>
      <Navbar />
      <Hero/>
      <div className="px-8 md:px-[200px] min-h-[80vh]">
        { !noResults?
          posts.map((post) => (
            <Link key={post._id} to={user ? `/posts/post/${post._id}` : "/login"}>
              <HomePosts key={post._id} post={post} />
            </Link>
          )): <h3 className="text-center font-bold mt-15 text-[#043263]">No posts available.</h3>
         }
      </div>
      <Footer />
    </div>
  );
};

export default Home;
