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
            <SwiperSlide className='portSlide mw-100 justify-content-center d-flex port1'>
                <div className='container start-0 end-0 top-0 bottom-0 d-flex align-items-start justify-content-center flex-column position-absolute '>
                    <h1>부트스트랩을 학습하며 제작한 데스크탑 페이지입니다.</h1>
                    <p>맞벌이 가정 및 1인 가구를 겨냥하여<br/>로봇청소기 구매 및 렌탈 서비스를 제작하였습니다.</p>

                        <a href=""><img src="" alt="포트폴리오" /></a>
                        <a href=""><img src="" alt="제작노트" /></a>

                </div>

            </SwiperSlide>
            <SwiperSlide className=' portSlide justify-content-center d-flex port2'>                               
                <div className='position-absolute start-0 end-0 bottom-0'>
                    <ul className='d-flex container d-flex   aboutul'>
                        <li className='px-3'>
                            <p>#부트스트랩</p>
                        </li>
                        <li className='pe-3'>
                            <p>#그누보드</p>
                        </li>
                        <li className='pe-3'>
                            <p>#PHP</p>
                        </li>
                        {/* <li className='pe-3'>
                            <p>#그누보드</p>
                        </li> */}
                    </ul>
                    <div className='limport container position-absolute end-0 start-0 bottom-0 d-flex flex-nowrap flex-md-row align-content-md-center align-items-md-center justify-content-md-start position-relative '>
                        <ul className='d-flex position-absolute Lim'>
                            <li className='me-5 border border-dark border-2 rounded-circle d-flex justify-content-center align-items-center'><p className='mb-0'>포트폴리오</p></li>
                            <li className='me-5 border border-dark border-2 rounded-circle d-flex justify-content-center align-items-center'><p className='mb-0'>제작노트</p></li>
                            <li className='me-5 border border-dark border-2 rounded-circle d-flex justify-content-center align-items-center'><p className='mb-0'>제작기간</p></li>
                            <li className='me-5 border border-dark border-2 rounded-circle d-flex justify-content-center align-items-center'><p className='mb-0'>기획/디자인/<br/>퍼블리싱</p></li>
                        </ul>
                    </div>
                </div>

            </SwiperSlide>
            <SwiperSlide className=' portSlide justify-content-center d-flex port3'>
                {/* <img src='/img/portfolio/portfolio3.jpg' className='portimg'></img> */}
            </SwiperSlide>  
        </Swiper> 

    </div>
    
  );
};