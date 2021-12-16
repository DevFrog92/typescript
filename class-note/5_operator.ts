// function logMessage(value: any) {
//   console.log(value)
// }

// logMessage('hello');
// logMessage(100);
// logMessage(false);

// union type 하나의 타입 이상을 사용할 수 있도록 한다.
// type guard
var yong: string | number;
function logMessage(value: string | number) {
  if (typeof value === 'number') {
    value.toLocaleString()
    return
  }

  if (typeof value === "string") {
    value.length
    return
  }

  throw new TypeError('value must be string or number!');
}

logMessage('hello')
logMessage(100)

// union type 특징

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// developer도 되야 하고, person도 되야 한다.
// 그렇기 때문에 공통된 속성만 접근할 수 있다.

function askSomeone(someone: Developer | Person) {

}