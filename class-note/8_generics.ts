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

// function logText<T>(text: T): T {
//   console.log(text);
//   return text;
// }

// logText<string>('a')
// logText<number>(10)

// // 인터페이스에 제네릭을 선언하는 방법

// // interface DropDown {
// //   value: string;
// //   selected: boolean;
// // }

// // const obj: DropDown = { value: 'ts', selected: false };
// // 여러개의 제네릭도 사용이 가능한가?

// interface DropDown<T> {
//   value: T;
//   selected: boolean;
// }

// const obj: DropDown<string> = { value: 'ts', selected: false };
// const objNumber: DropDown<number> = { value: 10, selected: false };


// // 제네릭의 타입 제한
// function logTextLength<T>(text: T[]): T[] {

//   return text;
// }

// logTextLength<string>(['hi']);

// 제네릭의 타임 제한 2 - 정의된 차입 이용하기

interface LengthType {
  length: number;
}

function LogTextLength<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

LogTextLength(10);
LogTextLength({ length: 10 });

// 제네릭의 타입 제한 3 - keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// ShoppingItem이 가진 키 중에 한가지가 제네릭이 된다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

// getShoppingItemOption(10)
getShoppingItemOption("name");
getShoppingItemOption("hello");