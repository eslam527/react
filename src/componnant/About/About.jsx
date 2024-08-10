import React from 'react'
import aboutStyle from './about.module.css'
export default function About() {
  return (
    <>
      <section className={`${aboutStyle.about}  min-h-screen flex justify-center items-center capitalize`}>
        <div className="container md:mt-16 mx-auto p-3 flex flex-col  items-center justify-center">
          <h1 className='text-4xl text-white font-bold uppercase my-4'>about component</h1>
          <div className="icon flex justify-center items-center space-x-4">
               <div className={`${aboutStyle.leftLine}`}></div>
            <i className="fa-solid fa-star   text-white text-2xl "></i>
            <div className={`${aboutStyle.rightLine}`}></div>

               </div>

          <div className="info flex flex-col space-y-3 md:flex-row items-center my-5 text-white w-9/12 mx-auto md:space-x-3">
          <div className="md:w-6/12 w-10/12  ">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
              </p>
            </div>
            <div className="md:w-6/12  w-10/12">
              <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.

              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
