// import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"


function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/hiteshchoudhary')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])

  return (
    <div className="flex justify-center">
        <img src={data.avatar_url} width={300}/>
        <div className="text-center bg-gray-600 text-white text-3xl px-5 py-32">Github followers: {data.followers}</div>
    
    </div>
  )
}

export default Github

