import Login from "./components/Login"
import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextProvider"


function App() {
  
  return (
    <UserContextProvider>
      <div className="bg-slate-500 min-h-screen">
      <div className="text-3xl text-center text-gray-700">Hello World</div>
      <Login/>
      <Profile/>
      </div>
    </UserContextProvider>
  )
}

export default App
