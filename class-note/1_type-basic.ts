// js
// var str = "hello ts!";

// ts 문자열 선언
let str: string = "hello";

// ts 숫자 선언
let num: number = 10;

// ts 배열 선언
let arr: Array<number> = [1, 2, 3];
let heroes: Array<string> = ["capt", 'thor', 'hulk'];

// 배열 리터럴로 선언하는 방법
let items: number[] = [1, 2, 3];

// ts tuple
// 배열에서 특정 index의 타입도 설정할 수 있다.
let address: [string, number] = ['gangnam', 10];

// ts object
let obj: object = {};
// let person: object = {
//   name: "yongsu",
//   age: 10
// };

let person: { name: string, age: number } = {
  name: 'yongsu',
  age: 30,
};

person = {
  name: 'hello',
  age:30,
}

// ts boolean
let show: boolean = true;
