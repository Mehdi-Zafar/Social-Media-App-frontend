import { useState,useEffect } from "react";
import MasonryLayout from "./MasonryLayout";
import { client } from "../client";
import { feedQuery,searchQuery } from "../utils/data";
import Spinner from "./Spinner";


const Search = ({searchTerm}) => {

    const [pins,setPins] = useState(null)
    const [loading,setLoading] = useState(true)
    const [rerender,setRerender] = useState(false)

    useEffect(()=>{
        if(searchTerm){
            setLoading(true)
            const query = searchQuery(searchTerm.toLowerCase())
            client.fetch(query)
                .then((data)=>{
                    setPins(data)
                    setLoading(false)
                })
        }else{
            client.fetch(feedQuery)
                .then((data)=>{
                    setPins(data)
                    setLoading(false)
                })
        }
    },[searchTerm])

    useEffect(()=>{
        if(searchTerm){
            const query = searchQuery(searchTerm.toLowerCase())
            client.fetch(query)
                .then((data)=>{
                    setPins(data)
                })
        }else{
            client.fetch(feedQuery)
                .then((data)=>{
                    setPins(data)
                })
        }
    },[rerender])

    return ( 
        <div>
            {loading && <Spinner message="Searching for pins"/>}
            {pins?.length !== 0 && <MasonryLayout pins={pins} setRerender={setRerender}/>}
            {pins?.length === 0 && searchTerm !== '' && !loading && (
                <div className="mt-10 text-center text-xl">No pins found</div>
            )}
        </div>
     );
}
 
export default Search;