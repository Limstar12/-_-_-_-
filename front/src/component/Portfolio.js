import React, { Component } from 'react';

class Portfolio extends Component {
    render() {
        return (
            <div>
                <div className="port position-relative">
                    <ul className='d1ul d-flex position-absolute'>
                        <li className='d1li on'>
                            <h3>포트폴리오 1<a href=""></a></h3>
                            <ul className='d2ul'>
                                <li className=''>
                                    <p>#그누보드</p>
                                </li>
                                <li>
                                    <p>#그누보드</p>
                                </li>
                                <li>
                                    <p>#그누보드</p>
                                </li>
                                <li>
                                    <p></p>
                                </li>
                            </ul>
                        </li>
                        <li className='d1li'>
                            <h3>포트폴리오 2<a href=""></a></h3>
                            <ul className='d2ul'>
                                <li>
                                    <p>#그누보드</p>
                                </li>
                                <li>
                                    <p>#그누보드</p>
                                </li>
                                <li>
                                    <p>#그누보드</p>
                                </li>
                                <li>
                                    <p>#그누보드</p>
                                </li>
                            </ul>
                        </li>
                        <li className='d1li'>
                            <h3>포트폴리오 3<a href=""></a></h3>
                            <ul className='d2ul'>
                                <li>
                                    <p>#그누보드</p>
                                </li>
                                <li>
                                    <p>#그누보드</p>
                                </li>
                                <li>
                                    <p>#그누보드</p>
                                </li>
                                <li>
                                    <p>#그누보드</p>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <main className='on' id='main1'></main>
                <main className='' id='main2'></main>      
                <main className='' id='main3'></main>                     
            </div>
        );
    }
}

export default Portfolio;