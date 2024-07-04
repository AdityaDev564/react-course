import { useParams } from "react-router-dom"

function User() {
    const {userid} = useParams();
  return (
    <div className="text-center bg-gray-700 text-white p-4 text-3xl h-64">User: {userid}</div>
  )
}

export default User