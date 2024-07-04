import { useState } from "react";

function App() {
  const [bgColor, setBgColor] = useState('bg-gray-500');

  // const changeBgColorRed = () => {
  //   setBgColor('bg-red-500');
  // }
  const changeBgColorGreen = () => {
    setBgColor('bg-green-500');
  }
  const changeBgColorBlue = () => {
    setBgColor('bg-blue-500');
  }
  const changeBgColorYellow = () => {
    setBgColor('bg-yellow-500');
  }
  const changeBgColorWhite = () => {
    setBgColor('bg-white');
  }
  const changeBgColorGray = () => {
    setBgColor('bg-gray-500');
  }
  const changeBgColorBlack = () => {
    setBgColor('bg-black');
  }
  const changeBgColorPink = () => {
    setBgColor('bg-pink-300')
  }

  return (
    <div className={`flex flex-col items-center text-center justify-between min-h-screen ${bgColor}`}>
      <h1 className='text-4xl text-blue-900 py-8'>Background Changer</h1>
      <div className='bg-gray-400 rounded-xl m-5 flex flex-wrap justify-around px-3 mt-auto'>
        <button onClick={()=>setBgColor('bg-red-500')} className='bg-red-500 text-white rounded-lg m-4 px-6 py-3 hover:border-none hover:bg-white hover:text-red-500'>Red</button>
        <button onClick={changeBgColorGreen} className='bg-green-700 text-white rounded-lg m-4 px-6 py-3 hover:border-none hover:bg-white hover:text-green-500'>Green</button>
        <button onClick={changeBgColorBlue} className='bg-blue-500 text-white rounded-lg m-4 px-6 py-3 hover:border-none hover:bg-white hover:text-blue-500'>Blue</button>
        <button onClick={changeBgColorGray} className='bg-gray-500 text-white rounded-lg m-4 px-6 py-3 hover:border-none hover:bg-white hover:text-gray-500'>Gray</button>
        <button onClick={changeBgColorYellow} className='bg-yellow-500 text-black rounded-lg m-4 px-6 py-3 hover:border-none hover:bg-black hover:text-yellow-500'>Yellow</button>
        <button onClick={changeBgColorPink} className='bg-pink-300 text-white rounded-lg m-4 px-6 py-3 hover:border-none hover:bg-white hover:text-pink-300'>Pink</button>
        <button onClick={changeBgColorWhite} className='bg-white text-black rounded-lg m-4 px-6 py-3 hover:border-none hover:bg-black hover:text-white'>White</button>
        <button onClick={changeBgColorBlack} className='bg-black text-white rounded-lg m-4 px-6 py-3 hover:border-none hover:bg-white hover:text-black'>Black</button>
      </div>
    </div>
  );
}

export default App;
