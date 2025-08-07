import { useQuery } from "@tanstack/react-query"
import { fetchFeeds, fetchRecentMessages, fetchStories } from "../Apis/apis"
import { use } from "react"

export const useFeedsQuery = () => {
  return useQuery({
    queryKey: ['feeds'],
    queryFn: fetchFeeds
  })
}

export const useStoriesQuery = () =>{
  return useQuery({
    queryKey:['stories'],
    queryFn:fetchStories
  })
}

export const useRecentMessagesQuery = () => {
  return useQuery({
    queryKey: ['recentMessages'],
    queryFn: fetchRecentMessages
  })
}
