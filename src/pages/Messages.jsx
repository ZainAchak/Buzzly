import useSideBarStore from "../Store/useStore";

export default function Messages() {
  const sideBar = useSideBarStore((state)=> state.sideBarOpen)
  return <h1>This is Messages{` ${sideBar}`}</h1>;
}
