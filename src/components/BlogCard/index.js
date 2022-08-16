
import './style.css';
import ReadMoreBlog from '../ReadMoreBlog';

const BlogCard =(props)=>{


   const getClassName =()=>{
    return `blogCard ${props.className?props.className:''}`
   }

    return(
        <div className={getClassName()}>
            <img src={props.img} alt ='image' />
            <ReadMoreBlog />
        </div>
    )
}

export default BlogCard;