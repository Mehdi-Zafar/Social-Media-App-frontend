import { useState } from "react";
import { Routes,Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Feed from "../components/Feed"
import PinDetail from "../components/PinDetail"
import CreatePin from "../components/CreatePin"
import Search from "../components/Search"



const Pins = ({user}) => {
    const [searchTerm,setSearchTerm] = useState('')

    return ( 
        <div className="px-2 md:px-5">
            <div>
                <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} user={user}/>
            </div>
            <div className="h-full">
                <Routes>
                    <Route path="/" element={<Feed/>}/>
                    <Route path="/category/:categoryId" element={<Feed/>}/>
                    <Route path="/pin-detail/:pinId" element={<PinDetail user={user && user}/>}/>
                    <Route path="/create-pin" element={<CreatePin user={user && user}/>}/>
                    <Route path="/search" element={<Search searchTerm={searchTerm}/>}/>
                </Routes>
                {/* <Feed/>
                <PinDetail user={user}/>
                <CreatePin/>
                <Search/> */}
            </div>
        </div>
     );
}
 
export default Pins;