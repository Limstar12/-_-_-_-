import React, { Component } from 'react';
import { Form, FormGroup, FormText, Label, Input, Col, Button } from 'reactstrap';

class Form_tag extends Component {
    render() {
        return (
            <div className='formLim py-5 justify-content-center'>
                <div className='container '>
                    <h1>저와 함께 일할 멋진 회사를 찾고 있어요!</h1>                
                    <Form>
                    <FormGroup  className='row'>
                        <Label
                        for="comNM"
                        sm={3}
                        >
                        회사명
                        </Label>
                        <Col sm={5}>
                        <Input
                            id="comNM"
                            name="comNM"
                            placeholder="회사명"
                            type="comNM"
                        />
                        </Col>
                    </FormGroup>
                    <FormGroup className='row'>
                        <Label
                        for="com_Date"
                        sm={3}
                        >
                        면접날짜 및 시간
                        </Label>
                        <Col sm={5}>
                        <Input
                            id="com_Date"
                            name="com_Date"
                            placeholder="예) 2022년 12월 25일 17시"
                            type="com_Date"
                        />
                        </Col>
                    </FormGroup>
                    <FormGroup
                        className='row align-items-start'
                        tag="fieldset"
                    >
                        <legend className="col-form-label col-sm-2">
                        제안하시는 포지션 <br/> * 하나만 선택해주세요. 
                        </legend>
                        <Col sm={5} className="d-flex offset-1 " >
                        <FormGroup check className='d-flex align-items-center'>
                            <Input 
                            name="radio2"
                            type="radio"
                            className="me-3 my-0"
                            
                            />
                            {' '}
                            <Label check className='me-3 my-0'>
                            퍼블리셔
                            </Label>
                        </FormGroup>
                        <FormGroup check className='d-flex align-items-center'>
                            <Input
                            name="radio2"
                            type="radio"
                            className="me-3 my-0"
                            />
                            {' '}
                            <Label check className='me-3 my-0'>
                            기획
                            </Label>
                        </FormGroup>
                        <FormGroup check className='d-flex align-items-center'>
                            <Input
                            name="radio2"
                            type="radio"
                            className="me-3 my-0"
                            />
                            {' '}
                            <Label check className='me-3 my-0'>
                            마케팅
                            </Label>
                        </FormGroup>
                        <FormGroup check className='d-flex align-items-center'>
                            <Input
                            name="radio2"
                            type="radio"
                            className="me-3 my-0"
                            />
                            {' '}
                            <Label check className='me-3 my-0'>
                            디자인
                            </Label>
                        </FormGroup>
                        {/* <FormGroup
                            check
                            disabled
                        >
                            <Input
                            disabled
                            name="radio2"
                            type="radio"
                            />
                            {' '}
                            <Label check>
                            Option three is disabled
                            </Label>
                        </FormGroup> */}
                        </Col>
                    </FormGroup>

                    <FormGroup
                        className='row align-items-start'
                        tag="fieldset"
                    >
                        <legend className="col-form-label col-sm-2 text-nowrap">
                            귀사에서 원하는 능력<br/> * 퍼블리셔로 면접 제안 시에만 해당됩니다.
                        </legend>
                        <Col sm={7} className="d-flex offset-1 align-items-center">
                        <FormGroup check className='d-flex aling-item-center'>
                            <Input
                            name="radio3"
                            type="checkbox"
                            className='me-3 my-0'
                            />
                            {' '}
                            <Label check className='my-0 me-3'>
                            html/css
                            </Label>
                        </FormGroup>
                        <FormGroup check className='d-flex aling-item-center'>
                            <Input
                            name="radio3"
                            type="checkbox"
                            className='me-3 my-0'
                            />
                            {' '}
                            <Label check className='my-0 me-3'>
                            jQuery/Java script
                            </Label>
                        </FormGroup>
                        <FormGroup check className='d-flex aling-item-center'>
                            <Input
                            name="radio3"
                            type="checkbox"
                            className='me-3 my-0'
                            />
                            {' '}
                            <Label check className='my-0 me-3'>
                            Node $ mySql
                            </Label>
                        </FormGroup>
                        <FormGroup check className='d-flex aling-item-center'>
                            <Input
                            name="radio3"
                            type="checkbox"
                            className='me-3 my-0'
                            />
                            {' '}
                            <Label check className='my-0 me-3'>
                            React
                            </Label>
                        </FormGroup>
                        </Col>
                    </FormGroup>
                    <FormGroup className='row d-flex align-items-center'>
                        <Label
                        for="com_Phone"
                        sm={3}
                        >
                        * 담당자 연락처
                        </Label>
                        <Col sm={5}>
                        <Input
                            id="com_Phone"
                            name="com_Phone"
                            placeholder="01000000000"
                            type="com_Phone"
                        />
                        </Col>
                    </FormGroup>
                    <div className='d-flex align-items-center offset-5'>
                        <FormGroup check className='d-flex align-items-center'>
                            <Input type="checkbox" className='my-0 me-3 ' />
                            <Label check className='my-0'>
                            개인정보정책동의
                            </Label>
                        </FormGroup>
                        <FormGroup
                            check
                            className='row'
                        >
                            <Col
                            sm={{
                                // offset: 2,
                                size: 10
                            }}
                            >
                            <Button className=''>
                                Submit
                            </Button>
                            </Col>
                        </FormGroup>
                    </div>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Form_tag;