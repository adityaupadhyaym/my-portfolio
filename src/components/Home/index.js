import Typography from '../Typography';
import AppImage from '../AppImage';
import PrimaryButton from '../PrimaryButton';
import ContactCard from '../ContactCard';
import './style.css';

const Home = () => {
  return (
    <div className='home'>
      <div className='home-wrapper'>
        <Typography type='H1' className="static-text" >Hello... <br /> I'm Aditya Upadhyay A Professional  </Typography>
        <ul className='dynamic-text'>
          <li> <span> Youtuber </span></li>
          <li> <span>Develeoper </span></li>
          <li> <span>Freelancer </span></li>
          <li> <span> Designer </span></li>
        </ul>
      </div>
      <PrimaryButton className='banner-btn-1' >View My Portfolio  <img src={`${process.env.PUBLIC_URL}/assets/images/icon/btn-1.png`} /></PrimaryButton>
      <AppImage
        src={`${process.env.PUBLIC_URL}/assets/images/banner/02.png`}
        alt='Logo'
        className='poster-image-tag'
      />
      <ContactCard
        src={`${process.env.PUBLIC_URL}/assets/images/icon/01.png`}
        alt="poster "
        title="Give us a call"
        subTitle="9565671684"
      >
      </ContactCard>
      <ContactCard
        src={`${process.env.PUBLIC_URL}/assets/images/icon/02.png`}
        alt="poster "
        title="Send us a Message"
        subTitle="maharajadityaupadhyay@gmail.com"
      >
      </ContactCard>
      <ContactCard
        src={`${process.env.PUBLIC_URL}/assets/images/icon/03.png`}
        alt="poster "
        title="Visit Our Location"
        subTitle="Gurugram Haryana India"
      >
      </ContactCard>




    </div>
  )
};

export default Home;
