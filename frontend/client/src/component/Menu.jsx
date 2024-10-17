import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import axios from "axios";

const Menu = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const res = await axios.get(URL + "/api/auth/logout", { withCredentials: true });
      setUser(null);
      navigate("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="bg-black w-[100px] flex flex-col  absolute  right-0 p-4 rounded-md shadow-lg">
      {!user ? (
        <>
          <Link to="/login">
            <h3 className="text-white text-lg hover:text-gray-500 mb-2">Login</h3>
          </Link>
          <Link to="/register">
            <h3 className="text-white text-lg hover:text-gray-500 mb-2">Register</h3>
          </Link>
          <Link to="/about">
            <h3 className="text-white text-lg hover:text-gray-500  ">About</h3>
          </Link>
        </>
      ) : (
        <>
          <Link to={`/profile/${user._id}`}>
            <h3 className="text-white text-lg hover:text-gray-500">Profile</h3>
          </Link>
          <Link to={`/write`}>
            <h3 className="text-white text-lg hover:text-gray-500 lg:hidden">Write</h3>
          </Link>
          <Link to="/">
            <h3 className="text-white text-lg hover:text-gray-500">Home</h3>
          </Link>
          <Link to="/about">
            <h3 className="text-white text-lg hover:text-gray-500 ">About</h3>
          </Link>
          <h3 onClick={handleLogout} className="text-white text-lg hover:text-gray-500 cursor-pointer">Logout</h3>
        </>
      )}
    </div>
  );
};

export default Menu;








// import { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { UserContext } from "../context/UserContext";
// import axios from "axios";


// const Menu = () => {
//   const {user} = useContext(UserContext)
//   const {setUser} = useContext(UserContext)
//   const navigate = useNavigate()

//   const handleLogout = async()=>{
//     try{
//       const res=await axios.get(URL+"/api/auth/logout",{withCredentials:true})
//       // console.log(res)
//       setUser(null)
//       navigate("/login")
//     }
//     catch(err){
//       console.log(err)
//     }

//   }

//   return (
//     <div className="bg-black w-[200px] flex flex-col items-start absolute top-12 right-0 p-4 rounded-md shadow-lg">
//       <Link to="/login">
//         {!user && <h3 className="text-white text-lg hover:text-gray-500 mb-2">Login</h3>}
//       </Link>
//       <Link to="/register">
//         {!user &&<h3 className="text-white text-lg hover:text-gray-500">Register</h3>}
//       </Link>
//       <Link to={"/profile/"+user._id}>
//         {user &&<h3 className="text-white text-lg hover:text-gray-500">Profile</h3>}
//       </Link>
//       {/* <Link to="/write">
//         {user &&<h3 className="text-white text-lg hover:text-gray-500">Write</h3>}
//       </Link> */}
//       <Link to={"/myblogs/"+user._id}>
//         {user &&<h3 className="text-white text-lg hover:text-gray-500">My Blogs</h3>}
//       </Link>
//       <Link to="/">
//         {user &&<h3 className="text-white text-lg hover:text-gray-500">Register</h3>}
//       </Link>
//       {user &&<h3 onClick={handleLogout} className="text-white text-lg hover:text-gray-500">Logout</h3>}

//     </div>
//   );
// };

// export default Menu;
