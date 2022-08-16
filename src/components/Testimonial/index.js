import Typography from '../Typography';
import Category from '../Category';
import TestimonialCard from '../TestimonialCard';
import './style.css';

const Testimonial = () => {
  return (
    <div className='testimonial'>
      <Category text = "Testimonial"/>
  <Typography type="H3" className=" heading-text "> Welcome to My Portfolio</Typography>
      <Typography type="H2" className="heading-text" > Clientâ€™s Feedback Latest Reviews <span className='span-text'> From my Clients </span> </Typography>

<div className='testimonial-card-wrapper'>
<TestimonialCard
clientImgSrc={`${process.env.PUBLIC_URL}/assets/images/testimonial/02.png`}
alt = "clients-img"
clientName="Emma Grant"
clientDesignation = "Founder"
clientLogoSrc = {`${process.env.PUBLIC_URL}/assets/images/testimonial/logo/03.png`}
clientReview="Cabiorve Leveraer Atherin Anding That Qua Bwdh Thoun Covaen Theme Any Vaue Coor Dinaterg Cabiorve Leverag Athern And That Qualit Bwdth Throur Covaen Theme Valueig Cooring Dnate Caborve Leveraer Ather And Bwdh Thoun Covaen Theme Anying Vauery Bwdth Throuing Covaent Theme"

/>
<TestimonialCard
clientImgSrc={`${process.env.PUBLIC_URL}/assets/images/testimonial/02.png`}
alt = "clients-img"
clientName="Emma Grant"
clientDesignation = "Founder"
clientLogoSrc = {`${process.env.PUBLIC_URL}/assets/images/testimonial/logo/03.png`}
clientReview="Cabiorve Leveraer Atherin Anding That Qua Bwdh Thoun Covaen Theme Any Vaue Coor Dinaterg Cabiorve Leverag Athern And That Qualit Bwdth Throur Covaen Theme Valueig Cooring Dnate Caborve Leveraer Ather And Bwdh Thoun Covaen Theme Anying Vauery Bwdth Throuing Covaent Theme"

/>
<TestimonialCard
clientImgSrc={`${process.env.PUBLIC_URL}/assets/images/testimonial/02.png`}
alt = "clients-img"
clientName="Emma Grant"
clientDesignation = "Founder"
clientLogoSrc = {`${process.env.PUBLIC_URL}/assets/images/testimonial/logo/03.png`}
clientReview="Cabiorve Leveraer Atherin Anding That Qua Bwdh Thoun Covaen Theme Any Vaue Coor Dinaterg Cabiorve Leverag Athern And That Qualit Bwdth Throur Covaen Theme Valueig Cooring Dnate Caborve Leveraer Ather And Bwdh Thoun Covaen Theme Anying Vauery Bwdth Throuing Covaent Theme"

/>
</div>

    </div>
  )
};

export default Testimonial;
