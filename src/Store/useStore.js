import { create } from "zustand";

const useSideBarStore = create((set)=>({
    sideBarOpen: false,
    setSideBarOpen: (value) => set({sideBarOpen: value})
}))

export default useSideBarStore
