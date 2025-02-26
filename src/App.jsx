

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'; 
import Home from './files/Home';
import Instapege from './files/Instapage';


function App() {


  return (
    <div>



     
<BrowserRouter>
<Routes>
<Route path='/' element={<Home />} />
<Route path='/Instapage' element={<Instapege />} />

</Routes>
</BrowserRouter>
      

     
    </div>
  )
}

export default App
