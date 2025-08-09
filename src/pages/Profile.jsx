import { Link, useParams } from "react-router-dom";
import { assets, dummyConnectionsData, dummyUserData } from "../assets/assets";
import { BadgeCheck, Calendar, MapPin } from "lucide-react";
import moment from "moment";
import Loading from "../components/Loading";
import { useState } from "react";
import { useFeedsQuery } from "../Queries/useQueryData";
import ProfilePosts from "../components/ProfilePosts";

export default function Profile() {
  const [selectedBtn, setSelectedBtn] = useState('posts')
  const{data:posts, isPending, isSuccess} = useFeedsQuery()
  const params = useParams()
  const userId = params["profileId"]
  const options = ["posts", "media", "likes"];
  let user = null
  
  // if(!isPending){
  //   return <Loading />
  // }
  // const user = dummyUserData
  if(!userId){
    user = dummyUserData
    console.log("user",user)
  }else{
    user = dummyConnectionsData.filter((user)=> user._id === userId)[0]
    console.log("user",user)
    }


  return ( !user ? <Loading />
    : <div  id="feed-scroll" className="max-h-screen max-w-6xl mx-auto flex flex-col overflow-y-scroll no-scrollbar">
      {/* Cover + Profile */}
      <div className="rounded-md shadow-md m-3 ">
        <img src={user.cover_photo} className="max-h-40 sm:max-h-80 border-0 w-full object-cover"  alt="" />

        <div className="relative flex">
            <img src={user.profile_picture} alt="" className="rounded-full h-25 w-25 sm:w-30 sm:h-30 absolute left-5 top-[-2.5rem] border-8 border-white"/>
            <div className=" relative flex flex-col items-start ml-31 sm:ml-37 gap-2">
                <h1 className="text-xl sm:text-3xl font-bold flex items-center gap-2">{user.full_name}<BadgeCheck size={22} className="text-blue-700" /></h1>
                <p className="text-slate-500 text-xl">@{user.username}</p>
                <p className="max-w-70 sm:max-w-120 text-start">{user.bio}</p>

                <div className="flex gap-3 max-sm:flex-wrap max-sm:mt-3 text-slate-500 ">
                  <span className="flex gap-1 items-center justify-center"><MapPin size={17} />{user.location}</span>
                  <span className="flex gap-1 items-center justify-center"><Calendar size={17} />Joined {moment(user.createdAt).fromNow()}</span>
                </div>

                <div className="border-t sm:min-w-full border-slate-200 mt-6 p-4">
                    <div className="flex flex-col items-start sm:flex-row gap-2 sm:gap-6">
                      <span className="text-xl flex justify-center items-center gap-1 sm:gap-2 text-slate-400">
                        <span className="text-2xl text-slate-700 font-bold">6</span> Posts
                      </span>

                      <span className="text-xl flex justify-center items-center gap-1 sm:gap-2 text-slate-400">
                        <span className="text-2xl text-slate-700 font-bold">2</span> Followers
                      </span>

                      <span className="text-xl flex justify-center items-center gap-1 sm:gap-2 text-slate-400">
                        <span className="text-2xl text-slate-700 font-bold">2</span> Following
                      </span>
                    </div>
                </div>
            </div>
        </div>
        
      </div>

      {/* Posts Media Likes */}
      <div className=" rounded-xl flex flex-col flex-1 max-w-6xl m-3 mx-auto">
          {/* Buttons */}
          <div className="overflow-clip rounded-xl max-w-200 flex  bg-slate-200 shadow max-md:flex-col gap-0 sm:gap-2 justify-center items-center ">
              <button onClick={()=>setSelectedBtn("posts")} className={`${selectedBtn === "posts" ? "bg-indigo-500 text-white" : "bg-slate-200 text-gray-700" }  cursor-pointer py-2 w-85 sm:w-45 md:w-45 flex items-center justify-center max-sm:rounded-t-2xl sm:rounded-md text-xl`}>Posts</button>
              <button onClick={()=>setSelectedBtn("media")} className={`${selectedBtn === "media" ? "bg-indigo-500 text-white" : "bg-slate-200 text-gray-700" }  cursor-pointer py-2 w-85 sm:w-45 md:w-45 flex items-center justify-center sm:rounded-md text-xl`}>Media</button>
              <button onClick={()=>setSelectedBtn("likes")} className={`${selectedBtn === "likes" ? "bg-indigo-500 text-white" : "bg-slate-200 text-gray-700" }  cursor-pointer py-2 w-85 sm:w-45 md:w-45 flex items-center justify-center max-sm:rounded-b-2xl sm:rounded-md text-xl`}>Likes</button>
          </div>
            
        
      </div>

      {/* Posts */}
      {
        selectedBtn === "posts" && 
        
          <ProfilePosts  />
        
      }

      {/* Media */}
      {
        selectedBtn === "media" && 
        
          <div className="flex flex-wrap mb-2 justify-center gap-2 mt-6 max-x-6xl">
            {
              posts.filter((post)=> post.image_urls.length > 0).map((postWImg)=>(
                <>
                  {
                    postWImg.image_urls.map((image,index)=>(
                      <Link target="_blank" className="relative group" to={image}>
                        <img src={image} className="w-74 aspect-video object-cover" alt="" />  
                        <p className="absolute bottom-0 right-0 text-xs p-1 px-3 backdrop-blur-xl text-white opacity-0 group-hover:opacity-100 transition duration-300">Posted {moment(postWImg.createdAt).fromNow()}</p>                    
                      </Link>
                    ))
                  }
                </>
              ))
            }
          </div>
        
      }
    </div>
  );
}
