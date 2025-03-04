import Backend from "./components/Backend";

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import DesignS1 from "./components/DesignS1";
import './components/style.css'

import Section1 from './components/Section1';
// import Login from "./components/Login";
// import DesignS2 from "./components/DesignS2";

let App = () => {
  return (
   <div>
    
    <BrowserRouter>    
    <Routes>
            <Route path='/' element={<DesignS1></DesignS1>}/>
            <Route path='/resume' element={<Section1></Section1>}/>
            <Route path='/tempalte' element={<Backend></Backend>}/>
    </Routes>
    </BrowserRouter>
    {/* <Login></Login> */}
    
    </div>
  )
}

export default App;
