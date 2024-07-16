import React, { useEffect, useState } from 'react'
import TitleSection from '../Common/TitleSection'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faArrowDown, faArrowsUpDown, faSearch } from '@fortawesome/free-solid-svg-icons'
import { tabsdata } from '../Common/AllData'
import SearchData from '../Common/SearchData'
import Header from '../Common/Header'
import axios from 'axios';
import {loadStripe} from '@stripe/stripe-js';

function Courses() {

  let [catelog , setcatelog] = useState('')
  let [search,setsearch]=useState('')
  let [faq,setFaq]= useState(false);

  const [courseData, setCourseData] = useState([]);

  const getCousres = async(req,res)=>{
    const response =await axios.get('http://localhost:5200/course/true_courses');
    setCourseData(response.data.data);
  };

  useEffect(()=>{
    getCousres();
  },[]);


 


  useEffect(()=>{
  
    setcatelog("All")
    
  },[])
  

  const handleShopCourse = async(e)=>{

    const stripe = loadStripe('pk_test_51LiyTNSH4QsKt7gApjEgxNySurOKQbOlLuc0XxwsqJek8ItuUyPQLIwIThhZ7Q4Ut7dYzWkrlg15v5kgV2opUJF6002wEvois3');

    const courseDetails = courseData.filter((item)=> item._id === e.target.value);

    console.log(courseDetails);

    try{
      const response = await axios.post('http://localhost:5200/payment/req-payment',{data: courseDetails});

      stripe.redirectToCheckout({
        sessionId: response.data.session
      })
    }
    catch(error){
      console.log(error);
      alert('something went wrong');
    }
  }


  return (
    <>
<Header/>
    <TitleSection title={"Courses"}/>
    <div className='max-w-[1300px] m-auto   mt-4 py-5'> 
      <div className='grid grid-cols-[73%_auto] gap-4'>
        <div className=' py-5 px-4'>
            <form action="" >
          <div className='flex gap-4'>
              <div className='w-[25%]'>
                <select name="" id="" onChange={(e)=>setcatelog(e.target.value)} className='w-full h-[45px]  rounded-[3px] px-3 border border-[gray] text-[gray]'>
                  <option value="All">Select...</option>
                  <option value="Desgin">Desgin</option>
                  <option value="3D + Animation">3D + Animation</option>
                </select>
              </div>
              <div className='w-[35%] flex items-center relative'>
                <input type="text" value={search} onChange={(e)=>setsearch(e.target.value)} className='w-full h-[45px] rounded-[3px] px-3 border border-[gray] focus:outline-none ' placeholder='Search Our Course' />
                <FontAwesomeIcon  icon={faSearch} className='absolute text-[gray] text-[20px] top-[13px] right-[10px] z-[99]'/>
              </div>
          </div>
            </form>

            <div className='grid grid-cols-3 gap-8 mt-[40px]'>
              <table className='w-full'>
                <thead>
                  <tr>
                    <th>Sr. no.</th>
                    <th>name</th>
                    <th>price</th>
                    <th>duration</th>
                    <th>
                      <button>Shop</button>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    courseData.map((course, index)=>(
                      <tr>
                      <td>{index + 1}</td>
                      <td>{course.coursename}</td>
                      <td>{course.courseprice}</td>
                      <td>{course.courseduration}</td>
                      <td>
                      <button value={course._id} className='p-[8px_12px] bg-[cyan] block' onClick={handleShopCourse}>Buy now</button>
                    </td>
                    </tr>
                    ))
                  }
                 
                </tbody>
              </table>
            {/* {
              catelog!=""  ?
              // <SearchData category={catelog} searchcat={search}   />
              :
              ""
            } */}
            </div>
        </div>
        <div className=' py-5 px-3'>
          <div className='faq border-[2px] rounded-[10px] py-6 '>
            <div onClick={()=>setFaq(!faq)} className={`flex  justify-between items-center px-6`}>
              <h4 className='text-[20px] font-bold'>Category Filter</h4>
              <FontAwesomeIcon icon={faq!=true ?faAngleDown : faAngleUp}/>
            </div>
            <ul className={`mx-[25px]   ${faq!=true ? "duration-[1s] mt-4 visible opacity-[1] max-h-[500px]":"mt-0 duration-[1s] invisible opacity-0 max-h-[0]"} `}>
              <li className='mb-2 text-[20px]'>Desgin</li>
              <li className='mb-2 text-[20px]'>Desgin</li>
              <li className='mb-2 text-[20px]'>Desgin</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
</>
  )
}

export default Courses