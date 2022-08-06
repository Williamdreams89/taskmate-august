import GlobalStyle from '../src/styles/GlobalStyles';
import Todolist from './Components/Todolist';
import 'bootstrap/dist/css/bootstrap.min.css'


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Todolist />
    </div>
  );
}

export default App;
