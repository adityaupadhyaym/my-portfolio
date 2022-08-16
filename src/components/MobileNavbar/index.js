// import {Link} from 'react-router-dom';
// import { sideBarData } from './sideBarData';
import {Link} from 'react-router-dom';
import Typography from '../Typography';

import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as GrIcons from "react-icons/gr";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";



import './style.css';

const MobileNavbar = () => {
 

  return (
    <nav className='app-mobile-nav'>
      <ul>
        {/* {sideBarData.map((item, index) => {
          
          return (
            <li key={index} className={item.className} >
              <Link to={item.path}> {item.icon} <span > {item.title}</span>
              </Link>
            </li>
          )
        })} */}

        <li>
          <AiIcons.AiOutlineHome style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
            <Link to="/">Home</Link>
          </Typography>
        </li>

        <li>
          < AiIcons.AiOutlineUser style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
          <Link to='/about'>About Me</Link>
          </Typography>
        </li>

        <li>
          < RiIcons.RiFileListLine style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
          <Link to='/resume'>Resume</Link>
          </Typography>
        </li>

        <li>
          < GrIcons.GrServices style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
     
            <Link to='/services'> Services</Link>
       
          </Typography>
        </li>

        <li>
          < CgIcons.CgWebsite style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
         
            <Link to='/portfolio'> Portfolio</Link>
          </Typography>
        </li>

        <li>
          < AiIcons.AiOutlineDollar style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
          <Link to='/pricing'>Pricing</Link>
          </Typography>
        </li>
        <li>
          < GrIcons.GrGroup style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
          <Link to='/clients'>Clients</Link>
          </Typography>
        </li>
        <li>
          < FaIcons.FaBlogger style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
          <Link to='/blog'>Blog</Link>
          </Typography>
        </li>
        <li>
          < FiIcons.FiPhoneCall style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
          <Link to='/contact'>Contact</Link>
          </Typography>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
