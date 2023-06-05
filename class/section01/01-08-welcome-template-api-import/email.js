import { getToday } from "./utils.js"

export function checkEmail(myemail){
    if(myemail === undefined || myemail.includes("@") === false){
        console.log("에러 발생!!")
        return false
    }else{
        console.log("유효한 이메일입니다.")
        return true
    }
}

export function getWelcomeTemplate({name, age, school}){
    const mytemplate=`
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${getToday()}</div>
            </body>
        </html>
    `
    return mytemplate
}

export function sendTemplateToEmail(myemail, result){
    console.log(myemail+"이메일로 가입환영 템플릿 " + result + "를 전송합니다!")
}