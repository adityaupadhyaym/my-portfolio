
import Header from '../../components/Header';
import AboutMe from '../../components/AboutMe';
import Home from '../../components/Home';

import './style.css';

const App = () => {
  return (
    <div className='homepage'>
      <Header/>
      <Home/>
     <AboutMe/>
    </div>
  );
};

export default App;
