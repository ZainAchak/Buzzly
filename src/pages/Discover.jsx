import { useState } from "react";
import { dummyConnectionsData } from "../assets/assets";
import { Search } from "lucide-react";
import UserCard from "../components/UserCard";
import Loading from "../components/Loading";

export default function Discover() {
  const [input, setInput] = useState('');
  const [users, setUsers] = useState(dummyConnectionsData)
  const [loading, setLoading] = useState(false)

  // console.log(users)
  async function handleSearch(e) {
    if(e.key ===  'Enter'){
      setUsers([])
      setLoading(true)
      setTimeout(() => {
        setUsers(dummyConnectionsData.filter((user)=>user.full_name.includes(input)))
        setLoading(false)
      }, 1000);
      console.log(e.target.value)
    }
  }

  async function handleOnchange(e) {
    console.log(e.target.value)
    setInput(e.target.value)
    if(e.target.value === ""){
      setUsers(dummyConnectionsData)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto p-6">
         {/* Title */}
        <div className="m-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Discover People</h1>
          <p className="text-slate-600">Connect with amazing people and grow your network</p>
        </div>

        {/* Search */}
        <div className=" shadow-xl rounded-2xl">
          <div className="p-6">
            <div className="flex gap-4 border p-3 border-slate-300 rounded-md text-md">
              <Search className="text-slate-600"/>
              <input onKeyUp={handleSearch} onChange={handleOnchange} value={input} type="text" placeholder="Search for people by name username" className="w-full border-0 focus:border-0 focus:outline-none focus:ring-0 text-slate-500"/>
            </div>
          </div>
        </div>

        {/* UserCard */}
        {loading 
          ? <Loading />
          :<div className="min-w-full mt-6 flex flex-wrap justify-center gap-4 p-2">
          {
            users.map((user,index)=>(
              <UserCard user={user} key={index} />
            ))
          }
        </div>}
      </div>
    </div>)
}
