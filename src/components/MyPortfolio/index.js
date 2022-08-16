import { useState } from "react";


import * as AiIcons from "react-icons/ai";
import * as GrIcons from "react-icons/gr";


import PrimaryButton from '../PrimaryButton';
import Category from '../Category';
import Typography from '../Typography';

import './style.css';

const MyPortfolio = () => {
  const [typeHandler, setTypeHandler] = useState("category");
  const [handler, setHandler] = useState("All");

  const GALARY_DATA = [

    {
      src: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/01.jpg',
      type: "img",
      category: "All"
    },
    {
      src: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/02.jpg',
      type: "img",
      category: "All"
    },
    {
      src: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/03.jpg',
      type: "video",
      category: "All",
      poster: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/05.jpg'
    },
    {
      src: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/04.jpg',
      type: "img",
      category: "All"
    },
    {
      src: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/06.jpg',
      type: "img",
      category: "All"
    },
    {
      src: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/05.jpg',
      type: "video",
      category: "All",
      poster: 'http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/05.jpg'
    }

  ]


  const gallaryHandler = () => {
    {setHandler("All")};
    {setTypeHandler("category")} ;
  
  }
  const imgHandler = () => {
    {setHandler("img")};
    {setTypeHandler("type")} 

  }
  const videoHandler = () => {
    {setHandler("video")};
    {setTypeHandler("type")} 
    }


  return (
    <div className='myPortfolio'>
      <div className="my-portfolio-header">
      <div className='my-portfolio-content' >
        <Category text="My Portfolio" />
        <Typography type="H2" className="heading-text">We Have Done Lot's of <span className="span-text">My Best Works</span> Lets Check Some of Them </Typography>
      </div>
      <div className='my-portfolio-buttons' >
        <ul>
          <li>
            <PrimaryButton
              onClick={gallaryHandler}
              className = {handler !== 'All' ? 'portfolio-btn-bg-1' : 'portfolio-btn-bg-2'}
            >
              <AiIcons.AiFillStar />
              &nbsp;  All Gallery
            </PrimaryButton>
          </li>
          <li>
            <PrimaryButton
                  className = {handler !== 'img' ? 'portfolio-btn-bg-1' : 'portfolio-btn-bg-2'}
              onClick={imgHandler}
              
            >
              <GrIcons.GrImage />
              &nbsp;  Image Gallery
            </PrimaryButton>
          </li>
          <li>
            <PrimaryButton
                 className = {handler !== 'video' ? 'portfolio-btn-bg-1' : 'portfolio-btn-bg-2'}
              onClick={videoHandler}
            >
              <AiIcons.AiFillPlayCircle />
              &nbsp;  Video Gallery
            </PrimaryButton>
          </li>
        </ul>
      </div>
      </div>
      <div className="gallary-data">
        
      
{/* {GALARY_DATA.filter((item)=> item[typeHandler] === handler).map((item) => (
     item.type === "video" ? (
    <div className="myPortfolio-img">
      <img src={item.src} alt="img"/>
    </div> ) :
    <div className="myPortfolioVideo"> 
      <video src={item.src}></video>
    </div>
  
)
)} */}
{
          GALARY_DATA.filter((item)=> item[typeHandler] === handler).map((item, i) => (
                    item.type === 'video'
                        ?
                        (
                            <div className="portfolio-video" key={i}>
                                <video width="100%"
                                    poster={item.poster}
                                    controls>
                                    <source src={item.src} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        ) : (
                            <div className="portfolio-image" key={i}>  
                                <img src={item.src} alt='image' />
                            </div>

                        )
                ))

            }
</div>


    </div>
  )
};

export default MyPortfolio;
