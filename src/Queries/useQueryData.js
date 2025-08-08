import { useQuery } from "@tanstack/react-query"
import { fetchConnectionsData, fetchFeeds, fetchRecentMessages, fetchStories } from "../Apis/apis"

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

export const useConnectionsQuery = () =>{
  return useQuery({
    queryKey:['connectionsData'],
    queryFn: fetchConnectionsData
  })
}
