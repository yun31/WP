// 변수, 상수
let myVariable = 123; //변수
const myConstant = "Hello, world!"; //상수

console.log(myVariable); //123
console. log(myConstant); // Hello, world!


// 데이터 타입
let myNumber = 123;
let myString = "Hello, world!"
let myBoolean = true;
let myNull = null;
let myUndefined = undefined;
let myObhect = { name: "John", age: 30};
let mySymbol = Symbol("mySymbol");

console.log(typeof myNumber); //number
console.log(typeof myString); //string
console.log(typeof myBoolean); //boolean
console.log(typeof myNull); //object
console.log(typeof myUndefined); //undefined
console.log(typeof myObject); //object
console.log(typeof mySymbol); //symbol


//연산자
let x = 10;
let y = 5;

console.log(x + y); //15
console.log(x - y); //5
console.log(x * y); //50
console.log(x / y); //2
console.log(x % y); //0

console.log(x > y); //true
console.log(x < y); //false
console.log(x >= y); //true
console.log(x <= y); //false
console.log(x === y); //false
console.log(x !== y); //true

let a = true;
let b = false;

console.log(a && b); //flase
console.log(a || b); //true
console.log(!a) //false

//비교연산자와 엄격한 비교연산자
1 == '1' //ture
1 === '1' //false


///조건문///

//if문
let age = 20;
if(age >= 18) {
    console.log('You are an adult.');
} else if(age >= 13) {
    console.lof('You are an teenager.');
} else {
    console.log('You are a child.')
}

//switch문
let fruit = 'banana';

switch (fruit) {
    case "apple":
        console.log('This is an apple.');
        break;
    case 'banana':
        console.log('This is an banana.');
        break;
    case 'orange':
        console.log('This is an orange.');
        break;
    default:
        console.log('Unknown fruit.');
}


///반복문///

//for문
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//while문
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

//배열 순회
const arr = [1. 2, 3, 4, 5];

for (let i =0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(function (element) {
    console.log(element);
});

///함수///
function add(a, b) {
    return a + b;
}

let result = add(1, 2);
console.log(result);  //3

///객체///
let myObject2 = {
    name: 'Jone',
    age: 30,
    isMarried: false,
};

console.log(myObject2.name);
console.log(myObject2.age);
console.log(myObject2.isMarried);

///배열///
