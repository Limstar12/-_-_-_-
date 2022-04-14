import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='container py-5 aboutLim'>
                <h1>내 소개</h1>
                <div className="about d-md-flex">
                    <div className="position-relative col-md-5 col-12">
                        <div className="position-absolute start-0 end-0 top-0 bottom-0 text-center">
                            <div className="aboutimg h-100">
                                {/* <img src="/img/about/aboutMe.jpg" alt="" className='mw-100'/> */}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 offset-md-1'>
                        <ul className='d-flex align-items-start align-content-center'>
                            <li className='d-flex flex-column align-items-center col-4 py-md-5'>
                                <div className='col-5 text-center'><img src="/img/about/usercom.jpg" alt="" /><h3>박혜지</h3></div>                            
                                <p className='info text-center'>1989.10.13<br/>010-7524-1016<br/>phji0326@gmail.com</p>
                            </li>
                            <li className='d-flex flex-column align-items-center col-4 py-md-5'>
                                <div className='col-5 text-center'><img src="/img/about/housecom.jpg" alt="" /><h3>Address</h3></div>
                                <p className='info text-center'>경기도 부천시 원미구 중동</p>
                            </li>
                            <li className='d-flex flex-column align-items-center col-4 py-md-5'>
                                <div className='col-5 text-center'><img src="/img/about/likecom.jpg" alt="" /><h3>자격증</h3></div>
                                <p className='info text-center'>201X 운전면허증<br/>2022 GTQ 1급<br/>2022 구글 애널리틱스<br/>2022 웹디자인기능사 1급</p>
                            </li>
                        </ul>
                        {/* skill */}
                        <div className=' row'>
                            <div class="col-md-3 col-sm-6">
                                <div class="progress blue">
                                    <span class="progress-left">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <div class="progress-value">90%</div>
                                </div>
                                <p className='text-center py-4'>html/css</p>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="progress yellow">
                                    <span class="progress-left">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <div class="progress-value">75%</div>
                                </div>                                
                                <p className='text-center py-4'>jQuery/JAVAscript</p>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="progress pink">
                                    <span class="progress-left">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <div class="progress-value">60%</div>
                                </div>
                                <p className='text-center py-4'>리액트</p>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="progress pink">
                                    <span class="progress-left">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <div class="progress-value">60%</div>
                                </div>
                                <p className='text-center py-4'>노드</p>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="progress pink">
                                    <span class="progress-left">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <div class="progress-value">60%</div>
                                </div>
                                <p className='text-center py-4'>부트스트랩</p>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="progress pink">
                                    <span class="progress-left">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <div class="progress-value">60%</div>
                                </div>
                                <p className='text-center py-4'>그누보드</p>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="progress pink">
                                    <span class="progress-left">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <div class="progress-value">60%</div>
                                </div>
                                <p className='text-center py-4'>카페24이커머스</p>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="progress pink">
                                    <span class="progress-left">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <span class="progress-right">
                                        <span class="progress-bar"></span>
                                    </span>
                                    <div class="progress-value">60%</div>
                                </div>
                                <p className='text-center py-4'>포토샵/일러스트</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default About;