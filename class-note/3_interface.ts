// interface
// interface의 중첩도 가능한가?
// array에 여러 type이 들어가게 되면 어떻게 하는가?

interface User {
  name: string;
  age: number;
}

// 변수에 활용한 인터페이스 활용
const seho: User = {
  age: 33,
  name: "세호"
}

// 함수의 인터페이스 활용
// 아래 함수는 특정 형식만을 파라미터로 받겠다는 것을 명시하게 된다.
function getUser(user: User): void {
  console.log(user);
}

// const yong = {
//   age: 30,
//   name:"yongsu"
// }

// getUser(yong);

// 함수의 스펙(구조)에 인터페이스를 활용

interface sumFunction {
  (a: number, b: number): number;
}

let sum: sumFunction;
sum = function (a: number, b: number): number {
  return a + b;
}

// 인덱싱

interface StringArray {
  [index: number]: string;
}

const arr: StringArray = ["a", 'b', 'c'];
// arr[0] = 10; arr[0]은 string 이어야 한다.

// 딕셔너리 패턴

interface StringRegexDictionary {
  [key: string]: RegExp;
}

const obj: StringRegexDictionary = {
  // sth: /abc/,
  cssFile: /\.css$/,
  jsFile: /\.js$/,
}

// obj['cssFile'] = 'a'

Object.keys(obj).forEach(function (value) { })

// 인터페이스 확장

interface Person {
  name: string;
  age: number;
}

interface Developer extends Person{
  language: string;
}

const yong: Developer = {
  language: 'ts',
  name: 'yong',
  age: 10
}

