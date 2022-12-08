import './App.css';
import { useState } from 'react'
import Header from './components/Header';
import Buttons from './components/Buttons';
function App() {
  const [result, setResult] = useState("")
  return (
    <>
      <div className='calculator'>
        <Header />
        <form>
          <input type="text" value={result} className='user-input' />  
        </form>
        <Buttons setResult={setResult} result={result} />
      </div>
    </>
  );
}

export default App;
