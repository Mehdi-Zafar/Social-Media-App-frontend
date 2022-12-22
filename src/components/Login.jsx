import {useNavigate} from 'react-router-dom';
import { client } from '../client';
import { useEffect } from 'react';
import jwt_decode from "jwt-decode";
import shareVideo from "../assets/share.mp4"
import logo from "../assets/logowhite.png"


const Login = () => {
    const navigate = useNavigate();
    function responseGoogle(response){
        const jwt_token = jwt_decode(response.credential)
        localStorage.setItem('user',JSON.stringify(jwt_token))
        const {name,sub,picture} = jwt_token;
        const doc={
            _id: sub,
            _type:'user',
            userName:name,
            image:picture,
        }

        client.createIfNotExists(doc)
            .then(()=>{
                navigate('/',{replace:true})
            })
    }


    useEffect(()=>{
        /*global google*/
        google.accounts.id.initialize({
            client_id: process.env.REACT_APP_GOOGLE_API_TOKEN,
            callback: responseGoogle
        });

        google.accounts.id.renderButton(
            document.getElementById("signInDiv"),
            {theme:"outline",size:"large"}
        )
    },[])

    return ( 
        <div className="flex justify-start items-center flex-col h-screen">
            <div className="relative w-full h-full">
                <video 
                src={shareVideo}
                type="video/mp4"
                loop
                controls={false}
                autoPlay
                muted
                className="w-full h-full object-cover"
                />
                <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
                    <div className="p-5">
                        <img src={logo} width="130px" alt="logo" />
                    </div>
                    <div className="shadow-2xl">
                        <div id="signInDiv">

                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Login;