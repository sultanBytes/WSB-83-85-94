import React, { useContext, useEffect, useState } from 'react'
import { mainContext } from '../Context';
import Header from '../Common/Header';
import Sidebar from '../Common/Sidebar';
import Footer from '../Common/Footer';
import axios from 'axios';

function Viewcourse() {
  let {changemenu} = useContext(mainContext);
  const [courseData, setCourseData] = useState([]);
  const [filePath, setFilePath] = useState('');

  console.log(courseData);

  const handleFetchCourse = async()=>{
    try{

      const response = await axios.get('http://localhost:5200/course/read_courses');

      if(response.status !== 200) return alert('Something went wrong');

      setFilePath(response.data.filePath);

      setCourseData(response.data.data);

    }catch(error){
      console.log(error);
      alert('Something went wrong');
    }
  };

  useEffect(()=>{handleFetchCourse()},[]);
  
  const handleStatus = async (e)=>{
    const statusData = {
      id:e.target.value,
      status: (e.target.textContent === 'Active') ? false : true
    }

    const response = await axios.put('http://localhost:5200/course/change_course_status', statusData, {
      headers:{
        'Content-Type':'application/json'
      }
    });
    handleFetchCourse();
  };

  return (
    <div>

<Header/>
    
    <div className='flex  bg-[#F5F7FF]'>
      <Sidebar/>
      
      <div className={` ${changemenu==true ? 'w-[95%]':'w-[84%]'} relative px-[30px] py-[50px] h-[92vh] bg-[#F5F7FF]`}>

        <h1 className='text-[25px] font-[500] mb-[10px]'>
        Course Table
        </h1>
        <div className=''>
        <div className='bg-white w-[100%] mb-[50px] p-4 h-full rounded-[20px]'>
          <table >
            <tr>
              <th>S.no</th>
              <th>Course Name</th>
              <th>Fees</th>
              <th>Duration</th>
              <th>Description</th>
              <th>Image</th>
              <th>Status</th>
              <th>Action</th>
            </tr>

            {
              courseData.map((course, i)=>{
                return(
                  <tr>
                  <td>{i + 1}</td>
                  <td>{course.coursename}</td>
                  <td>{course.courseprice}</td>
                  <td>{course.courseduration}</td>
                  <td>{course.coursedes}</td>
                  <td>
                    <img src={filePath + course.thumbnail} className='w-[100px]' />
                  </td>
                  <td>
                    <button value={course._id} onClick={handleStatus} className={`p-[4px_8px] ${((course.status) ? 'bg-[green]' : 'bg-[red]')} rounded text-[white]`}>{(course.status) ? 'Active' : 'Inactive'}</button>

                  </td>
                  <td className='text-center'>
    
                  <button className='bg-green-500 text-white px-5 mr-5 py-1'>Edit</button>
                  <button className='bg-red-400 text-white px-5 py-1'>Delete</button>
    
    
                  </td>
                </tr>
                )
              })
            }
           
          </table>
        </div>
        </div>
      <Footer/>
      </div>
    </div>

    </div>
  )
}

export default Viewcourse