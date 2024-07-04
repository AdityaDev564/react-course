import { useState, useCallback, useEffect, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // useRef Hook
  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      str += "0123456789";
    }
    if (characterAllowed) {
      str += "!@#$%^&*()_+={}[]";
    }
    for (let i = 1; i <= length; i++) {
      let charIndex = Math.floor(Math.random() * str.length);
      let char = str.charAt(charIndex);
      pass += char;
    }
    setPassword(pass);
  }, [length, numberAllowed, characterAllowed, setPassword]);

  const handleGeneratePassword = () => {
    setShowPassword(true);
    passwordGenerator();
  };

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, characterAllowed, passwordGenerator]);

  const handleCopyToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    // password.current?.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password)
  },[password])

  return (
    <div className='w-full max-w-lg mx-auto shadow-md rounded-xl px-4 py-3 my-8 text-orange-500 bg-gray-700'>
      <h1 className='text-white text-center mb-10 text-4xl'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 h-15'>
        <input
          type='text'
          value={showPassword ? password : ''}
          className='outline-none flex-grow py-3 px-3 rounded-md bg-gray-800 text-white baseline'
          placeholder='Password'
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={handleCopyToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-2 rounded-md baseline hover:bg-white hover:text-blue-700'
        >
          Copy
        </button>
        
      </div>
      <div className='flex text-sm gap-x-4'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1 px-3'>
          <input
            type='checkbox'
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            defaultChecked={characterAllowed}
            id='characterInput'
            onChange={() => {
              setCharacterAllowed((prev) => !prev);
            }}
          />
          <label htmlFor='characterInput'>Characters</label>
        </div>
      </div>
      <div className='flex justify-center mt-6'>
      <button
          onClick={handleGeneratePassword}
          className='outline-none bg-gray-300 text-gray-800 px-3 py-2 rounded-md baseline hover:bg-white hover:text-blue-700'
        >
          Generate Password
        </button>
      </div>
    </div>
  );
}

export default App;
