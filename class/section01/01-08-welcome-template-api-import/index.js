import {checkEmail, getWelcomeTemplate, sendTemplateToEmail} from './email.js'

function createUser(){
    //1. 이메일이 정상인지 확인(존재여부/@포함여부)
    const isValid= checkEmail(email)
    if(isValid===false){
        return
    }

    //2. 가입환영 템플릿 만들기
    const mytemplate = getWelcomeTemplate(info)

    //3. 템플릿 전송하기
    sendTemplateToEmail(email, mytemplate)

}


const name="철수"
const age=8
const school="다람쥐초등학교"
const email="a@a.com"
const createdAt="2023-05-29"
const info={name, age, school, email, createdAt}

createUser(info)