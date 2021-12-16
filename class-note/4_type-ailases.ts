// ts type-ailases

// 한 곳에서 묶어서 사용할 수 있다.
// interface Person {
//   name: string;
//   age: number;
// }

// 타입은 확장을 할 수 없다.
type Person = {
  name: string;
  age: number;
}

const yong: Person = {
  name: "yong",
  age: 30
}

type myString = string
const str: myString = "hello"

type Todo = { id: string, titile: string, done: boolean }
function getTodo(todo: Todo) {

}