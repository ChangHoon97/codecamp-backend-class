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

function checkEmail(myemail){
    if(myemail === undefined || myemail.includes("@") === false){
        console.log("에러 발생!!")
        return false
    }else{
        console.log("유효한 이메일입니다.")
        return true
    }
}

function getWelcomeTemplate({name, age, school, createdAt}){
    const mytemplate=`
        <html>
            <body>
                <h1>${name}님 가입을 환영합니다!</h1>
                <hr />
                <div>이름: ${name}</div>
                <div>나이: ${age}</div>
                <div>학교: ${school}</div>
                <div>가입일: ${createdAt}</div>
            </body>
        </html>
    `
    return mytemplate
}

function sendTemplateToEmail(myemail, result){
    console.log(myemail+"이메일로 가입환영 템플릿 " + result + "를 전송합니다!")
}

const name="철수"
const age=8
const school="다람쥐초등학교"
const email="a@a.com"
const createdAt="2023-05-29"
const info={name, age, school, email, createdAt}
createUser(info)