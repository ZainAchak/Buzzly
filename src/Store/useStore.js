import { create } from "zustand";

export const useSideBarStore = create((set)=>({
    sideBarOpen: false,
    setSideBarOpen: (value) => set({sideBarOpen: value})
}))

export const useShowModalStore = create((set)=>({
    showModal:false,
    setShowModal: (value) => set({showModal:value})
}))

export const useViewStoryStore = create((set)=>({
    viewStory: null,
    setViewStory: (value) => set({viewStory: value})
}))
