import React from 'react'
import {FcLike, FcLikePlaceholder} from "react-icons/fc"
import { toast } from 'react-toastify';

 const Card = (props) => {

  let course = props.course;
  let likedCourses = props.likedCourses;
  let setLikedCourses = props.setLikedCourses;

  function clickHandelr() {
    // logic
    if(likedCourses.includes(course.id)) {
      // phle se like hua pda tha
      setLikedCourses( (prev) =>prev.filter((cid) => (cid!==course.id)));
      toast.warning("Like Removed");
    }
    else {
      //  phle se like nahi hai ye course 
      // insert krna h ye course liked course me
      if(likedCourses.length === 0) {
        setLikedCourses([course.id]);
      }
      else{
        // non-empty phle se
        setLikedCourses((perv) => [...perv, course.id]);
      }
      toast.success("Liked Successfully")
    }
  }
  return (
    <div className='w-[300px] bg-bgDark bg-opacity-80 rounded-md overflow-hidden'>
      <div className=' relative'>
        <img src={course.image.url} alt="pic"/>

        <div className=' w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-[-13px]
         grid place-items-center'> 
          <button onClick={clickHandelr}>
            {
              likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"/>) : (<FcLikePlaceholder fontSize="1.75rem"/>)
            }
          </button>
        </div>
      </div>

      <div className='p-4'>
        <p className=' text-white font-semibold text-lg leading-6'>{course.title}</p>
        <p className=' text-white mt-2'>
            {
              course.description.length > 100 ? 
              (course.description.substr(0,100)) +"..." :
              (course.description)
            }
        </p>
      </div>
    </div>
  )
}

export default Card;
