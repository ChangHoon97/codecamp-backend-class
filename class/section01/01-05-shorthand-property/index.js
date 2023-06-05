const name="철수"
const age=12
const school="다람쥐초등학교"

const profile={ name, age, school}
//key와 value가 같아서 value를 생략함 => shorthand-property


function qqq(aaa){
    console.log(aaa)
    console.log(aaa.name)
    console.log(aaa.age)
    console.log(aaa.school)
}


qqq(profile)
qqq({ name, age, school})