import Category from '../Category';
import GoogleMap from '../GoogleMap';
import Typography from '../Typography';
import ContactCard from '../ContactCard';
import BasicForm from '../../pages/BasicForm';

import './style.css';


const HireMe = () => {
  return (
    <div className='hire-section'>
      <Category text="Hire Me" />
      <Typography type="H2" className="heading-text">I Am Available For Your Next Awesome Project  <span className='span-text'> Then Hire Me!</span> </Typography>

      <GoogleMap />
      <div className='hire-contact-wrapper'>
        <div>
          <ContactCard
            src={`${process.env.PUBLIC_URL}/assets/images/icon/01.png`}
            alt="poster "
            title="Give us a call"
            subTitle="9565671684"
          />
        </div>

        <div className='hire-contact-email'>
          <ContactCard
            src={`${process.env.PUBLIC_URL}/assets/images/icon/02.png`}
            alt="poster "
            title="Send us a Message"
            subTitle="maharajadityaupadhyay@gmail.com"
          />
        </div>

        <div>
          <ContactCard
            src={`${process.env.PUBLIC_URL}/assets/images/icon/03.png`}
            alt="poster "
            title="Visit Our Location"
            subTitle="Gurugram Haryana India"
          />
        </div>
      </div>

      <BasicForm />
    </div>
  )
};

export default HireMe;
