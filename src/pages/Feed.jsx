import { useEffect, useState } from "react";
import { useFeedsQuery } from "../Queries/useQueryData";
import Loading from "../components/Loading";
import PostCard from "../components/PostCard";
import StoriesBar from "../components/StoriesBar";
import InfiniteScroll from "react-infinite-scroll-component";
import { BlinkBlur } from "react-loading-indicators";
import { assets } from "../assets/assets";
import RecentMessages from "../components/RecentMessages";

export default function Feed() {
  const{data:feeds, isPending, isSuccess} = useFeedsQuery()

  // For infinite Scroll to not Hurt performance
  const [visibleFeeds, setVisibleFeeds] = useState([]);
  
  // console.log("visibleFeeds",visibleFeeds.length)

  useEffect(()=>{
     if (feeds && feeds.length > 0) {
      setVisibleFeeds(feeds.slice(0, 5));
    }
  },[feeds])

  const fetchMoreFeeds = () =>{
    const nextFeeds = feeds.slice(visibleFeeds.length, visibleFeeds.length + 5)
    
    setTimeout(() => {
      setVisibleFeeds(prev => [...prev, ...nextFeeds]);
    }, 2500)
  }
  //-------------------------------------------

  if(isPending || !isSuccess){
    return <Loading/>
  }
  // console.log(feeds)
  return(
    <div id="feed-scroll" className="h-full overflow-y-scroll no-scrollbar py-10 xl:pr-5 flex items-start justify-center xl:gap-8">

      {/* Stories and post list */}
      <div>
        <StoriesBar/>

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

      {/* Right side bar */}
      <div className="max-xl:hidden sticky top-0">
        <div className="max-w-xs bg-white text-xs p-4 rounded-md inline-flex flex-col gap-2 shadow">
          <h3 className="text-slate-800 font-semibold">Sponsored</h3>
          <img src={assets.sponsored_img}  className='w-75 h-50 rounded-md' alt="" />
          <p className="text-slate-600">Email Marketing</p>
          <p className="text-slate-400">Grow your marketing with powerful, easy to use platform built for results</p>
        </div>
        
        <RecentMessages />
      </div>

    </div>
  );
}
