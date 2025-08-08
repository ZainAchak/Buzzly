import { dummyConnectionsData, dummyFollowersData, dummyFollowingData, dummyPendingConnectionsData, dummyPostsData, dummyRecentMessagesData, dummyStoriesData } from "../assets/assets"

export const fetchFeeds = async () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(dummyPostsData)
        },100)
    })
}

export const fetchStories = async () => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(dummyStoriesData)
        }, 100);
    })
}

export const fetchRecentMessages = async () => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(dummyRecentMessagesData)
        }, 100);
    })
}

export const fetchConnectionsData = async () => {
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({
                dummyConnectionsData,
                dummyFollowersData,
                dummyFollowingData,
                dummyPendingConnectionsData
            })
        }, 200);
    })
}