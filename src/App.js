import GlobalStyle from '../src/styles/GlobalStyles';
import Todolist from './Components/Todolist';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from 'react';
import Preloader from './Components/Preloader';


function App() {
  const [loading, setLoading] = useState(false);
  useEffect(()=>{
    setLoading(false)
    setTimeout(()=>{
      setLoading(false)
    }, 5000)
  }, [])
  return (
    <div className="App">
      {loading ? <Preloader loading={loading}/> : 
      <>
      <GlobalStyle />
      <Todolist />
      </>
      }
    </div>
  );
}

export default App;
