import PeopleCard from '../PeopleCard';
import Typography from '../Typography';

import './style.css';

const CARD_DATA = [
  {
    src: 'https://picsum.photos/271/250',
    name: 'Gustavo Herwitz',
    domain: 'UI/UX Designer',
  },
  {
    src: 'https://picsum.photos/270/250',
    name: 'Gustavo Wrtgs',
    domain: 'Product Designer',
  },
  {
    src: 'https://picsum.photos/271/251',
    name: 'Detiour Herwitz',
    domain: 'Backend Designer',
  },
  {
    src: 'https://picsum.photos/270/251',
    name: 'Htruit Herwitz',
    domain: 'Test Designer',
  },
];

const TeamMember = () => {
  return (
    <div className='team-member'>
      <h2 className='text-gray section-title'>Team Member</h2>

      <Typography type='H2' className='section-description'>
        We Have&nbsp;
        <span className='text-orange'>Some Awesome</span>
        &nbsp;People
      </Typography>

      <div className='card-holder'>
        {CARD_DATA.map((member, i) => (
          <PeopleCard
            src={member.src}
            name={member.name}
            domain={member.domain}
            showSocialIcon={i === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamMember;
