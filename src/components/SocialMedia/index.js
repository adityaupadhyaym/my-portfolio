import { FiFacebook } from 'react-icons/fi';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import './style.css'

const SocialMedia = () => {
    return (
        <div className='social-media'>
            <ul className='social-media-list'>
                <li className='facebook'><FiFacebook /></li>
                <li className='twitter'><AiOutlineTwitter /></li>
                <li className='linkedin'><AiOutlineLinkedin /></li>
            </ul>
        </div>
    )
}

export default SocialMedia;