import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className='container py-5 aboutLim'>
                <h1>ABOUT ME</h1>
                <div className="about d-md-flex justify-content-center">
                    <div className="position-relative col-md-4 col-12">
                        <div className="position-absolute start-0 end-0 top-0 bottom-0 text-center">
                            <div className="aboutimg h-100">
                                {/* <img src="/img/about/aboutMe.jpg" alt="" className='mw-100'/> */}
                            </div>
                        </div>
                    </div>
                    <ul className='col-md-4 ms-md-5 col-12 d-flex flex-column justify-content-center flex-nowrap align-items-start align-content-center'>
                        <li className='d-flex align-items-center py-md-5 py-1'>
                            <div className='col-5 text-center'><img src="/img/about/usercom.jpg" alt="" /><h3>박혜지</h3></div>                            
                            <p className='ps-5 info text-nowrap'>1989.10.13<br/>010-7524-1016<br/>phji0326@gmail.com</p>
                        </li>
                        <li className='d-flex align-items-center py-md-5 py-1'>
                            <div className='col-5 text-center'><img src="/img/about/housecom.jpg" alt="" /><h3>Address</h3></div>
                            <p className='ps-5 info text-nowrap'>경기도 부천시 원미구 중동</p>
                        </li>
                        <li className='d-flex align-items-center py-md-5 py-1'>
                            <div className='col-5 text-center'><img src="/img/about/likecom.jpg" alt="" /><h3>자격증</h3></div>
                            <p className='ps-5 info text-nowrap'>201X 운전면허증<br/>2022 GTQ 1급<br/>2022 구글 애널리틱스<br/>2022 웹디자인기능사 1급</p>
                        </li>
                    </ul>
                </div>
                <aboutimg><img src=''></img></aboutimg>
            </div>
        );
    }
}

export default About;