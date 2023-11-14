// https://developer.mozilla.org/ko/docs/Learn/Getting_started_with_the_web/JavaScript_basics

// let myHeading = document.querySelector('h1')
// myHeading.textContent = 'Hello world!'


// <변수의 선언과 할당>

// 변수 선언 (파이썬과 달리 선언과 할당을 별개로 진행 가능)
let myVariable
// 값 할당
myVariable = 'hello'

// 변수선언 + 값 할당
console.log(myVariable)
let myVariable2 = 'world'
console.log(myVariable2)

var a = 1
let b = 2
const c = 3
console.log(a, b, c)

// const는 constant 이므로, const로 선언된 변수에는 재할당 불가. (안정성 증진 목적)
a = 10
b = 20
// c = 30
console.log(a, b, c)

// let, const로 선언된 변수는 재선언 불가. 
var a
// let b
// const c

// 결론) const는 재할당 재선언 모두 불가, let은 재선언 불가




// <자바스크립트의 자료구조>

let stringVar = 'hello'
let numberVar = 10
let boolVar = true
let arrayVar = []
let objectVar = {}

console.log(stringVar, numberVar, boolVar, arrayVar, objectVar)


arrayVar.push('hello')
console.log(arrayVar)

// 파이썬버전: objectVar['name'] = 'kim'
objectVar.name = 'kim'
objectVar.location = 'seoul'
console.log(objectVar)

// 파이썬버전: my_dict = Dict() .. 딕셔너리 선언하는 방법2
let myObj = new Object()


// 연산자 (equal 기호)
let myVarA = 10
let myVarB = '10'

// true: 숫자10과 글자10을 같게 처리 (값이 같은지 비교) => 사용X. 오류발생가능성 높음
console.log(myVarA == myVarB)

// false: 숫자10과 글자10을 다르게 처리 (값과 타입이 같은지 비교) => 더 안정적
console.log(myVarA === myVarB)



// 조건문
// let iceCream = 'vanilla'
// if (iceCream === 'chocolate') {
//     alert('choco')
// } else {
//     alert('not choco')
// }



// 반복문

console.log('while')
let i = 0
while (i < 5) {
    console.log(i)
    // python: i += 1
    i++
}

console.log('for1')
// 선언;기준점;증가 (for문이지만 while문스럽게 동작)
for (let i=0; i<5; i++) {
    console.log(i)
}

let myArray = [1, 2, 3, 4, 5]

console.log('for2')
for (let i=0; i < myArray.length; i++) {
    console.log(myArray[i])
}

console.log('for in')
// python: for item in myArray
for (let item in myArray) {
    // 인덱스에 접근
    console.log(item)
    // 값에 접근
    console.log(myArray[item])
}

// 원래 우리가 아는 반복문과 가장 유사
console.log('for of')
for (let item of myArray) {
    console.log(item)
}

console.log('for each')
// 반복처리할 배열정보를 먼저 규정
myArray.forEach(function(item, index, array){
    console.log(item, index, array)
})



// 함수
// python: def multi():

// 기본 함수선언
function multiply1(num1, num2) {
    let result = num1 * num2
    return result
}
console.log(multiply1(3, 4))

// 함수표현식(람다)
let multiply2 = function(num1, num2) {
    let result = num1 * num2
    return result
}
console.log(multiply2(2, 4))

// 화살표 함수 기본
let multiply3 = (num1, num2) => {
    let result = num1 * num2
    return result
}
console.log(multiply3(5, 6))

// 화살표 함수 생략1
// {} 속 코드가 return하는 문장 하나만 있는 경우: {}, return 생략 가능
let multiply4 = (num1, num2) => num1 * num2
console.log(multiply4(20, 20))

// 화살표 함수 생략2
// () 속 매개변수가 하나만 있는 경우: () 생략 가능
let multiply5 = num1 => num1 * 2
console.log(multiply5(100))



// 기본 함수와 화살표 함수 비교

// 객체 자체를 출력
let people1 = {
    'name': 'kim',
    'greeting': function (){console.log(this)}
}

// 최상위객체인 window(해당 윈도우 창)를 가져옴
let people2 = {
    'name': 'hong',
    'greeting': () => {console.log(this)}
}

people1.greeting()
people2.greeting()



// 이벤트

// onclick 이벤트
// 해당 부분이 클릭되었을 때 특정 함수를 실행
// document.querySelector('h1').onclick = function (){
//     alert('hihi')
// }

// 이벤트 리스너1: 클릭
let myH1 = document.querySelector('h1')
// addEventListener(무슨 일이 일어났을 때, 무슨 행동을 할지)
myH1.addEventListener('click', function (e){
    // alert('hihi')
    console.log(e)
})

// 이벤트 리스너2: 키다운
let myInput = document.querySelector('input')
myInput.addEventListener('keydown', function (e){
    console.log(e)
})

let myImage = document.querySelector('img')
console.log(myImage)
myImage.addEventListener('click', function(){
    let src = myImage.getAttribute('src')
    
    if (src === 'images/firefox-icon.png') {
        myImage.setAttribute('src', 'images/peacewindow.jpg')
    } else {
        myImage.setAttribute('src', 'images/firefox-icon.png')
    }
})


// 비동기처리
console.log('hi')
// setTimeout(실행시킬 함수, 00초 뒤에 함수 실행)
setTimeout(function(){console.log('hello')}, 1000)
console.log('bye')

const URL = 'https://jsonplaceholder.typicode.com/todos/1'

// fetch == python의 request.get()
// let response = fetch(URL)
// console.log(response)

// let result = response.json()
// console.log(result)

fetch(URL)
    .then(response => response.json())
    .then(json => console.log(json))


// 동기적인 상태로 만들어주기
async function fetchAndPrint(){
    let res = await fetch(URL)
    let result = await res.json()

    console.log(result)
}

fetchAndPrint()



// let li1 = document.querySelector('li#first')
// let li2 = document.querySelector('li#second')
// let li3 = document.querySelector('li#third')

let liElements = document.querySelectorAll('li')

// console.log(liElements)

for (let li of liElements) {
    console.log(li)
}

liElements.forEach(function(li){
    console.log(li)
    li.style.color = 'red'
    li.style.backgroundColor = 'blue'
})

// 여러 개 요소에 다 이벤트리스터 달아주기
liElements.forEach(function(li){
    li.addEventListener('click', function(e){
        // console.log(e.target)
        // console.log(e.target.textContent)

        if (e.target.textContent == 'technologists') {
            e.target.style.color = 'yellow'
        } else if (e.target.textContent == 'thinkers') {
            e.target.style.color = 'black'
        } else {
            e.target.style.color = 'green'
        }
    })
})