import React, { Component } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import $ from 'jquery';


export default () => {
        // function ddd(onClick){
        //     $('.d1li > h3').click();
        //         $(this).parent().addClass('on')
            
        // }    
        // console.log(ddd())    

  return (
    <div className="banner position-relative">
                  
        <Swiper
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >                
            <SwiperSlide>
                <img src='/img/portfolio/portfolio.jpg'></img>
            </SwiperSlide>
            <SwiperSlide><img src='/img/portfolio/portfolio2.jpg'></img>Slide 2</SwiperSlide>
            <SwiperSlide><img src='/img/portfolio/portfolio3.jpg'></img>Slide 3</SwiperSlide>  
        </Swiper> 
        <div className="container position-absolute end-0 start-0  bottom-0 top-0 d-flex flex-nowrap flex-md-row align-content-md-center align-items-md-center justify-content-md-start ">
            <ul className="d1ul d-flex ">
                <li className= "d1li me-5 position-relative on">
                    <h3>포트폴리오 A형</h3>
                    <ul className="d2ul position-absolute">
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
                    <h3>포트폴리오 B형</h3>
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
                    <h3>포트폴리오 C형</h3>
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
    </div>
    
  );
};