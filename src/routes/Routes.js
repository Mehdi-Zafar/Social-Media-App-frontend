import Home from '../container/Home'
import Login from '../components/Login';
import {createBrowserRouter,createRoutesFromElements,Route } from "react-router-dom";
import Feed from "../components/Feed"
import PinDetail from "../components/PinDetail"
import CreatePin from "../components/CreatePin"
import Search from "../components/Search"
import UserProfile from '../components/UserProfile';

export const router = createBrowserRouter(
    createRoutesFromElements(
      <>
      <Route path="*" element={<Home/>}>
        <Route index element={<Feed/>}/>
        <Route path="category/:categoryId" element={<Feed/>}/>
        <Route path="pin-detail/:pinId" element={<PinDetail/>}/>
        <Route path="create-pin" element={<CreatePin/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="user-profile/:userId" element={<UserProfile/>}/>
      </Route>
      <Route path="/login" element= {<Login/>}/>
      </>
    )
    );