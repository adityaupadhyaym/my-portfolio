import * as AiIcons from "react-icons/ai";
import * as TiIcons from "react-icons/ti";


import AppImage from '../AppImage';
import Typography from '../Typography';
import IconButton from '../IconButton';

import './style.css';

const Footer = () => {
  const iconStyle = {
     color: "rgb(255, 65, 129)", 
     fontSize: "16px" ,
     width : "80%",
     height : "80%",
     backGroundColor : "white"
    }
  return (
    <div className='footer-section'>
      <div className="footer-logo-wrapper">
      <AppImage
        src={`${process.env.PUBLIC_URL}/assets/images/logo/footer-logo.png`}
        alt='Logo'
        className='footer-logo'
      />
      </div>
      <Typography className="footer-text" >
        © 2019. Maxino Designed By LabArtisan
      </Typography>
      <div className='footer-icon-holder'>
        <IconButton className="footer-icon">
          <AiIcons.AiOutlineTwitter style={iconStyle}/>
        </IconButton>

        <IconButton  className="footer-icon">
          <TiIcons.TiSocialVimeo style={iconStyle}/>
        </IconButton>

        <IconButton  className="footer-icon">
          <TiIcons.TiRss style={iconStyle}/>
        </IconButton>


        <IconButton  className="footer-icon">
          <AiIcons.AiOutlineDribbble style={iconStyle}/>
        </IconButton>

        <IconButton  className="footer-icon">
          <AiIcons.AiFillInstagram style={iconStyle}/>
        </IconButton>
     
      
      </div>

    </div>
  )
};

export default Footer;
