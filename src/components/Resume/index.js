import AppImage from '../AppImage';
import Typography from '../Typography';
import PrimaryButton from '../PrimaryButton';
import PosterSocialLinks from '../PosterSocialLinks';

import './style.css';

const Poster = () => {
  return (
    <section className='poster-section bg-orange-v2'>
      <div className='poster-image'>
        <AppImage
          src={`${process.env.PUBLIC_URL}/assets/images/poster.png`}
          alt='Logo'
          className='poster-image-tag'
        />
      </div>
      <div className='poster-text'>
        <Typography type='H1' className='text-dark poster-title'>
          We Are The Best <span className='text-orange'>Digital Agency</span>
          &nbsp;for business
        </Typography>

        <Typography type='H4' className='text-gray poster-subtitle'>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit...
        </Typography>

        <PrimaryButton>Contact Us</PrimaryButton>
      </div>

      <PosterSocialLinks className='poster-social-icons' />
    </section>
  );
};

export default Poster;
