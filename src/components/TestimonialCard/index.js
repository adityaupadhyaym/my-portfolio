import * as AiIcons from "react-icons/ai";
import Typography from '../Typography';
import './style.css';

const TestimonialCard = (props) => {
  return (
    <div className='testimonial-card'>
      <div className='client-details-wrapper'>
        <div className='client-details'>
          <div> <img src={props.clientImgSrc} alt={props.alt} /> </div>

          <div>
            <Typography type="H5" >{props.clientName}</Typography>
            <Typography type="H6" >{props.clientDesignation}</Typography>
          </div>
        </div>
        <div>
          <img src={props.clientLogoSrc} />
        </div>
      </div>

      <Typography className="clients-review-para">{props.clientReview}</Typography>
      <div className='clientStars'>
        <ul>
          <AiIcons.AiOutlineStar style={{"color":"yellow"}} />
          <AiIcons.AiOutlineStar style={{"color":"yellow"}} />
          <AiIcons.AiOutlineStar style={{"color":"yellow"}}/>
          <AiIcons.AiOutlineStar style={{"color":"yellow"}}/>
          <AiIcons.AiOutlineStar style={{"color":"yellow"}}/>

        </ul>
        <img src={`${process.env.PUBLIC_URL}/assets/images/testimonial/logo/04.png`} />
      </div>
    </div>
  )
};

export default TestimonialCard;
