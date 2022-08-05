import Category from '../Category';
import Typography from '../Typography';
import AppImage from '../AppImage'
import './style.css'

const MyServices = () => {

    return (
        <div className='myServices'>
            <Category text="My Services" />
            <Typography type="H2" className='heading-text'>We Have Done Lot's of <span className='span-text'>My Best Services</span> Lets Check Some of Them </Typography>

            <div className='myServices-card-1 my-service-utils'>
                <div className='my-service-contents'>
                    <Typography type="H3" > PSD Template Design</Typography>
                    <Typography className="my-services-description"> Mnique deplo scalable catals forin Monec formu was unique</Typography>

                    <ul>
                        <li> <span>Motion Graphic Design </span></li>
                        <li> <span>3D animation Design </span></li>
                        <li> <span>Info Graphic Design </span></li>
                        <li> <span>Vector Design </span></li>
                    </ul>
                </div>
                <div className='my-service-img'>
                    <AppImage
                        src={`${process.env.PUBLIC_URL}/assets/images/service/01.png`}
                    />
                </div>

            </div>

            <div className='myServices-card-2 my-service-utils'>
                <div className='my-service-contents'>
                    <Typography type="H3" > PSD Template Design</Typography>
                    <Typography className="my-services-description"> Mnique deplo scalable catals forin Monec formu was unique</Typography>

                    <ul>
                        <li> <span>Motion Graphic Design </span></li>
                        <li> <span>3D animation Design </span></li>
                        <li> <span>Info Graphic Design </span></li>
                        <li> <span>Vector Design </span></li>
                    </ul>
                </div>
                <div className='my-service-img'>
                    <AppImage
                        src={`${process.env.PUBLIC_URL}/assets/images/service/02.png`}
                    />
                </div>

            </div>

            <div className='myServices-card-3 my-service-utils'>
                <div className='my-service-contents'>
                    <Typography type="H3" > PSD Template Design</Typography>
                    <Typography className="my-services-description"> Mnique deplo scalable catals forin Monec formu was unique</Typography>

                    <ul>
                        <li> <span>Motion Graphic Design </span></li>
                        <li> <span>3D animation Design </span></li>
                        <li> <span>Info Graphic Design </span></li>
                        <li> <span>Vector Design </span></li>
                    </ul>
                </div>
                <div className='my-service-img '>
                    <AppImage
                        src={`${process.env.PUBLIC_URL}/assets/images/service/03.png`}
                    />
                </div>

            </div>

            <div className='myServices-card-4 my-service-utils'>
                <div className='my-service-contents'>
                    <Typography type="H3" > PSD Template Design</Typography>
                    <Typography className="my-services-description"> Mnique deplo scalable catals forin Monec formu was unique</Typography>

                    <ul>
                        <li> <span>Motion Graphic Design </span></li>
                        <li> <span>3D animation Design </span></li>
                        <li> <span>Info Graphic Design </span></li>
                        <li> <span>Vector Design </span></li>
                    </ul>
                </div>
                <div className='my-service-img'>
                    <AppImage
                        src={`${process.env.PUBLIC_URL}/assets/images/service/04.png`}
                    />
                </div>

            </div>
        </div>
    )
}
export default MyServices;