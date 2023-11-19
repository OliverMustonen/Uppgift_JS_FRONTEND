import 'bootstrap/dist/css/bootstrap.css';
import './App.css'
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Contact from './components/Contact/contact';
import Footer from './components/Footer/footer';
import Home from './components/Home/Home';



function App() {
  
  return (
    <div className='wrapper'>
      
        <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/contact" element={<Contact/>}/>
          </Routes>
          
        <Footer />
    </div>
  )
}

export default App
