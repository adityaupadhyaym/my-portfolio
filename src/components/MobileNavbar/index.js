import { AiOutlineHome, AiOutlineUser, AiOutlineDollar } from "react-icons/ai";
import { RiFileListLine } from "react-icons/ri";
import { GrServices, GrGroup } from "react-icons/gr";
import { CgWebsite } from "react-icons/cg";
import { FaBlogger } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";


import Typography from '../Typography';

import './style.css';

const MobileNavbar = () => {
  return (
    <nav className='app-mobile-nav'>
      <ul>
        <li>
          <AiOutlineHome style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
            Home
          </Typography>
        </li>

        <li>
          < AiOutlineUser style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
            About Me
          </Typography>
        </li>

        <li>
          < RiFileListLine style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
            Resume
          </Typography>
        </li>

        <li>
          < GrServices style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
            Services
          </Typography>
        </li>

        <li>
          < CgWebsite style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
            Portfolio
          </Typography>
        </li>

        <li>
          < AiOutlineDollar style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
            Pricing
          </Typography>
        </li>
        <li>
          <  GrGroup style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
            Clients
          </Typography>
        </li>
        <li>
          <  FaBlogger style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
            Blog
          </Typography>
        </li>
        <li>
          < FiPhoneCall style={{ fontSize: '25px' }} />
          <Typography type='H3' className='menu-font text-black'>
            Contact
          </Typography>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
