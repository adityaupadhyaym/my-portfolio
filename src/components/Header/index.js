import { useState } from 'react';
import {   AiFillCloseCircle} from "react-icons/ai";
import {RiMenuFill} from "react-icons/ri";


import AppImage from '../AppImage';
import AppModal from '../AppModal';
import DesktopNavbar from '../DesktopNavbar';
import MobileNavbar from '../MobileNavbar';

import './style.css';

const Header = (props) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const onOpenModal = () => {
    setIsOpen(true);
  };

  const onCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className='app-header'>
        <div>
          <AppImage
            src={`${process.env.PUBLIC_URL}/assets/images/logo/logo.gif`}
            alt='Logo'
          />
        </div>

        <DesktopNavbar className='desktop-nav' />

        {/* <div className='logout' onClick={props.onLogout}>
          <AppImage
            src={`${process.env.PUBLIC_URL}/assets/images/logout.png`}
            alt='Logout'
          />
        </div> */}

        <div className='app-mobile-menu' onClick={onOpenModal}>
       <RiMenuFill style={{ fontSize: '40px'}} />
        </div>
      </header>

      <AppModal
        isOpen={modalIsOpen}
        onRequestClose={onCloseModal}
        contentLabel='Example Modal'
      >
        <header className='app-header'>
          <div>
            <AppImage
              src={`${process.env.PUBLIC_URL}/assets/images/logo/logo.gif`}
              alt='Logo'
            />
          </div>

          {/* <div className='logout' onClick={props.onLogout}>
            <AppImage
              src={`${process.env.PUBLIC_URL}/assets/images/logout.png`}
              alt='Logout'
            />
          </div> */}

          <div className='app-mobile-close' onClick={onCloseModal}>
         <AiFillCloseCircle style={{fontSize: '45px'}}/>
          </div>

        </header>

        <MobileNavbar />
      </AppModal>
    </>
  );
};

export default Header;
