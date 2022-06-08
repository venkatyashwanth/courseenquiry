import React, {useState,useEffect} from 'react';
import { getCourses } from '../config/Myservice';
import { Link } from 'react-router-dom';

export default function Courses(){
    const [course,setcourse] = useState([]);
    const [loading,setloading] = useState(false);
    useEffect(()=>{
        setloading(true);
        getCourses()
        .then(res => {
            if(res){
                setloading(false);
                setcourse(res.data)
            }
        })
        .catch(err => console.log(err))
    },[])

    return(
        <>
        <div className='container'>
            <h2>Courses</h2>
            {loading?
            <p>Loading...</p>:
            <div className='d-flex flex-column align-items-center  '>
                {course.map(val=>
                    <div className='card mb-3 w-50' sytle={{width:"18rem",margin:"10px"}} key={val.id}>
                        <div className='card-body'>
                            <h5 className='card-title'>{val.name}</h5>
                            <h6 className='card-subtitle mb-2 text-muted'>{val.category}</h6>
                            <p className='card-text'>{val.description}</p>
                            <Link to="/form" className='btn btn-secondary'>Enquire</Link>
                        </div>
                    </div>

                    )}
            </div>

            }
        </div>
        </>
    )
}