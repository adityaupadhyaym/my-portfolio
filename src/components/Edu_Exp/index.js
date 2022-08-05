import Category from '../Category';
import Typography from '../Typography';
import Edu_Exp_Card from '../Edu-Exp_Card';


import './style.css';
import PrimaryButton from '../PrimaryButton';

const Edu_Exp = () => {
  return (
    <div className='edu_exp'>
<Category text = "Education  &amp; Experience"/>
<Typography type="H2" className='heading-text edu-exp-first-text'> I Have Completed My Master <span className='span-text'>Degree &amp; Experience</span> With Leading Companies </Typography>

<Edu_Exp_Card 
 src={`${process.env.PUBLIC_URL}/assets/images/exp/01.png`}
place = "Allahabad University"
year ="2014-2015"
title = "Master Degree Visual Arts &amp; Design"
subTitle = "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
/>

<Edu_Exp_Card 
 src={`${process.env.PUBLIC_URL}/assets/images/exp/01.png`}
place = "Allahabad University"
year ="2014-2015"
title = "Master Degree Visual Arts &amp; Design"
subTitle = "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
/>

<Edu_Exp_Card 
 src={`${process.env.PUBLIC_URL}/assets/images/exp/01.png`}
place = "Allahabad University"
year ="2014-2015"
title = "Master Degree Visual Arts &amp; Design"
subTitle = "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
/>

<Edu_Exp_Card 
 src={`${process.env.PUBLIC_URL}/assets/images/exp/01.png`}
place = "Allahabad University"
year ="2014-2015"
title = "Master Degree Visual Arts &amp; Design"
subTitle = "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
/>

<Edu_Exp_Card 
 src={`${process.env.PUBLIC_URL}/assets/images/exp/01.png`}
place = "Allahabad University"
year ="2014-2015"
title = "Master Degree Visual Arts &amp; Design"
subTitle = "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
/>

<Edu_Exp_Card 
 src={`${process.env.PUBLIC_URL}/assets/images/exp/01.png`}
place = "Allahabad University"
year ="2014-2015"
title = "Master Degree Visual Arts &amp; Design"
subTitle = "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
/>

<PrimaryButton
        className="edu_exp_btn"
      >
        Download My CV
        <img src={`${process.env.PUBLIC_URL}/assets/images/icon/btn-1.png`} />
      </PrimaryButton>




    </div>
  )
};

export default Edu_Exp;
