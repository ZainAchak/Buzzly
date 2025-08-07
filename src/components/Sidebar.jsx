import { useNavigate, Link } from "react-router-dom";
import { assets, dummyUserData } from "../assets/assets";
import MenuItems from "./MenuItems";
import { CirclePlus, Dot, LogOut } from "lucide-react";
import { useClerk, UserButton } from "@clerk/clerk-react";
import {useSideBarStore} from "../Store/useStore";

export default function Sidebar() {
    const sideBarOpen = useSideBarStore((state)=> state.sideBarOpen)
    const setSideBarOpen = useSideBarStore((state)=> state.setSideBarOpen)

    // const navigate = useNavigate()
    const user = dummyUserData
    const {signOut} = useClerk()
  return (
    <div className={`bg-white w-60 xl:w-72 border border-gray-200 flex flex-col justify-between items-center max-sm:absolute top-0 bottom-0 z-20 ${sideBarOpen ? 'translate-x-0' : 'max-sm:-translate-x-full'} transition-all duration-500 ease-in-out`}>
        <div className="w-full">
            <div className="flex items-center justify-between">
                <h1 className='ml-3 my-2 text-3xl font-bold bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent'>#Buzzly</h1>
                <Dot className="absolute h-15 w-15 top--1 left-27 text-indigo-400 animate-pulse"/>
                <div className="flex-1"></div>
            </div>
            <hr className="border-gray-200 mb-8"/>

            <MenuItems setSidebarOpen={setSideBarOpen}/>
            <Link to="/create-post" className="flex items-center justify-center gap-2 py-2.5 mt-9 mx-6 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-800 text-white cursor-pointer active:scale-95 transition duration-200 ease-in-out">
                <CirclePlus className="w-5 h-5" />Create Post
            </Link>
        </div>
        <div className="w-full border-t border-gray-200 p-4 px-7 flex items-center justify-between">
            <div className="flex items-center gap-3">
                   <UserButton /> 
                   <div>
                    <h1 className="text-sm font-medium">{user.full_name}</h1>
                    <p className="text-xs text-gray-500">@{user.username}</p>
                   </div>
            </div>
            <LogOut onClick={signOut}
                    className="w-4.5 text-gray-400 hover:text-gray-700 transition cursor-pointer"/>
        </div>
    </div>
  );
}