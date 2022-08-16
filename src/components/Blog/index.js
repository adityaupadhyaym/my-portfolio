
import Category from '../Category';
import Typography from '../Typography';
import PrimaryButton from '../PrimaryButton';
import BlogCard from '../BlogCard';
import {AiOutlineDoubleRight} from 'react-icons/ai';
import './style.css'


const Blog = () => {
    return (
        <section className='blog'>
            <div >

                <Category text = "Blog Post"/>
                <div className='blog-heading-wapper'>
                <Typography type="H2" className='heading-text '>  Recent News Latest Posts  <span className='span-text'>  From My Blog </span>  </Typography>
                <PrimaryButton className='' > View All Blog &nbsp; <AiOutlineDoubleRight /> </PrimaryButton>

                </div>
            </div>
            <div className='blog-card-wapper'>
                <BlogCard img='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/05.jpg' />
                <BlogCard img='http://demos.codexcoder.com/labartisan/html/maxino/assets/images/portfolio/01.jpg' className='blogCard-second'/>
            </div>
        </section>
    )
}

export default Blog;