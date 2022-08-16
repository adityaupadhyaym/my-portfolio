import Category from '../Category';
import Typography from '../Typography';
import Edu_Exp_Card from '../Edu-Exp_Card';


import './style.css';
import PrimaryButton from '../PrimaryButton';

const EduExp = () => {
  return (
    <div className='edu_exp'>
      <div className="edu-exp-heading-wrapper">
<Category text = "Education  &amp; Experience"/>
<Typography type="H2" className='heading-text edu-exp-first-text'> I Have Completed My Master <span className='span-text'>Degree &amp; Experience</span> With Leading Companies </Typography>

</div>
<div className='edu-exp-card-wrapper'>
  <div>
<Edu_Exp_Card 
 src={`${process.env.PUBLIC_URL}/assets/images/exp/01.png`}
place = "Allahabad University"
year ="2014-2015"
title = "Master Degree Visual Arts &amp; Design"
subTitle = "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
/>

<Edu_Exp_Card 
 src={`${process.env.PUBLIC_URL}/assets/images/exp/02.png`}
place = "Allahabad University"
year ="2014-2015"
title = "Master Degree Visual Arts &amp; Design"
subTitle = "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
/>
</div>

<div>
<Edu_Exp_Card 
 src={`${process.env.PUBLIC_URL}/assets/images/exp/03.png`}
place = "Allahabad University"
year ="2014-2015"
title = "Master Degree Visual Arts &amp; Design"
subTitle = "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
/>

<Edu_Exp_Card 
 src={`${process.env.PUBLIC_URL}/assets/images/exp/04.png`}
place = "Allahabad University"
year ="2014-2015"
title = "Master Degree Visual Arts &amp; Design"
subTitle = "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
/>
</div>
<div>
<Edu_Exp_Card 
 src={`${process.env.PUBLIC_URL}/assets/images/exp/05.png`}
place = "Allahabad University"
year ="2014-2015"
title = "Master Degree Visual Arts &amp; Design"
subTitle = "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
/>

<Edu_Exp_Card 
 src={`${process.env.PUBLIC_URL}/assets/images/exp/06.png`}
place = "Allahabad University"
year ="2014-2015"
title = "Master Degree Visual Arts &amp; Design"
subTitle = "Profesiona Qrovide Access Whating Exceptional Vortals Without Crossun Dynamically eenable extensible information"
/>
</div>
</div>

<PrimaryButton
        className="edu_exp_btn"
      >
        Download My CV
        <img src={`${process.env.PUBLIC_URL}/assets/images/icon/btn-1.png`} />
      </PrimaryButton>




    </div>
  )
};

export default EduExp;
