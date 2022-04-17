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
            <SwiperSlide className='portSlide'>
                <div className='position-abosolute mw-100 port1'>             
                    <div className='container start-0 end-0 top-0 bottom-0 d-flex align-items-start justify-content-center flex-column position-absolute '>
                        <h1 className='d-sm-block d-none'>부트스트랩을 학습하며 제작한 데스크탑 페이지입니다.</h1>
                        <p className='d-sm-block d-none py-5'>맞벌이 가정 및 1인 가구를 겨냥하여<br/>로봇청소기 구매 및 렌탈 서비스를 제작하였습니다.</p>
                        <div className='offset-sm-3 offset-1 d-flex portImg'>
                            <a href=""><img src="" alt="" className='in_port'/></a>
                            <a href=""><img src="" alt="" className='in_note ms-sm-3'/></a>
                        </div>
                    </div>   
                </div>
            </SwiperSlide>
            <SwiperSlide className=' portSlide'>                               
                <div className='position-abosolute mw-100 port2'>
                    <div className='container start-0 end-0 top-0 bottom-0 d-flex align-items-start justify-content-center flex-column position-absolute '>
                        <h1 className='d-sm-block d-none'>부트스트랩을 학습하며 제작한 데스크탑 페이지입니다.</h1>
                        <p className='d-sm-block d-none py-5'>맞벌이 가정 및 1인 가구를 겨냥하여<br/>로봇청소기 구매 및 렌탈 서비스를 제작하였습니다.</p>
                        <div className='offset-sm-3 offset-1 d-flex portImg'>
                            <a href=""><img src="" alt="" className='in_port'/></a>
                            <a href=""><img src="" alt="" className='in_note ms-md-3'/></a>
                        </div>
                    </div>   
                </div>
            </SwiperSlide>
            <SwiperSlide className=' portSlide'>
                <div className='position-abosolute mw-100 port3'>
                    <div className='container start-0 end-0 top-0 bottom-0 d-flex align-items-start justify-content-center flex-column position-absolute '>
                        <h1 className='d-sm-block d-none'>부트스트랩을 학습하며 제작한 데스크탑 페이지입니다.</h1>
                        <p className='d-sm-block d-none py-5'>맞벌이 가정 및 1인 가구를 겨냥하여<br/>로봇청소기 구매 및 렌탈 서비스를 제작하였습니다.</p>
                        <div className='offset-sm-3 offset-1 d-flex portImg'>
                            <a href=""><img src="" alt="" className='in_port'/></a>
                            <a href=""><img src="" alt="" className='in_note ms-md-3'/></a>
                        </div>
                    </div>   
                </div>
            </SwiperSlide>  
        </Swiper> 

    </div>
    
  );
};