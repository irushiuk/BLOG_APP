// import React, { useContext, useEffect, useState } from 'react'
// import Navbar from '../component/Navbar'
// import Footer from '../component/Footer'
// import { ProfilePosts } from '../component/ProfilePosts'
// import { useNavigate, useParams } from 'react-router-dom'
// import { UserContext } from '../context/UserContext'
// import axios from 'axios'
// import { URL } from '../url'

// const Profile = () => {

//     const param = useParams().id
//     const [username,setUsername] = useState("")
//     const [email,setEmail] = useState("")
//     const [password,setPassword] = useState("")
//     const {user,setUser} = useContext(UserContext)
//     const navigate = useNavigate()
//     const [posts,setPosts] = useState([])
//     const [updated,setUpdated] = useState(false)

//     const fetchProfile = async ()=>{
//         try{
//             const res = await axios.get(URL+"/api/users/"+user._id)
//             setUsername(res.data.username)
//             setEmail(res.data.email)
//             // setPassword(res.data.password)
//         }
//         catch(err){
//             console.log(err)
//         }
//     }

//     const handleUserUpdate= async()=>{
//         setUpdated(false)
//         try{
//             const res = await axios.put(URL+ "/api/users/"+user._id,{username,email,password},{withCredentials:true})
//             setUpdated(true)
//         }

//         catch(err){
//             console.log(err)
//             setUpdated(false)

//         }
//     }

//     const handleUserDelete = async()=>{
//         try{
//             const res = await axios.delete(URL+"/api/users/"+user._id,{withCredentials:true})
//             setUser(null)
//             navigate("/")
//         }
//         catch(err){
//             console.log(err)
//         }
//     }

//     const fetchUserPosts = async()=>{
//         try{
//             const res = await axios.get(URL+"/api/posts/user/"+user._id)
//             setPosts(res.data)
//         }
//         catch(err){
//             console.log(err)
//         }
//     }

//     useEffect(()=>{
//         fetchProfile()
//     },[user?._id])

//     // useEffect(()=>{
//     //     fetchUserPosts()
//     // },[param])

//   return (
//     <div>
//         <Navbar/>
//         <div className='px-8 md:px-200px mt-8 flex md:flex-row flex-col-reverse'>
//             <div className='flex flex-col md:2-[70%] w-full'>
//                 <h1 className='text-xl font-bold mb-4'>Your Posts</h1>
//                 {Array.isArray(posts) && posts.map((p) => (
//                         <ProfilePosts key={p._id} p={p} />
//                     ))}
//             </div>
            
//             <div className='flex justify-start md:justify-end items-start md:w-[30%] w-full md:items-end'>
//                 <div className='flex flex-col space-y-4 items-start'>
//                 <h1 className='text-xl font-bold mb-4'>Profile</h1>
//                 <input onChange={(e)=>setUsername(e.target.value)} value={username} type="text" placeholder='username' className='outline-none px-4 py-2 text-gray-300' />
//                 <input onChange={(e)=>setEmail(e.target.value)} value={email} type="text" placeholder='email' className='outline-none px-4 py-2 text-gray-300'/>
//                 {/* <input onChange={(e)=>setPassword(e.target.value)} value={password} type="text" placeholder='password' className='outline-none px-4 py-2 text-gray-300'/> */}
//                 <div className='flex items-center space-x-4'>
//                     <button onClick={handleUserUpdate} className='bg-blue px-4 py-2 bg-black text-white'>Update</button>
//                     <button onClick={handleUserDelete} className='bg-blue px-4 py-2 bg-black text-white'>Delete</button>
//                 </div>
//                 {updated && <h3 className='text-green-500 text-sm'>User updated successfully!</h3>}
//                 </div>
                
//             </div>

//         </div>
//         <Footer/>
//     </div>
//   )
// }

// export default Profile


import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../component/Navbar'
import Footer from '../component/Footer'
import { ProfilePosts } from '../component/ProfilePosts'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
import axios from 'axios'
import { URL } from '../url'

const Profile = () => {
    // const { id: paramId } = useParams()
    const param = useParams().id
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])
    const [updated, setUpdated] = useState(false)

    const fetchProfile = async () => {
        if (!user?._id) return
        try {
            const res = await axios.get(`${URL}/api/users/${user._id}`)
            setUsername(res.data.username)
            setEmail(res.data.email)
            // setPassword(res.data.password)
        } catch (err) {
            console.error("Error fetching profile:", err.response ? err.response.data : err.message)
        }
    }

    const handleUserUpdate = async () => {
        setUpdated(false)
        try {
            await axios.put(`${URL}/api/users/${user._id}`, { username, email, password }, { withCredentials: true })
            setUpdated(true)
        } catch (err) {
            console.error("Error updating user:", err.response ? err.response.data : err.message)
            setUpdated(false)
        }
    }

    const handleUserDelete = async () => {
        try {
            await axios.delete(`${URL}/api/users/${user._id}`, { withCredentials: true })
            setUser(null)
            navigate("/")
        } catch (err) {
            console.error("Error deleting user:", err.response ? err.response.data : err.message)
        }
    }

    const fetchUserPosts = async () => {
        try {
            const res = await axios.get(`${URL}/api/posts/user/${user._id}`)
            setPosts(res.data)
        } catch (err) {
            console.error("Error fetching user posts:", err.response ? err.response.data : err.message)
        }
    }

    // const fetchUserPosts = async () => {
    //     try {
    //         const res = await axios.get(`${URL}/api/posts/user/${user._id}`)
    //         setPosts(res.data)
    //     } catch (err) {
    //         console.error("Error fetching user posts:", err.response ? err.response.data : err.message)
    //     }
    // }

    useEffect(() => {
        if (user?._id) {
            fetchProfile()
            fetchUserPosts()
        }
    }, [user?._id])

    // useEffect(() => {
    //     fetchUserPosts()
    // }, [paramId])

    return (
        <div className="flex flex-col min-h-screen"> {/* Ensures the full height of the screen is used */}
            <Navbar />
            <div className=' flex-grow px-8 py-24 md:px-200px mt-8 flex md:flex-row flex-col-reverse'>
                <div className='flex flex-col md:w-[70%] w-full mb-10'>
                    <h1 className='text-xl font-bold mb-4 text-slate-600'>Your Posts</h1>
                    {Array.isArray(posts) && posts.length > 0 ? (
                        posts.map((p) => (
                            <ProfilePosts key={p._id} p={p} />
                        ))
                    ) : (
                        <p className='text-gray-500'>You haven't posted anything yet.</p> // Message when no posts
                    )}
                </div>

                <div className='flex justify-start md:justify-end items-start md:w-[30%] w-full '>
                    <div className='flex flex-col space-y-4 items-start mb-6 border p-4 rounded border-slate-500'>
                        <h1 className='text-xl text-slate-600 font-bold mb-2'>Profile</h1>
                        <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" placeholder='username' className='outline-none px-4 py-2 text-gray-400 text-bold' />
                        <input onChange={(e) => setEmail(e.target.value)} value={email} type="text" placeholder='email' className='outline-none px-4 py-2 text-gray-400 text-bold' />
                        {/* <input onChange={(e) => setPassword(e.target.value)} value={password} type="text" placeholder='password' className='outline-none px-4 py-2 text-gray-300' /> */}
                        <div className='flex items-center space-x-4'>
                            <button onClick={handleUserUpdate} className=' px-4 py-2 bg-gray-800 text-white rounded-lg'>Update</button>
                            <button onClick={handleUserDelete} className='bg-blue px-4 py-2 bg-gray-800 text-white rounded-lg'>Delete</button>
                        </div>
                        {updated && <h3 className='text-green-500 text-sm'>User updated successfully!</h3>}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Profile
