import React, { Component } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
// import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { EffectFade, Pagination } from "swiper";


export default () => {

  return (
    <div className="banner position-relative">
                  
        <Swiper
            spaceBetween={20}
            effect={"fade"}
            navigation={true}
            pagination={{
            clickable: true,
            }}
            modules={[EffectFade, Pagination]}
            className="mySwiper"
        >                
            <SwiperSlide className='portSlide justify-content-center d-flex '>
                <img src='/img/portfolio/portfolio.jpg' className='portimg'></img>
            </SwiperSlide>
            <SwiperSlide className=' portSlide justify-content-center d-flex '>
                <img src='/img/portfolio/portfolio2.jpg' className='portimg' ></img>
                </SwiperSlide>
            <SwiperSlide className=' portSlide justify-content-center d-flex '>
                <img src='/img/portfolio/portfolio3.jpg' className='portimg'></img>
                </SwiperSlide>  
        </Swiper> 
        <div className="container position-absolute end-0 start-0 top-0 d-flex flex-nowrap flex-md-row align-content-center align-items-center justify-content-start ">
            <ul className="d1ul d-flex position-absolute">
                <li className= "d1li me-5 mb-3 position-relative on">
                    <h1 className=' text-nowrap'>포트폴리오 A형</h1>
                    <ul className="d2ul">
                        <li className="d2li">
                            <p>#그누보드</p>

                        </li>
                        <li className="d2li">
                            <p>#그누보드</p>

                        </li>
                        <li className="d2li">
                            <p>#그누보드</p>
                        </li>
                        <li className="d2li">
                            <p>#그누보드</p>
                        </li>
                    </ul>
                </li>
                <li className="d1li me-5 position-relative">
                    <h1 className=' text-nowrap'>포트폴리오 B형</h1>
                    <ul className= "d2ul">
                        <li className="d2li">
                            <p>#그누보드</p>
                        </li>
                        <li className="d2li">
                            <p>#그누보드</p>
                        </li>
                        <li className="d2li">
                            <p>#그누보드</p>
                        </li>
                        <li className="d2li">
                            <p>#그누보드</p>
                        </li>
                    </ul>
                </li>
                <li className=" d1li me-5 position-relative">
                    <h1 className=' text-nowrap'>포트폴리오 C형</h1>
                    <ul className="  d2ul ">
                        <li className="d2li">
                            <p>#그누보드</p>
                        </li>
                        <li className="d2li">
                            <p>#그누보드</p>
                        </li>
                        <li className="d2li">
                            <p>#그누보드</p>
                        </li>
                        <li className="d2li">
                            <p>#그누보드</p>
                        </li>
                    </ul>
                </li>
            </ul>
        </div> 

        <div className='limport container position-absolute end-0 start-0 bottom-0 d-flex flex-nowrap flex-md-row align-content-md-center align-items-md-center justify-content-md-start position-relative '>
            <ul className='d-flex position-absolute Lim'>
                <li className='me-5 border border-dark border-2 rounded-circle d-flex justify-content-center align-items-center'><p className='mb-0'>포트폴리오</p></li>
                <li className='me-5 border border-dark border-2 rounded-circle d-flex justify-content-center align-items-center'><p className='mb-0'>제작노트</p></li>
                <li className='me-5 border border-dark border-2 rounded-circle d-flex justify-content-center align-items-center'><p className='mb-0'>제작기간</p></li>
                <li className='me-5 border border-dark border-2 rounded-circle d-flex justify-content-center align-items-center'><p className='mb-0'>기획/디자인/<br/>퍼블리싱</p></li>
            </ul>
        </div>
    </div>
    
  );
};