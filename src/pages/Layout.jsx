import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { dummyUserData } from "../assets/assets";
import Loading from "../components/Loading";
import useSideBarStore from "../Store/useStore";

export default function Layout() {
  // const [sideBarOpen, setSideBarOpen] = useState(false)
  const sideBarOpen = useSideBarStore((state)=> state.sideBarOpen)
  const setSideBarOpen = useSideBarStore((state)=>state.setSideBarOpen)

  const user = dummyUserData
  // console.log(user);
  return user ? (
    <div className="w-full h-screen flex">
      <Sidebar />
      <div className="flex-1 bg-slate-50">
        <Outlet />
      </div>
      {
        sideBarOpen 
        ? <X className="absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden"
            onClick={()=>setSideBarOpen(false)}/>
        : <Menu className="absolute top-3 right-3 p-2 z-100 bg-white rounded-md shadow w-10 h-10 text-gray-600 sm:hidden"
                onClick={()=>setSideBarOpen(true)}/>
      }
    </div>
    ) : (
      <Loading/>
    )
}
