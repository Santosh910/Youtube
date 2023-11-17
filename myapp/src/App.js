
import './App.css';
import {Routes,Route} from 'react-router-dom'

import Homepage from './component/Homepage';
import Sign from './component/Sign';
import Video from './component/Video';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route exact path='/sign' element={<Sign/>}/>
        <Route exact path='/video' element={<Video/>}/>
      </Routes>
    </div>
  );
}

export default App;
