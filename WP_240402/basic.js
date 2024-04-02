// 클래스 정의하기
class Person {
    construction(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log('안녕하세요, ${this, name}입니다.');
    }   
}

// 객체 생성하기
const person1 = new Person('Kim', 24);
console.log(person1, name);
person1.sayHello();

// 객체 생성하기
const person2 = new Person('Jim', 24);
console.log(person2, name);
person2.sayHello();



//부모 클래스 정의하기
class Animal {
    constructor(name) {
        this.name = name;
    }

    speak() {
        console.log('${this,name}이(가) 소리를 냅니다.');
    }
}


//자식 클래스 정의하기
class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    speak() {
        console.log('${this, name}이(가) 멍멍 짖습니다.');
    }

    fetch() {
        console.lof('${this, name}이(가) 공을 가져옵니다.');
    }
}

//객체 생성하기
const dog = new Dog('뽀삐')
dog.speak();
dog.fetch();



//기본 모듈로 내보내기
export function add(x, y) {
    return x + y;
}

export function subtract(x, y) {
    return x - y;
}

export function multiplication(x, y) {
    return x * y
}

export function division(x, y) {
    return x % y
}

//main.mjs 모듈에서 math.mjs 모듈 가져오기
export * as math from "./math.mjs";

//export default로 내보낸 모듈 가져오기
//import math from "./math.mjs";

console.log(math.add(1,2));
console.log(math.substract(5,3));



//HTTP 요청
const postURL = 'http://jsonplacehorder.typicode.come/todos';

fetch('http://jsonplacehorder.typicode.come/todos/1')
    .then((response) => response.json())
    .then((data) => {
        console.log(data);

    fetch(postURL, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => console.log(data));
}); 