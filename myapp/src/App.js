
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Header from './component/Header';
import Homepage from './component/Homepage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
      </Routes>
    </div>
  );
}

export default App;
