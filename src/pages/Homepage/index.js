
import Header from '../../components/Header';
import AboutMe from '../../components/AboutMe';
import Home from '../../components/Home';
import Portfolio from '../../components/Portfolio';
import Edu_Exp from '../../components/Edu_Exp';
import MyServices from '../../components/MyServices';
import MyPortfolio from '../../components/MyPortfolio';
import './style.css';


const App = () => {
  return (
    <div className='homepage'>
      <Header/>
      <Home/>
      <Portfolio/>
      <Edu_Exp/>
      <MyServices/>
      <MyPortfolio/>
     <AboutMe/>
    </div>
  );
};

export default App;
