import React, { Component } from 'react';

class Interview_before extends Component {
    render() {
        return (

            <div className="container py-5 interviewLim">
                <h1>저에 대해 궁금한 점이 있다면 아래 내용을 확인해주세요!</h1>
                <div className="int intBox1 d-flex">
                    <div className=''>
                        <h3>전공과 다른 프론트앤드 개발을 하게 된 계기가 무엇인가요?</h3>
                        <p>답변</p>
                    </div>
                    <img src="" alt="" />
                </div>
                <div className="int intBox2 d-flex">
                    <div className=''>
                        <h3>개발 언어 중에 관심있는 언어와 잘하는 언어는 무엇인가요?(여기에 포트폴리오 중 가장 맘에 드는것도 작성하기)</h3>
                        <p>답변</p>
                    </div>
                    <img src="" alt=""/>
                </div>
                <div className="int intBox3 d-flex">
                    <div className=''>
                        <h3>훈련과 업무의 차이에 대해 설명해주세요.</h3>
                        <p>답변</p>
                    </div>
                    <img src="" alt="" />
                </div>
                <div className="int intBox4 d-flex">
                    <div className=''>
                        <h3>회사에 입사하게 된다면 앞으로의 포부에 대해 얘기해주세요.(자기개발을 꾸준히 하기 위해서는 뭐가 필요할지도 기재)</h3>
                        <p>답변</p>
                    </div>
                    <img src="" alt=""/>
                </div>
            </div>

        );
    }
}

export default Interview_before;