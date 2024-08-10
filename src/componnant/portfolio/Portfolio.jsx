import React from 'react'
import style from './css/style.module.css'
import img1 from './img/poert1.png'
import img2 from './img/port2.png'
import img3 from './img/port3.png'
export default function Portfolio() {

  function toggleLightBox() {

    const lightBox = document.querySelector(`.${style.lightBoxBg}`);
    lightBox.classList.toggle('hidden');
    lightBox.classList.toggle('flex');
     
 
     console.log(imgSrc);
  }
  return (
    <>
    
      <section className={`${style.portifilo} min-h-screen relative 	 mt-20`}>
        <div className="container mx-auto p-5">
          <h1 className='text-4xl text-gray-600 font-bold uppercase my-4 text-center'>portfolio component
          </h1>
          <div className="icon flex justify-center items-center my-4 space-x-4">
            <div className={`${style.leftLine} bg-slate-600`}></div>
            <i className="fa-solid fa-star   text-gray-600 text-2xl "></i>
            <div className={`${style.rightLine} bg-slate-600`}></div>

          </div>

          <div className="container mx-auto w-full flex flex-col md:flex-row  md:space-x-10  items-center ">
            <div className="sm:w-12/12 md:w-2/4 lg:w-4/12 my-3">
            <div className={`${style.inner} relative`} onClick={toggleLightBox}>
            <div className="image ">
                  <img src={img1} className='w-f rounded-lg' alt="" />
                </div>
                <div className={`${style.bg} ${style.layer} layer absolute rounded-lg flex justify-center items-center top-0 left-0 right-0 bottom-0`} >
                  <i className="fa-solid fa-plus fa-4x text-white">

                  </i>
                </div>
              </div>
            </div>
            <div className="sm:w-12/12 md:w-2/4 lg:w-4/12 my-3">
            <div className={`${style.inner} relative`} onClick={toggleLightBox}>
                <div className="image ">
                  <img src={img2} className='w-f rounded-lg' alt="" />
                </div>
                <div className={`${style.bg} ${style.layer} layer absolute rounded-lg flex justify-center items-center top-0 left-0 right-0 bottom-0`} >
                  <i className="fa-solid fa-plus fa-4x text-white">

                  </i>
                </div>
              </div>
            </div>
            <div className="sm:w-12/12 md:w-2/4 lg:w-4/12 my-3">
            <div className={`${style.inner} relative`} onClick={toggleLightBox}>
                <div className="image ">
                  <img src={img3} className='w-f rounded-lg' alt="" />
                </div>
                <div className={`${style.bg} ${style.layer} layer absolute rounded-lg flex justify-center items-center top-0 left-0 right-0 bottom-0`} >
                  <i className="fa-solid fa-plus fa-4x text-white">

                  </i>
                </div>
              </div>
            </div>




          </div>
          <div className="container mx-auto w-full flex  flex-col md:flex-row  md:space-x-10 md:my-10 items-center ">
            <div className="sm:w-12/12 md:w-2/4 lg:w-4/12 my-3">
            <div className={`${style.inner} relative`} onClick={toggleLightBox}>
                <div className="image ">
                  <img src={img1} className='w-f rounded-lg' alt="" />
                </div>
                <div className={`${style.bg} ${style.layer} layer absolute rounded-lg flex justify-center items-center top-0 left-0 right-0 bottom-0`} >
                  <i className="fa-solid fa-plus fa-4x text-white">

                  </i>
                </div>
              </div>
            </div>
            <div className="sm:w-12/12 md:w-2/4 lg:w-4/12 my-3">
            <div className={`${style.inner} relative`} onClick={toggleLightBox}>
                <div className="image ">
                  <img src={img2} className='w-f rounded-lg' alt="" />
                </div>
                <div className={`${style.bg} ${style.layer} layer absolute rounded-lg flex justify-center items-center top-0 left-0 right-0 bottom-0`} >
                  <i className="fa-solid fa-plus fa-4x text-white">

                  </i>
                </div>
              </div>
            </div>
            <div className="sm:w-12/12 md:w-2/4 lg:w-4/12 my-3">
            <div className={`${style.inner} relative`} onClick={toggleLightBox}>
                <div className="image ">
                  <img src={img3} className='w-f rounded-lg' alt="" />
                </div>
                <div className={`${style.bg} ${style.layer} layer absolute rounded-lg flex justify-center items-center top-0 left-0 right-0 bottom-0`} >
                  <i className="fa-solid fa-plus fa-4x text-white">

                  </i>
                </div>
              </div>
            </div>


          </div>
          <div onClick={toggleLightBox} className={`${style.lightBoxBg} justify-center items-center  hidden lightBox fixed bg-opacity-35 top-0 left-0 right-0  bottom-0`}>
                <img src={img1} className='sm:w-12/12 md:w-2/4 mx-auto' alt="" />
          </div>
        </div>
      </section>
    </>
  )
}
