// 제네릭이란 타입을 함수의 파라미터처럼 사용하는 것이다.

// function logText(text) {
//   console.log(text);
//   return text;
// }

// logText('ts'); // ts
// logText(10); // 10
// logText(false); // false

// function logText<T>(text: T): T {
//   console.log(text)
//   return text;
// }

// // 파라미터 타입을 같이 넘겨준다.
// logText<string>("ts");

// function logText(text: string) {
//   console.log(text);
//   text.split('').reverse().join('');
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// function logText(text: string | number) {
//   console.log(text);
//   return text;
//   // 반환값에 대한 문제가 해결되지 않음
// }


// const a = logText('a');
// logText(10);
// logNumber(10);
// logText(true);

function logText<T>(text: T): T {
  console.log(text);
  return text;
}

logText<string>('a')
logText<number>(10)

// 인터페이스에 제네릭을 선언하는 방법

// interface DropDown {
//   value: string;
//   selected: boolean;
// }

// const obj: DropDown = { value: 'ts', selected: false };
// 여러개의 제네릭도 사용이 가능한가?

interface DropDown<T> {
  value: T;
  selected: boolean;
}

const obj: DropDown<string> = { value: 'ts', selected: false };
const objNumber: DropDown<number> = { value: 10, selected: false };