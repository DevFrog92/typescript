let a:unknown = 1 + 2
let b = a === 3
console.log(b, typeof a)
let c = {
  apple: a,
  banana: b
}

if(typeof a === 'number') {
  const d = a + 10
  console.log(d)
}

let oneMillion = 1_000_000
let twoMillion: 2_000_000 = 2_000_000

console.log(oneMillion, twoMillion)

let aa = Symbol('aa')
let bb: symbol = Symbol("b")
let cc = aa === bb
// let dd = aa + 'x'

console.log(cc)

let ccc: {
  firstName: string
  lastName: string
} = {
  firstName: "yongsu",
  lastName: "kwon"
}

let abs: {
  a: number
  b?: string
  [key: number]: boolean // boolean 타입의 값을 갖는 number 타입의 프로퍼티를 여러개 포함할 수 있다.
} = {
  a: 1,
  b: "boolean",
  1:true,
  2:true,
  3:true,
  4:true,
}

a = { a:1 }
a = { a:1, b: undefined }

let user : {
  readonly firstName: string
} = { firstName: "tongtong"}

user.firstName = "yongyong"

let danger: {}

danger = []
danger = 2
danger = {x: 1}
danger = undefined

// type alias
type Age = number
type Person = {
  name: string
  age: Age
}
let age = 5
let driver:Person = {
  name: "yongyong",
  age,
}


type Color = 'red'

let x = Math.random() < .5

if(x) {
  type Color = "blue"
  let b: Color = "blue"
}else {
  let c:Color = "red"
}


type Cat = { name: string, purrs: boolean}
type Dog = { name: string, barks: boolean, wags: boolean}

type CatOrDogOrBoth = Cat | Dog // 두 타입의 프로퍼티를 모두 소유할 수 있고, 부분적으로 소유할 수 있다.
type CatAndDog = Cat & Dog // 두 타입의 모든 프로퍼티를 포함해야한다.

// 이형 배열을 생성할 수 있다.
let stringAndNumber: (string | number) [] = ["hello" , 1]
let stringAndBoolean: Array<string | boolean> = ['hello', true]

let trainFares: [number, number?][] = [
  [1],
  [1,2,],
  [2,3]
]
// 98줄과 동일한 의미를 가진다
let moreTrainFares: ([number] | [number, number])[] = [
  [1],
  [1,2]
]

let as: readonly number[] = [1,2,3]
let bs: readonly number[] = as.concat(4)
let three = bs[3]

// as는 readonly 속성으로 불변 배열이다.
as[4] = 5

as.push(6)

type A = readonly string[] // 간편한게 최고
type B = ReadonlyArray<string[]>
type C = Readonly<string[]>
type D = readonly (string | number)[]

let ddd:D = [
  'hello',
  1,
]

ddd.push(true)

