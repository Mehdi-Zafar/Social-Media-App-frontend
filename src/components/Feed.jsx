import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import {client} from '../client'
import MasonryLayout from './MasonryLayout'
import Spinner from './Spinner'
import { feedQuery, searchQuery } from "../utils/data";

const Feed = () => {
    const [loading, setLoading] = useState(false)
    const [pins,setPins] = useState(null)
    const {categoryId} = useParams()
    const [rerender,setRerender] = useState(false)

    useEffect(()=>{
        setLoading(true)

        if(categoryId){
            const query = searchQuery(categoryId)
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
    },[categoryId])

    useEffect(()=>{

        if(categoryId){
            const query = searchQuery(categoryId)
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


    if(loading) return <Spinner message="We are adding news ideas to your feed!"/>

    if(!pins?.length) return <h2>No Pins found!</h2>
    return ( 
        <div>
            {pins && <MasonryLayout pins={pins} setRerender={setRerender}/>}
        </div>
     );
}
 
export default Feed;