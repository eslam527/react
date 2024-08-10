import React from 'react'
import style from './footer.module.css'
export default function Footer() {
  return (
    <>
      <section className='footer bg-gray-800 p-3'>
        <div className="container p-8 text-center flex flex-col md:flex-row items-center mx-auto space-y-4 text-white capitalize">
          <div className="w-4/12 LOCATION flex justify-center items-center flex-col">
            <h3 className='  font-bold text-3xl my-3 uppercase '>LOCATION</h3>
            <p className=''>2215 John Daniel Drive<br />Clark, MO 65243</p>
          </div>
          <div className="w-4/12 des flex justify-center items-center flex-col">
            <h3 className='   font-bold text-3xl my-3 uppercase'>AROUND THE WEB</h3>
            <div className="links flex space-x-4">
              <div className={`${style.icon}`}>
              <i className="fa-brands fa-facebook"></i>
              </div>
              <div className={`${style.icon}`}>
              <i _ngcontent-rtt-c21="" className="fa-brands fa-twitter mx-1 icon"></i>              </div>
              <div className={`${style.icon}`}>
              <i _ngcontent-rtt-c21="" className="fa-brands fa-linkedin-in mx-1 icon"></i>              </div>
              <div className={`${style.icon}`}>
              <i _ngcontent-rtt-c21="" className="fa-solid fa-globe mx-1 icon"></i>              </div>
            </div>
          </div>
          <div className="w-4/12 flex justify-center items-center flex-col">
            <h3 className='  font-bold text-3xl my-3 uppercase'>ABOUT FREELANCER</h3>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      </section>
    </>
  )
}
