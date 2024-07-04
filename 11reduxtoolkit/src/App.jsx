import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  return (
    <>
      <div className="text-white bg-slate-700">
        <h1 className="text-3xl text-center p-3">Redux Toolkit</h1>
      </div>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
