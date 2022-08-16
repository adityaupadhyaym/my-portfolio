
import PrimaryButton from '../PrimaryButton';
import { FiChevronsRight } from 'react-icons/fi';
import { AiOutlineShareAlt, AiOutlineDoubleRight } from 'react-icons/ai';
import { RiMessage2Line } from 'react-icons/ri';
import { AiOutlineHeart } from 'react-icons/ai';
import SocialMedia from '../SocialMedia';

import './style.css';

const ReadMoreBlog = () => {
    return (
        <div className='read-more-blog'>
            <div className='read-more-left'>
                <ul>
                    <li>
                        <AiOutlineShareAlt />
                        <span>04</span>
                        <SocialMedia />
                    </li>
                    <li>
                        <RiMessage2Line />
                        <span>15</span>
                    </li>
                    <li>
                        <AiOutlineHeart />
                        <span>12</span>
                    </li>
                </ul>
            </div>
            <div className='read-more-right'>
                <div>
                    <p>Admin : <span className='span-text'>Emma Grant</span></p>
                    <p>Date : <span className='span-text'>14 April 2018</span></p>
                </div>
                <h3>
                    Ectain World Strain Blog Tegc Actuaze Wide World Strateic
                </h3>
                <p>Qnteate Supple Chan Though Marke Poston Bestng Practces Chain Throuh Marke Postonn Bestn Practces eractve Fashion Fashion Economically And Sound Qources For</p>


                <PrimaryButton className='' > View All Blog &nbsp; <AiOutlineDoubleRight /> </PrimaryButton>
            </div>
        </div>
    )
}

export default ReadMoreBlog;