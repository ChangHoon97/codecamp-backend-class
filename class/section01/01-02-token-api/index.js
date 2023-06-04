//안좋은 예
// function createTokenOfPhone(phoneNumber){    //phoneNumber : 매개변수(parameter)
//     // 1. 휴대폰번호 자릿수 맞는지 확인하기 10~11자리)

//     if(phoneNumber.length >= 10){
//         if(phoneNumber.length <=11){

//             //2. 핸드폰 토큰 6자리 만들기
//             const result = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
//             console.log(result)

//             //3. 핸드폰 번호에 토큰 전송하기
//             console.log(phoneNumber+"번호로 인증번호 " + result + "를 전송합니다.")

//         }else{
//             console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해주세요!!")
//         }

//     }else{
//         console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해주세요!!")
//     }

// }

//early-exit 방법 (에러를 찾아 먼저 수행한다)
function createTokenOfPhone(phoneNumber){    //phoneNumber : 매개변수(parameter)
    // 1. 휴대폰번호 자릿수 맞는지 확인하기 10~11자리)
    if(phoneNumber.length<10 || phoneNumber.length >11){
        console.log("에러 발생!!! 핸드폰 번호를 제대로 입력해주세요!!")
        return
    }

     //2. 핸드폰 토큰 6자리 만들기
     const result = String(Math.floor(Math.random()*1000000)).padStart(6,"0")
     console.log(result)

     //3. 핸드폰 번호에 토큰 전송하기
     console.log(phoneNumber+"번호로 인증번호 " + result + "를 전송합니다.")
}

createTokenOfPhone("01022902689") //01022902689 : 인자(argument)