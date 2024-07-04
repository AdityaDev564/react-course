import { useState, useContext } from "react";
import UserContext from "../context/UserContext";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const {setUser} = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({username, password});
        setUsername("");
        setPassword("");
    }
  return (
    <div className="flex items-center justify-center">
    <div className="flex flex-col bg-zinc-300 m-5 p-2 w-96 h-72 text-center">
        <div >
        <h2 className="text-2xl text-stone-600 m-5">Login</h2>
        </div>
        
        <div className="flex flex-col text-center justify-center items-center">
        <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)} className="px-1 rounded m-3 outline-none py-0.5"/>
        <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} className="px-1 rounded m-3 outline-none py-0.5"/>
        <button onClick={handleSubmit} className="bg-blue-500 text-white w-20 h-8 rounded-lg hover:bg-white hover:text-blue-500 m-3">Submit</button>
        </div>
        </div>
    </div>
  )
}
export default Login