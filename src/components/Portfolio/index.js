import AppImage from '../AppImage';
import Category from '../Category';
import PrimaryButton from '../PrimaryButton';
import Typography from '../Typography';
import ContactCard from '../ContactCard';


import './style.css';

const Portfolio = () => {
  return (
    <div className='aboutMe'>
      <div className='about-contact-wrapper'>
        <ContactCard
          src={`${process.env.PUBLIC_URL}/assets/images/icon/01.png`}
          alt="poster "
          title="Give us a call"
          subTitle="9565671684"
        />

        <ContactCard
          src={`${process.env.PUBLIC_URL}/assets/images/icon/02.png`}
          alt="poster "
          title="Send us a Message"
          subTitle="maharajadityaupadhyay@gmail.com"
        />

        <ContactCard
          src={`${process.env.PUBLIC_URL}/assets/images/icon/03.png`}
          alt="poster "
          title="Visit Our Location"
          subTitle="Gurugram Haryana India"
        />

      </div>


      <div className='portfolio'>
      <div className='portfolio-left-section'>
        <Typography type="H3" className=" heading-text "> Welcome to My Portfolio</Typography>
        <Typography type="H2" className="heading-text" > Why <span className='span-text'> 3650 People </span> Love us Beleive My Awesome Services</Typography>
        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/about/01.png`}
        />

      </div>
      <div className='portfolio-right-section'>
        <Category text="Hello World " />

        <Typography type="H2" className='heading-text'> I am <span className='span-text' > Aditya Upadhyay</span> UX Designer From Uttar Pradesh India</Typography>
        <Typography className="portfolio-para"> Energisticaly Simplify Toping Line Solutions without Leveraged Resutrs are an Colabrerse Channels Throughe Qrthogonal e-Commerce Energistcaly Growing Practve Anding Platform Niches After Paralel Technolog

        </Typography>

        <ul className='info-details'>
          <li>
            <div className='name'> <Typography className="port-typo"> Name</Typography></div>
            <div className='info' > <Typography className="port-typo"> : &nbsp; &nbsp; Aditya Upadhyay </Typography></div>
          </li>
          <li>
            <div className='name'> <Typography className="port-typo"> Date of Birth </Typography></div>
            <div className='info' > <Typography className="port-typo"> : &nbsp; &nbsp; 10-09-2001 </Typography></div>
          </li>
          <li>
            <div className='name'> <Typography className="port-typo"> Email</Typography></div>
            <div className='info' > <Typography className="port-typo"> : &nbsp; &nbsp; adityaupadhyay@gmail </Typography></div>
          </li>
          <li>
            <div className='name'> <Typography className="port-typo"> Phone</Typography></div>
            <div className='info' > <Typography className="port-typo"> : &nbsp; &nbsp; 9565671684 </Typography></div>
          </li>
          <li>
            <div className='name'> <Typography className="port-typo"> Fax </Typography></div>
            <div className='info' > <Typography className="port-typo"> : &nbsp; &nbsp; 5545-5545-44 </Typography></div>
          </li>
          <li>
            <div className='name'> <Typography className="port-typo"> Nationality</Typography></div>
            <div className='info' > <Typography className="port-typo"> : &nbsp; &nbsp; Indian </Typography></div>
          </li>
          <li>
            <div className='name'> <Typography className="port-typo">Address</Typography></div>
            <div className='info' > <Typography className="port-typo"> : &nbsp; &nbsp; Uttar Pradesh India </Typography></div>
          </li>

        </ul>

        <PrimaryButton
          className="portfolio-btn1"
        >
          Download Resume
          <img src={`${process.env.PUBLIC_URL}/assets/images/icon/btn-1.png`} />
        </PrimaryButton>
      </div>

      {/* <div className='sponsor-img-wrapper'>
        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/sponsor/01.png`}
          alt="sponsor-img"
          className='sponsor-img'
        />
        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/sponsor/02.png`}
          alt="sponsor-img"
          className='sponsor-img'
        />
        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/sponsor/03.png`}
          alt="sponsor-img"
          className='sponsor-img'
        />
        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/sponsor/04.png`}
          alt="sponsor-img"
          className='sponsor-img'
        />
        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/sponsor/05.png`}
          alt="sponsor-img"
          className='sponsor-img'
        />
        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/sponsor/06.png`}
          alt="sponsor-img"
          className='sponsor-img'
        />





      </div> */}


</div>
    </div>
  )
};

export default Portfolio;
