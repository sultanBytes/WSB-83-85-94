import React, { useEffect, useState } from 'react'
import Footer from '../Common/Footer'
import HeaderTwo from '../Common/HeaderTwo'
import { Link } from 'react-router-dom'

function Register() {
    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    // const main = ()=>{
    // //    regular expression

    // const pattern = /^[a-z ,.'-]+$/i

    // console.log(pattern.test('gagan '))
    // };

    // useEffect(()=>{main()},[]);
    const formValidation = ()=>{
        let isValid = true;
        //check email
        const emailPattren = /^[^@]+@[^@]+\.[^@]+$/;

        const ifEmail = emailPattren.test(data.email);

        if(!ifEmail) {
            setErrors({...errors, email: 'please provoide a valid email'});
            isValid = false;
        }
        
        const passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,14}$/;
        const ifPassword = passwordPattern.test(data.password);

        if(!ifPassword) {
            setErrors({...errors, password: 'Please include at least one lower case, one upper case, special charactor, minimum length 8 and maximum 14'});
            isValid = false;
        }

        const ifCpassword = data.password === data.cpassword;

        if(!ifCpassword) {
            setErrors({...errors, cpassword: 'password and confirm password does not match'});
            isValid = false;
        }

        console.log(errors);
        // setTimeout(()=>{
        //     setErrors({});
        // }, 5000)
        return isValid;
    };

    const handleFormSubmit = async(e)=>{
        e.preventDefault();
        const ifFormValid =await formValidation();
        console.log(errors.cpassword);

        if(!ifFormValid) return;
//abc!123ABC098
    };
  return (
   <>
    <HeaderTwo/>
        <section class=" ">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
     
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create and account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#" onSubmit={handleFormSubmit}>
                  <div>
                      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                      <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="" onChange={(e)=>{setData({...data, email:e.target.value})}}/>
                      <span className='text-[red]'>{errors.email}</span>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" onChange={(e)=>{setData({...data, password:e.target.value})}}/>
                      <span className='text-[red]'>{errors.password}</span>
                  </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                      <input type="password" name="cpassword" id="cpassword" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={(e)=>{setData({...data, cpassword:e.target.value})}} required=""/>
                      <span className='text-[red]'>{errors.cpassword}</span>
                  </div>
                  <div class="flex items-center justify-between">
                      <div class="flex items-start">
                          <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div class="ml-3 text-sm">
                            <label for="remember" class="text-gray-500 dark:text-gray-300">I accept the Terms and Conditions</label>
                          </div>
                      </div>
                     
                  </div>
                  <button type="submit" class="w-full font-medium bg-gray-300 rounded-lg text-sm px-5 py-2.5 text-center ">Create An Account</button>
                  <p class="text-sm font-light text-gray-300 dark:text-gray-300">
                  Already have an account? <Link to={'/login'} class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here</Link>
                  </p>
              </form>
          </div>
      </div>
  </div>
</section>
<Footer/>
   </>
  )
}

export default Register