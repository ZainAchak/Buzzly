import { MapPin, Plus, UserPlus } from 'lucide-react'
import React from 'react'

const UserCard = ({user}) => {
    console.log("UserCard Rendered")
  return (
    <div className='rounded-xl bg-white shadow-xl min-w-xs p-6 flex flex-col items-center justify-center'>
      <img src={user.profile_picture} alt="" className='h-14 w-14 rounded-full'/>
      <h2>{user.full_name}</h2>
      <h2 className='text-slate-500'>@{user.username}</h2>
      <p className='w-70 text-center text-slate-700 text-sm'>{user.bio}</p>
      <div className='flex gap-2 text-sm text-slate-800 mt-6'>
        <span className='bg-slate-200 text-slate-600 py-1 px-2 rounded-xl flex justify-center items-center gap-1'><MapPin size={17} className='text-slate-500' />{user.location}</span>
        <span className='bg-slate-200 py-1 px-2 rounded-xl flex justify-center text-slate-600 items-center gap-1'>{user.followers.length} Followers</span>
      </div>

      <div className='flex mt-10 min-w-full gap-2'>
        <button className='rounded-md bg-gradient-to-r from-indigo-600 to-indigo-500 text-white flex flex-1 justify-center items-center gap-2 py-2'><UserPlus size={18}/> Follow</button>
        <button className='shrink-0'><Plus size={18} className='border h-10 w-10 p-2 border-slate-400 rounded-md text-slate-600' /></button>
      </div>
    
    </div>
  )
}

export default React.memo(UserCard)
