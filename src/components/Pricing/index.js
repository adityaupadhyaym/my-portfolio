import * as AiIcons from "react-icons/ai";

import Category from '../Category';
import Typography from '../Typography';
import PrimaryButton from '../PrimaryButton';

import './style.css';

const Pricing = () => {
  return (
    <div className='pricing-section'>
      <Category text='Pricing Plan ' />
      <Typography type='H2' className='heading-text'> No Hidden Charge,Choose Your <span className='span-text'>Best Pricing Plan</span> </Typography>

      <div className='pricing-card-wrapper'>
        <div className='pricing-card-1'>
          <div className="pricing-border"></div>
          <Typography type='H3' className='pricing-plan-type-utils '> Silver Plan</Typography>
          <Typography  className='pricing-plan-description-utils '> Holisticly initiate functionalized information without viral imperatives. </Typography>
          <Typography type='H5'  className='pricing-usd-utils '> Usd</Typography>
          <Typography type='H3'  className='pricing-price-utils '> $40 </Typography>
          <Typography type="H3"  className='pricing-rate-utils '> /Onetime </Typography>
          <Typography type="H3"  className='pricing-plan-limit-utils ' > For Onetime Services only </Typography>

          <ul className="pricing-lists">
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>4  Hosting Attendance</span> </li>
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>9 Email Marketing</span> </li>
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>3 Data Bases</span> </li>
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>2 Design Pack</span> </li>
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>3 Website Layouts</span> </li>
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>5 Header Style</span> </li>

          </ul>
          <PrimaryButton className='pricing-btn' > Choose Plan &nbsp; <AiIcons.AiOutlineDoubleRight /> </PrimaryButton>
        </div>

        <div className='pricing-card-2'>
          <div className="pricing-border"></div>
          <Typography type='H3' className='pricing-plan-type-utils '> Gold Plan</Typography>
          <Typography  className='pricing-plan-description-utils '> Holisticly initiate functionalized information without viral imperatives. </Typography>
          <Typography type='H5'  className='pricing-usd-utils '> Usd</Typography>
          <Typography type='H3'  className='pricing-price-utils '> $70 </Typography>
          <Typography type="H3"  className='pricing-rate-utils '> /Onetime </Typography>
          <Typography type="H3"  className='pricing-plan-limit-utils ' > For Onetime Services only </Typography>

          <ul className="pricing-lists">
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>4  Hosting Attendance</span> </li>
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>9 Email Marketing</span> </li>
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>3 Data Bases</span> </li>
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>2 Design Pack</span> </li>
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>3 Website Layouts</span> </li>
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>5 Header Style</span> </li>

          </ul>
          <PrimaryButton className='pricing-btn' > Choose Plan &nbsp; <AiIcons.AiOutlineDoubleRight /> </PrimaryButton>
        </div>

        <div className='pricing-card-3'>
          <div className="pricing-border"></div>
          <Typography type='H3' className='pricing-plan-type-utils '> Platinum Plan</Typography>
          <Typography  className='pricing-plan-description-utils '> Holisticly initiate functionalized information without viral imperatives. </Typography>
          <Typography type='H5'  className='pricing-usd-utils '> Usd</Typography>
          <Typography type='H3'  className='pricing-price-utils '> $100 </Typography>
          <Typography type="H3"  className='pricing-rate-utils '> /Onetime </Typography>
          <Typography type="H3"  className='pricing-plan-limit-utils ' > For Onetime Services only </Typography>

          <ul className="pricing-lists">
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>4  Hosting Attendance</span> </li>
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>9 Email Marketing</span> </li>
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>3 Data Bases</span> </li>
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>2 Design Pack</span> </li>
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>3 Website Layouts</span> </li>
            <li><span className="pricing-check"> <AiIcons.AiOutlineCheck /> </span> &nbsp; <span>5 Header Style</span> </li>

          </ul>
          <PrimaryButton className='pricing-btn' > Choose Plan &nbsp; <AiIcons.AiOutlineDoubleRight /> </PrimaryButton>
        </div>




      </div>

    </div>
  )
};

export default Pricing;
