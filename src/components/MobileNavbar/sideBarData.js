// importing icons from react-icons 

import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as GrIcons from "react-icons/gr";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import * as FiIcons from "react-icons/fi";



 export const sideBarData = [
    {
      title: 'Home',
      icon: <AiIcons.AiOutlineHome />,
      path: '/',
      className: 'nav-text'

    },
    {
      title: 'About Me',
      icon: <AiIcons.AiOutlineUser />,
      path: '/',
      className: 'nav-text'

    },
    {
      title: 'Resume',
      icon: <RiIcons.RiFileListLine />,
      path: '/',
      className: 'nav-text'

    },
    {
      title: 'Services',
      icon: <GrIcons.GrServices />,
      path: '/',
      className: 'nav-text'

    },
    {
      title: 'Portfolio',
      icon: <CgIcons.CgWebsite />,
      path: '/',
      className: 'nav-text'

    },
    {
      title: 'Pricing',
      icon: <AiIcons.AiOutlineDollar />,
      path: '/',
      className: 'nav-text'

    },
    {
      title: 'Clients',
      icon: <GrIcons.GrGroup />,
      path: '/',
      className: 'nav-text'

    },
    {
      title: 'Blog',
      icon: <FaIcons.FaBlogger />,
      path: '/',
      className: 'nav-text'

    },
    {
      title: 'Contact',
      icon: <FiIcons.FiPhoneCall />,
      path: '/',
      className: 'nav-text'

    }

  ]