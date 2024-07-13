import React from 'react'
// import Navbar from './component/Navbar'
// import Footer from './component/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import PostDetail from './pages/PostDetail'
import CreatePost from './pages/CreatePost'
import EditPost from './pages/EditPost'
import Profile from './pages/Profile'
import { UserContextProvider } from './context/UserContext'
import MyBlogs from './pages/MyBlogs'
import About from './pages/About'

const App = () => {
  return (
    <UserContextProvider>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/posts/post/:id' element={<PostDetail/>}/>
        <Route path='/write' element={<CreatePost/>}/>
        <Route path='/myblogs' element={<MyBlogs/>}/>
        <Route path='/edit/:id' element={<EditPost/>}/>
        <Route path='/about' element={<About/>}/>

        <Route path='/profile/:id' element={<Profile/>}/>

      </Routes>
      {/* <Footer /> */}

      
    </UserContextProvider>
  )
}

export default App
