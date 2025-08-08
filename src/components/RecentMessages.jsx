import React from 'react'
import { useRecentMessagesQuery } from '../Queries/useQueryData'
import { Link } from 'react-router-dom'
import { Circle } from 'lucide-react'
import moment from 'moment'

const RecentMessages = () => {
    const {data:messages, isPending, isSuccess, error} = useRecentMessagesQuery()
    // console.log(messages)
  return (
    <div className='bg-white max-x-xs mt-4 p-4 min-h-20 rounded-md shadow text-xs text-slate-800'>
    <h3 className='font-semibold text-slate-8 mb-4'>Recent Messages</h3>
    <div className='flex flex-col max-h-56 overflow-y-scroll no-scrollbar'>
        {
            messages?.map((message,index)=>(
                <Link to={`/messages/${message.from_user_id._id}`} key={index} className='relative flex items-start gap-2 py-2  rounded-xl hover:bg-slate-100'>
                <img src={message.from_user_id.profile_picture} alt="" className='w-8 h-8 rounded-full ml-2' />
                <div className='w-full h-full'>
                    <h1 className='text-[0.9rem] font-semibold'>{message.from_user_id.full_name}</h1>
                    <p className='text-xs text-slate-500'>{message.text}</p>
                </div>

                <div className='mr-1 flex flex-col items-end whitespace-nowrap'>
                <p className='self-center'>{moment(message.updatedAt).fromNow()}</p>

                {!message.seen && <div className="relative">
                    <Circle className="stroke-0 fill-indigo-400 w-7 h-7" />
                    <p className="absolute inset-0 flex items-center justify-center text-white text-xs font-bold">
                    1
                    </p>
                </div>}
                </div>
                </Link>
            ))
        }
    </div>
      
    </div>
  )
}

export default RecentMessages
