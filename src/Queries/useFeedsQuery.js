import { useQuery } from "@tanstack/react-query"
import { fetchFeeds } from "../Apis/feeds"

export const useFeedsQuery = () => {
  return useQuery({
    queryKey: ['feeds'],
    queryFn: fetchFeeds
  })
}

