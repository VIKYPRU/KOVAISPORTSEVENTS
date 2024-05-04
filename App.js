import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';

import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Clubs from './components/Clubs';
import Events from './components/Events';
import ContactUs from './components/ContactUs';
import AddClub from './components/AddClub';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      
      <Route path='/clubs' element={<Clubs/>}/>
      <Route path='/events' element={<Events/>}/>
      <Route path='/contactus' element={<ContactUs/>}/>
      <Route path='/addclub'element={<AddClub/>}/>
      </Routes>
      
     
    </div>
  );
}

export default App;
