import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";


import PrimaryButton from '../PrimaryButton';
import Category from '../Category';
import Typography from '../Typography';

import './style.css';

const MyPortfolio = () => {
  return (
    <div className='myPortfolio'>
      <div className='my-portfolio-content' >
        <Category text="My Portfolio" />
        <Typography type="H2" className="heading-text">We Have Done Lot's of <span className="span-text">My Best Works</span> Lets Check Some of Them </Typography>
      </div>
      <div className='my-portfolio-buttons' >
        <ul>
          <li>
            <PrimaryButton
              className="my-portfolio-btn1"
            >
            <AiIcons.AiFillStar/>
              &nbsp;  All Gallery
            </PrimaryButton>
          </li>
          <li>
            <PrimaryButton
              className="my-portfolio-btn2"
            >
               <GrIcons.GrImage/>
              &nbsp;  Image Gallery
            </PrimaryButton>
          </li>
          <li>
            <PrimaryButton
              className="my-portfolio-btn2"
            >
             <AiIcons.AiFillPlayCircle/>
              &nbsp;  Video Gallery
            </PrimaryButton>
          </li>
        </ul>
      </div>



    </div>
  )
};

export default MyPortfolio;
