import React, {useEffect, useState} from 'react'; 
import $ from 'jquery';
import axios from 'axios';


export default function interviewform(props) {   
    const submitClick = async (type, e) => {    

        const  fnValidate = (e) =>{ 
                if(!$('#agreeTerm').is(':checked')){   
                    alert("동의하시게나");
                    $('label[for="agreeTerm"]').addClass('notice');                 
                    return false;
                }
                return true; 

                        
            }
        var time = new Date(); // true일때만 실행한다. 사실상 필요없는 식
        
        if(fnValidate()){
                  
            var  jsonstr = decodeURIComponent($("[name='"+props.botable+"']").serialize());           
            var  json_form = JSON.stringify(jsonstr).replace(/\&/g, '\",\"') 
            json_form = "{\""+ json_form.replace(/=/gi, '\":\"') + "\"}" 


            try{
                axios({ 
                    url : `/preinterview?type=${props.botable}`,
                    header : {
                        "Content-Type" : 'application/json'
                    },
                    method : 'POST',
                    body :  json_form,
                })
                .then(   
                    (result) => {  
                        try{  
                            console.log(result)                                   
                        }
                        catch(err){ console.log("result 타입을 확인할 것 : " + err.message + " / ") }
                    }
                )
                .catch ( e => { console.log(e +'이유로 통신이 불안전함') }
                )
            }
            catch(err){
                console.log(" 서버통신에 문제가 있다 조금 뒤에 다시 시도해보던지 :" + err)
                
            }
        }
    }



    return (  
        <div>
            <h2>{ props.titlenm }</h2>
            <form  action=''  method='post' name={props.botable}>
                <div className='formStyle'>
                    <dl>
                        <dt><label htmlFor='wr_subject'>인터뷰제목</label></dt>
                        <dd>
                            <input type='text' name='wr_subject' id="wr_subject" required />
                        </dd>
                    </dl>
                    <dl>
                        <dt><label htmlFor="wr_content">인터뷰내용</label></dt>
                        <dd>
                            <textarea rows={5} name="wr_content" id="wr_content"  required >

                            </textarea>
                        </dd>
                    </dl>
                    <div className="agree">
                        <input type="checkbox" id="agreeTerm" />
                        <label htmlFor="agreeTerm"><span>개인정보정책동의</span></label>
                    </div>
                    <a href='#none' onClick={e => { submitClick(props.botable, e) }}  className='btn' > 인터뷰올리기 </a>
                </div>
            </form> 
        </div>
    );   
}