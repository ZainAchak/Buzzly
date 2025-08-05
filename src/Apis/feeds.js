import { dummyPostsData } from "../assets/assets"

export const fetchFeeds = async () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(dummyPostsData)
        },1500)
    })
}