import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';


import Header from '../../components/Header';
import Home from '../../components/Home';
import Portfolio from '../../components/Portfolio';
import EduExp from '../../components/EduExp';
import MyServices from '../../components/MyServices';
import MyPortfolio from '../../components/MyPortfolio';
import Pricing from '../../components/Pricing';
import Testimonial from '../../components/Testimonial';
import Blog from '../../components/Blog';
import HireMe from '../../components/HireMe';
import Footer from '../../components/Footer';
import './style.css';


const App = () => {
  return (
    <div className='homepage'>
      
  

     <BrowserRouter>
     <Header/>
     <Routes>
     <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<Portfolio/>}/>
      <Route path='/resume' element={<EduExp/>}/>
      <Route path='/services' element={<MyServices/>}/>
      <Route path='/portfolio' element={<MyPortfolio/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/clients' element={<Testimonial/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<HireMe/>}/>
    
     
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
};

export default App;
