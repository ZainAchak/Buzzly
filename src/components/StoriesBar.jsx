import { useStoriesQuery } from '../Queries/useQueryData'
import Loading from './Loading'
import { Plus } from 'lucide-react'
import moment from 'moment'
import StoryModal from './StoryModal'
import { useShowModalStore, useViewStoryStore } from '../Store/useStore'
import StoryViewer from './StoryViewer'

const StoriesBar = () => {
    const {data, isLoading, isPending,error} = useStoriesQuery()
    const showModal = useShowModalStore((state)=> state.showModal)
    const setShowModal = useShowModalStore((state)=>state.setShowModal)
    const viewStory = useViewStoryStore((state)=> state.viewStory)
    const setViewStory = useViewStoryStore((state)=>state.setViewStory)

    if(isLoading){
        return <Loading/>
    }
    return (
        <>
        <div className=' w-screen sm:w-[calc(100vw-240px)] lg:max-w-2xl no-scrollbar overflow-x-auto px-4'>
            <div className=' flex items-center gap-4 pb-5'>
                {/* Add a story card */}
                <div onClick={()=>setShowModal(true)}
                    className='rounded-lg shadow-sm min-w-30 max-h-40 aspect-[3/4] cursor-pointer hover:shadow-lg transition-all duration-200 border-2 border-dashed border-indigo-300 bg-gradient-to-b from-indigo-50 to-white'>
                    <div className='h-full flex flex-col items-center justify-center p-4'>
                        <div className='size-10 bg-indigo-500 rounded-full flex items-center justify-center mb-3'>
                            <Plus className='w-5 h-5 text-white'/>
                        </div>
                        <p className='text-sm font-medium text-slate-700 text-center'>Create a story</p>
                    </div>
                </div>
                {/* story cards */}
                {
                data.map((story, index) => (
                    <div onClick={()=>setViewStory(story)} key={index}
                        className="relative rounded-lg shadow min-w-30 max-w-30  aspect-[3/4] bg-gradient-to-b from-indigo-400 to-indigo-600 cursor-pointer hover:shadow-lg transition-all duration-200">
                        <img
                            src={story.user.profile_picture}
                            className=" absolute top-3 left-3 size-8 z-10 rounded-full ring ring-gray-100 shadow"/>
                        <p className=" absolute top-[72px] left-3 text-sm text-white/60 truncate max-w-24">
                            {story.content}</p>
                        <p className=" absolute bottom-1 right-2 text-xs text-white z-10">
                            {moment(story.createdAt).fromNow()}</p>
                        {
                            story.media_type !== "text" && (
                                <div className='absolute inset-0 z-1 rounded-lg bg-black overflow-hidden'>
                                     {
                                        story.media_type === "image" 
                                            ? <img src={story.media_url} className='h-full w-full object-cover transition duration-500 opacity-70 hover:opacity-80 hover:scale-110' />
                                            :  <video src={story.media_url} className='h-full w-full object-cover transition duration-500 opacity-70 hover:opacity-80 hover:scale-110' />
                                    }
                                </div>
                            ) 
                        }
                       
                    </div>
                ))}
            </div>
            {/* Add Story Modal */}
            {
                showModal && <StoryModal />
            }
            {/* View Story Modal */}
            {
                viewStory && <StoryViewer />
            }

        </div>
        </>
    )
}

{/* <div key={index} className={`relative rounded-lg shadow min-w-30 max-w-30 max-h-30 cursor-pointer hover:shadow-lg transition-all duration-200 bg-gradient-to-b from-indigo-500 to-purple-600 hover:from-indigo-700 hover:to-purple-800 active:scale-95`}>
<img src={story.user.profile_picture} className='absolute size-8 top-3 left-3 z-10 rounded-full ring ring-gray-100 shadow'/>
<p className='absolute top-18 left-3 text-white/60 text-sm truncate max-w-24'>{story.content}</p>
<p className='text-white absolute bottom-1 right-2 z-10 text-xs'>{story.createAt}</p>
</div> */}

export default StoriesBar
