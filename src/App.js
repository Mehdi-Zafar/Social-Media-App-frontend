import Home from "./container/Home";
import Login from "./components/Login";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { fetchUser } from "./utils/fetchUser";

function App() {

  const navigate = useNavigate()

  useEffect(()=>{
    const user = fetchUser()
    // if(!user) navigate('/login')
    console.log(user)
  },[])
  
  return (
    <div className="App">
      <Home/>
      <Login/>
    </div>
  );
}

export default App;
