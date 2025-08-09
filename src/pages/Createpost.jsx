import { Image } from "lucide-react"
import { dummyUserData } from "../assets/assets"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

export default function Createpost() {
  const user = dummyUserData
  const navigate = useNavigate()

   async function handleCreatePost() {
    const wait = new Promise((resolve)=>setTimeout(() => {
      resolve(null)
    }, 2000))
    await wait;
    navigate("/")
  }

  return (
    <div className="min-h-screen">
      <div className="max-w-6xl p-6 ">
         {/* Title */}
        <div className="m-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Create Post</h1>
          <p className="text-slate-600">Share your thoughts with the world</p>
        </div>
      </div>

      {/* Create Post */}

      <div className="m-8 p-3  lg:w-180 bg-white shadow rounded-xl">
          <div className="flex p-6 gap-2">
            <img src={user.profile_picture} className="rounded-full h-16" alt="" />
            <div className="mt-2">
              <h1 className="font-bold text-slate-700 text-xl">{user.full_name}</h1>
              <p className="text-slate-500">@{user.username}</p>
            </div>
          </div>
          
          <textarea rows={4} name="createpost" id="createpost" placeholder="whats happening" className="outline-none text-slate-600 text-md no-scrollbar p-4 w-full resize-none "/>

          <div className="flex justify-between border-t-1 border-slate-200">
            <Image className="mt-4 cursor-pointer text-slate-500" size={28} />
            <button onClick={()=>toast.promise(
              handleCreatePost(),{
                loading: 'Posting...',
                success: <p>Posted</p>,
                error: e => <p>{e.message}</p>
              }
            )} className="mt-4 cursor-pointer bg-indigo-600 text-white px-12 py-2 rounded-md font-medium bg-gradient-to-r active:scale-110 hover:from-indigo-500 hover:to-indigo-700 transition-all duration-200">
              Publish Post
            </button>
          </div>

      </div>
    </div>
  )
}
