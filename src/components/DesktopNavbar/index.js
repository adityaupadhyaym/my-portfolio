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
            Home
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            About Me
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            Resume
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
            Services
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
           Portfolio
          </Typography>
        </li>

        <li>
          <Typography type='H5' className='menu-font text-black'>
           Pricing
          </Typography>
        </li>
        <li>
          <Typography type='H5' className='menu-font text-black'>
          Clients
          </Typography>
        </li>
        <li>
          <Typography type='H5' className='menu-font text-black'>
           Blog
          </Typography>
        </li>
        <li>
          <Typography type='H5' className='menu-font text-black'>
          Contact
          </Typography>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNavbar;
