import React, { useEffect, useState } from 'react'
import { useViewStoryStore } from '../Store/useStore'
import { ArrowLeft, BadgeCheck, X } from 'lucide-react'

const StoryViewer = () => {
    const viewStory = useViewStoryStore((state) => state.viewStory)
    const setViewStory = useViewStoryStore((state) => state.setViewStory)

    const [progressBar,setProgressBar] = useState(0)

    function renderContent() {
        switch (viewStory.media_type) {
            case 'image':
                return (
                    <img src={viewStory.media_url} className='max-w-full max-h-screen object-contain' />)
            case 'video':
               return <video controls autoPlay onEnded={()=>setViewStory(null)} src={viewStory.media_url} className='max-w-full max-h-screen object-contain' />
            case 'text':
                return (
                    <div className='w-full h-full flex items-center justify-center p-8 text-white text-2xl text-center'>
                        {viewStory.content}
                    </div>
                )
                default:
                    return null

    }}

    useEffect(() => {
        let timer, progressInterval
        if(viewStory && viewStory.media_type !== 'video') {
            setProgressBar(0)
            const duration = 10000 // 10 seconds for each story
            const setTime = 30
            let elapsedTime = 0

            progressInterval = setInterval(() => {
                elapsedTime += setTime
                setProgressBar((elapsedTime/ duration)*100)
            },setTime)

            timer = setTimeout(() => {
                setViewStory(null)
            }, duration);
        }
        return () => {
            clearInterval(progressInterval)
            clearTimeout(timer)}
    },[viewStory,setViewStory])

    if (!viewStory) return null
    return (
        <div className='fixed inset-0 h-screen bg-black bg-opacity-90 z-110 flex items-center justify-center' style={{backgroundColor:viewStory.media_type === 'text' ? viewStory.background_color : '#000000'}}>
            <div className='absolute top-0 left-0 w-full h-1 bg-gray-700'>
                <div className='h-full bg-white transition-all duration-100 linear' style={{width:`${progressBar}%`}}></div>

            </div>
            {/* User info - Top left */}
            <div className='absolute top-4 left-4 flex items-center space-x-3 p-2 px-4 sm:p-4 sm:px-8 backdrop-blur-2xl rounded bg-black/50'>
                <img src={viewStory.user?.profile_picture} className='size-7 sm:size-8 rounded-full object-cover border border-white' />
                <div className='flex items-center  text-white font-medium gap-1.5'>
                    <span>{viewStory.user?.full_name}</span>
                    <BadgeCheck size={18}/>
                </div>
            </div>

            {/* close button */}
            <button className='font-bold focus:outline-none'>
                <X size={30} className='absolute top-4 right-4 hover:scale-110 text-white z-50 cursor-pointer' onClick={() => setViewStory(null)} />
            </button>

            {/* content Wrapper */}
            <div className='flex items-center justify-center w-full h-full'>
                {renderContent()}
            </div>
        </div>
    )
    
}

export default StoryViewer


// console.log(viewStory)
//   return (
//     <div className='fixed inset-0 h-screen w-screen bg-black/80 z-50 flex flex-col items-center justify-center'>
//         <div className='relative flex flex-col max-h-200 items-center justify-center'>
//             <ArrowLeft size={30} onClick={()=>setViewStory(null)} className=' absolute top-0 left-0 mt-2 ml-2 text-3xl cursor-pointer text-white ' />
//             {viewStory.media_type === 'image' ? (
//                 <img src={viewStory.media_url} className='h-[70%] rounded-3xl' alt="" />
//                 ) : viewStory.media_type === 'video' ? (
//                 <video src={viewStory.media_url} className='h-[70%] rounded-3xl' controls />
//                 ) : (
//                 <p className='text-white text-lg w-100'>{viewStory.content}</p>
//                 )}
//         </div>
//     </div>
