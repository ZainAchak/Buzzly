import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./pages/Login";
import Feed from "./pages/Feed";
import Messages from "./pages/Messages";
import Chatbox from "./pages/Chatbox";
import Connections from "./pages/Connections";
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";
import Createpost from "./pages/Createpost";
import { useUser } from "@clerk/clerk-react";
import Layout from "./pages/Layout";
import Loading from "./components/Loading";

function App() {
  const user = useUser();
  if(!user.isLoaded){
    return <Loading />
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={user.isSignedIn ? <Layout /> :<Login />}>
        <Route index element={<Feed />} />
        <Route path="messages" element={<Messages />} />
        <Route path="messages/:userid" element={<Chatbox />} />
        <Route path="connections" element={<Connections />} />
        <Route path="discover" element={<Discover />} />
        <Route path="profile" element={<Profile />} />
        <Route path="profile/:profileId" element={<Profile />} />
        <Route path="create-post" element={<Createpost />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
