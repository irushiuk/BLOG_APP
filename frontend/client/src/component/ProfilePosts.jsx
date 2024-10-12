import React from 'react'
import {If} from '../url'
import { useNavigate } from 'react-router-dom';


export const ProfilePosts = ({p}) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/posts/post/${p._id}`)
    }

  return (
    
    <div className= "w-full flex me-8 space-x-4 cursor-pointer border rounded-lg m-4 p-4 bg-slate-100 hover:shadow-lg" onClick={handleClick}>
        {/*left*/}
        {/* <div className="w-[35%] h-[200px] flex justify-center items-center">
            <img src={p.photo} className="h-full w-full object-cover"/>
        </div> */}

        {/*right */}
        <div className="flex flex-col w-[65%] ">
            <h1 className="font-bold">
                {p.title}
            </h1>
            <div className="flex mb-2 text-sm font-semibold text-gray-400">
                <p>
                    @{p.username}
                </p>
                &nbsp;
                <div>
                <p>{new Date(p.updatedAt).toString().slice(0, 15)}</p>
                <p>{new Date(p.updatedAt).toString().slice(16, 24)}</p>   
                </div>
            </div>
            <p className="text-sm md:text-lg">{p.description.slice(0,200)+"...Read more"}</p>
        </div>

    </div>
  )
}
