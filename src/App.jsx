import {  Route , Routes } from 'react-router-dom'
import Nav from './Nav.jsx'
import Home from './home/Home.jsx'
import Foot from './footer.jsx';
import Prodact from './prodact/prodac.jsx';
import Propage from './prodactpage/propage.jsx';
import Ps from './prod.js';
import Contact from './contact.jsx';

function App() {
  return (
    <div  >
      <Nav/>
            <Routes>
                <Route index element={<Home />}/>
                <Route path='/' Component={Home}/>
                <Route path='/product' Component={Prodact}/>
                <Route path='/procucts' Component={Ps}/>
                <Route path='/Contact' Component={Contact}/>
                <Route path='/product/:productId' Component={Propage}/>
            </Routes>
      <Foot/>
    </div>
  )
}

export default App;





