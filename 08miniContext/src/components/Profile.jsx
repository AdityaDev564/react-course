import { useContext } from "react"
import UserContext from "../context/UserContext"

function Profile() {

    const {user} = useContext(UserContext);
  if(!user ) return <div className="text-center ml-64 text-4xl bg-slate-200 p-4 w-3/5">Please Login</div>

  return <div className="text-center ml-64 text-4xl bg-slate-200 p-4 w-3/5">Welcome {user.username}</div>
}
export default Profile 