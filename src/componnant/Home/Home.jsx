import React from 'react'
import image from './img/avataaars.svg'
import styleHome from './css/home.module.css'
export default function Home() {
  return (
    <>
      <section className={`${styleHome.home}  md:mt-16 `}>
        <div className="container mx-auto p-3 flex flex-col items-center justify-center">
          <div className="image w-3/12 mt-5">
            <img src={image} className='w-full mt-8' alt="avater" />
          </div>
          <div className="info text-center">
            <h2 className= 'text-white text-5xl my-4 font-bold uppercase'>start Framework</h2>
               <div className="icon flex justify-center items-center space-x-4">
               <div className={`${styleHome.leftLine}`}></div>
            <i className="fa-solid fa-star   text-white text-2xl "></i>
            <div className={`${styleHome.rightLine}`}></div>

               </div>
            <p className='my-4 text-white'>Graphic Artist - Web Designer - Illustrator
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
