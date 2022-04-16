import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='container py-5 aboutLim'>
                <h1>박혜지를 소개합니다</h1>
                <div className="about d-md-flex">
                    <div className="position-relative col-md-5 col-12">
                        <div className="position-absolute start-0 end-0 top-0 bottom-0 text-center about-abs">
                            <div className="aboutimg h-100">
                                {/* <img src="/img/about/aboutMe.jpg" alt="" className='mw-100'/> */}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 col-12 offset-md-1 '>
                        <ul className='d-flex align-items-start align-content-center justify-content-around'>
                            <li className='d-flex flex-column align-items-center col-4 py-md-5 text-nowrap'>
                                <div className='col-5 text-center'><img src="/img/about/usercom.jpg" alt="" /><h3>박혜지</h3></div>                            
                                <p className='info text-center'>1989.10.13<br/>010-7524-1016<br/>phji0326@gmail.com</p>
                            </li>
                            {/* <li className='d-flex flex-column align-items-center col-4 py-md-5'>
                                <div className='col-5 text-center'><img src="/img/about/housecom.jpg" alt="" /><h3>Address</h3></div>
                                <p className='info text-center'>경기도 부천시 원미구 중동</p>
                            </li> */}
                            <li className='d-flex flex-column align-items-center col-4 py-md-5 text-nowrap'>
                                <div className='col-5 text-center'><img src="/img/about/likecom.jpg" alt="" /><h3>자격증</h3></div>
                                <p className='info text-center'>201X 운전면허증<br/>2022 GTQ 1급<br/>2022 구글 애널리틱스<br/>2022 웹디자인기능사 1급</p>
                            </li>
                        </ul>
                        {/* skill */}
                        <div className='row d-flex py-5 py-md-0'>
                            <div className='col-md-6'>
                                <div className="col-sm-8 w-100">
                                    <div className="progress_bar">
                                        <div className="progress_bar_title">HTML5</div>
                                        <div className="progress_number">80%</div>
                                        <div className="pro-bar">
                                            <div className="progress-bar-inner80"  data-score="80" ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 w-100">
                                    <div className="progress_bar orange">
                                        <div className="progress_bar_title">CSS3</div>
                                        <div className="progress_number">60%</div>
                                        <div className="pro-bar">
                                            <div className="progress-bar-inner60"  data-score="60"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 w-100">
                                    <div className="progress_bar orange">
                                        <div className="progress_bar_title">CSS3</div>
                                        <div className="progress_number">60%</div>
                                        <div className="pro-bar">
                                            <div className="progress-bar-inner60"  data-score="60"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 w-100">
                                    <div className="progress_bar orange">
                                        <div className="progress_bar_title">CSS3</div>
                                        <div className="progress_number">60%</div>
                                        <div className="pro-bar">
                                            <div className="progress-bar-inner60"  data-score="60"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className="col-sm-8 w-100">
                                    <div className="progress_bar">
                                        <div className="progress_bar_title">HTML5</div>
                                        <div className="progress_number">80%</div>
                                        <div className="pro-bar">
                                            <div className="progress-bar-inner80"  data-score="80" ></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 w-100">
                                    <div className="progress_bar orange">
                                        <div className="progress_bar_title">CSS3</div>
                                        <div className="progress_number">60%</div>
                                        <div className="pro-bar">
                                            <div className="progress-bar-inner60"  data-score="60"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 w-100">
                                    <div className="progress_bar orange">
                                        <div className="progress_bar_title">CSS3</div>
                                        <div className="progress_number">60%</div>
                                        <div className="pro-bar">
                                            <div className="progress-bar-inner60"  data-score="60"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6 w-100">
                                    <div className="progress_bar orange">
                                        <div className="progress_bar_title">CSS3</div>
                                        <div className="progress_number">50%</div>
                                        <div className="pro-bar">
                                            <div className="progress-bar-inner50"  data-score="50"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }
}

export default About;