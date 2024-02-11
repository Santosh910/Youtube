
import './App.css';
import {Routes,Route} from 'react-router-dom'

import Homepage from './component/Homepage';
import Sign from './component/Sign';
import Video from './component/Video';
import Register from './component/Register';
import Login from './component/Login';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route exact path='/sign' element={<Sign/>}/>
        <Route exact path='/login' element={<Login/>}/>
        <Route exact path='/video' element={<Video/>}/>
        <Route exact path='/register' element={<Register/>}/>
      </Routes>
    </div>
  );
}

export default App;
