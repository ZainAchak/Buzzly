import React, { useEffect, useState } from 'react'
import { useFeedsQuery } from '../Queries/useQueryData'
import InfiniteScroll from 'react-infinite-scroll-component'
import { BlinkBlur } from 'react-loading-indicators'
import PostCard from './PostCard'
import Loading from './Loading'

const ProfilePosts = () => {
    const{data:feeds, isPending, isSuccess} = useFeedsQuery()
    const [visibleFeeds, setVisibleFeeds] = useState([]);
    useEffect(()=>{
         if (feeds && feeds.length > 0) {
          setVisibleFeeds(feeds.slice(0, 5));
        }
      },[feeds])

    if(isPending){
        return <Loading />
    }
    
    const fetchMoreFeeds = () =>{
    const nextFeeds = feeds.slice(visibleFeeds.length, visibleFeeds.length + 5)
    
    setTimeout(() => {
      setVisibleFeeds(prev => [...prev, ...nextFeeds]);
    }, 2500)
  }

    // console.log("Profile Posts Comp", posts)
  return (
    <div className='flex justify-center'>
      <InfiniteScroll
          dataLength={visibleFeeds.length}
          next={fetchMoreFeeds}
          hasMore={visibleFeeds.length < feeds.length}
          loader={<div className="flex justify-center items-center opacity-65 mt-5"><BlinkBlur color={"#143A78"} size="small" text="Loading more..." textColor="#143A78"/></div>}//<p className="text-center mt-4">Loading more posts...</p>
          endMessage={<p className="text-center mt-4 text-gray-500">You've reached the end 🎉</p>}
          scrollableTarget="feed-scroll">

            <div className="p-4 space-y-6">
              {visibleFeeds.map((feed,index)=>(
                <PostCard key={index} post={feed} />
              ))}
            </div>

          </InfiniteScroll>
    </div>
  )
}

export default React.memo(ProfilePosts)
