import React, { useContext } from 'react'
import { BiEdit } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import { UserContext } from '../context/UserContext'
import axios from 'axios'

const Comment = ({c,post}) => {

  const {user} = useContext(UserContext)
  const deleteComment = async()=>{
    try{
      await axios.delete(URL+"/api/comments/"+{c,_id},{withCredentials:true})
      window.location.reload(true)

    }
    catch(err){
      console.log(err)
    }
  }

  return (
    <div>
        <div className='flex items-center justify-between'></div>
        <h3 className='font-bold text-gray-600'>@{c.author}</h3>
        <div className='flex justify-center items-center space-x-4'>
        <p>{new Date(c.updatedAt).toString().slice(0, 15)}</p>
        <p>{new Date(c.updatedAt).toString().slice(16, 24)}</p>
        {user?._id===c?.userId}
            <div className='flex justify-center space-x-2'>
                {/* <p><BiEdit/></p> */}
                <p className='cursor-pointer' onClick={()=> deleteComment(c._id)}><MdDelete/></p>
            </div>
        </div>

        <p className='px-4 mt-2'>{c.comment}</p>

    </div>
  )
}

export default Comment