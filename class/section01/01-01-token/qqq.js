console.log("안녕하세요")

function getToken(){
    const result = String(Math.floor(Math.random()*1000000)).padStart(6, "0")   //padStart는 맨앞에 0이 왔을 때 0으로 표시되게 해준다
    console.log(result)
}

getToken()