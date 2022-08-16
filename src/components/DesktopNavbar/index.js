 import {Link} from 'react-router-dom';
import Typography from '../Typography';

import './style.css';

const DesktopNavbar = (props) => {
  const getClassNames = () =>
    `app-desktop-nav ${props.className ? props.className : ''}`;

  return (
    <nav className={getClassNames()}>
      <ul>
        <li>
          <Typography type='H5' className='menu-font text-black'>
          <Link to="/">Home</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
          <Link to='/about'>About Me</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
          <Link to='/resume'>Resume</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
          <Link to='/services'> Services</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
          <Link to='/portfolio'> Portfolio</Link>
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
          <Link to='/pricing'>Pricing</Link>
          </Typography>
        </li>
        <li>
          <Typography type='H5' className='menu-font text-black'>
          <Link to='/clients'>Clients</Link>
          </Typography>
        </li>
        <li>
          <Typography type='H5' className='menu-font text-black'>
          <Link to='/blog'>Blog</Link>
          </Typography>
        </li>
        <li>
          <Typography type='H5' className='menu-font text-black'>
          <Link to='/contact'>Contact</Link>
          </Typography>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
