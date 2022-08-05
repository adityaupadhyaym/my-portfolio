import Typography from '../Typography';
import './style.css';

const ContactCard = (props) => {
  const getClassNames = () =>
    ` ${props.className ? props.className : ''}`;

  return (
    <div className='contact-card'>
      <div className='contact-card-img-wrapper'>
        <img src={props.src} alt={props.alt} className={getClassNames()} />;
      </div>
      <div className='contact-card-text-wrapper'>
        <Typography type='H5' className="contact-card-title"> {props.title}</Typography>
        <Typography type='H5' className="contact-card-subTitle"> {props.subTitle}</Typography>
      </div>
    </div>
  )


};

export default ContactCard;
