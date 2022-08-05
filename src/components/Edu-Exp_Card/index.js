import Typography from '../Typography';
import './style.css';

const Edu_Exp_Card = (props) => {

  return (
    <div className='edu_exp_card'>
      <div className=''>
        <div className='edu_exp_top_wrapper'>
          <div> 
            <img src={props.src} alt={props.alt}/>
            <div className='edu_exp_place'> {props.place}</div>
          </div>
          <div className='edu_exp_year_wrapper'>
            <div className='edu_exp_year'> {props.year}</div>
          </div>
        </div>
        <div>
          <Typography className="edu_exp_title"> {props.title}</Typography>
          <Typography className="edu_exp_subTitle" > {props.subTitle}</Typography>
        </div>
      </div>


    </div>
  )
};

export default Edu_Exp_Card;
