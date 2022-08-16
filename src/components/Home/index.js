import Typography from '../Typography';
import AppImage from '../AppImage';
import PrimaryButton from '../PrimaryButton';
import './style.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-wrapper'>
        <div className='poster-home-text'>
        <Typography type='H1' className="static-text" >Hello... <br /> I'm <span className='span-text '> Emma</span> Grant<br/> A Professional  </Typography>
        <ul className='dynamic-text'>
          <li> <span> Youtuber </span></li>
          <li> <span>Develeoper </span></li>
          <li> <span>Freelancer </span></li>
          <li> <span> Designer </span></li>
        </ul>
        <PrimaryButton className='banner-btn-1' >View My Portfolio  <img src={`${process.env.PUBLIC_URL}/assets/images/icon/btn-1.png`} /></PrimaryButton>
      </div>
 <div className='home-poster-img'>
      <AppImage
        src={`${process.env.PUBLIC_URL}/assets/images/banner/02.png`}
        alt='Logo'
        className='poster-image-tag'
      />
      </div>
      </div>
     

    </div>
  )
};

export default Home;
