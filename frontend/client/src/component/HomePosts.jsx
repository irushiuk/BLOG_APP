import {If} from "../url"

const HomePosts = ({post}) => {
  return (
    <div className="border border-gray-300 rounded-lg p-4 mb-4  bg-gray-100 hover:shadow-lg">
    
        
    <div className= "w-full flex me-8 space-x-4 mr-4">
        {/*left*/}
        <div className="w-[35%] h-[200px] flex justify-center items-center mr-4">
            <img src={If+post.photo}></img>
        </div>

        

        {/*right */}
        <div className="flex flex-col w-[65%] py-3">
            <h1 className="text-xl font-bold md:mb-2 md:text-2xl text-gray-700">{post.title}</h1>
            <div className="flex mb-2 text-sm font-semibold text-gray-400">
                <p>@{post.username} </p>
                &nbsp;
                
                
                <div className="flex space-x-2">
                <p>
                  {new Date(post.updatedAt).toString().slice(0,15)}
                </p>
                <p>{new Date(post.updatedAt).toString().slice(16,24)}</p>
               
                </div>
                
            </div>
            <p className="text-sm md:text-lg">{post.description.slice(0,200)+"...Read more"}</p>
        </div>

    </div>
    </div>
  )
}

export default HomePosts