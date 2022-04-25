// 반환 타입은 자동으로 추론 되지만, 원하면 명시할 수 있다.

// function signature
type Greet = (name: string) => string
type Log = (message: string, userId?:string) => void
type SumVariableSafe = (...numbers:number[]) => number

function add(a: number, b:number):number {
  return a + b
}

function greet(name: string) {
  return `hello ${name}`
}

let greet2 = function (name: string) {
  return `hello ${name}`
}

let greet3 = (name: string) => {
  return `hello ${name}`
}

let greet4 = (name: string) => `hello ${name}`

let greet5 = new Function('name', 'return "hello" + name')


type Context = {
  appId?: string
  userId?: string
}

// function log(message: string, context:Context = {}) {
//   let time = new Date().toISOString()
//   console.log(time, message, context.userId)
// }

let log: Log = (message, userId = 'Not signed in') => {
  let time = new Date().toISOString()
  console.log(time, message, context.userId)
}

// log('hello', {appId: "ddfe", userId: "rew"})
log("hello", "yong")

function sum(...numbers: number[]) {
  return Array.from(arguments)
}

console.log(sum(1,23,4))

let this_func = {
  a() {
    return this
  }
}

let a_func = this_func.a

function fancyDate(this: Date) {
  return `${this.getDate()}:${this.getMonth()}:${this.getFullYear}`
}

fancyDate.call(new Date)

function* createFibonacciGenerator() {
  let a = 0
  let b = 1
  while(true) {
    yield a;
    [a, b] = [b, a+b]
  }
}

let fibonacciGenerator = createFibonacciGenerator()
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())
console.log(fibonacciGenerator.next())


function times(
  f: (index: number) => void,
  n: number
) {
  for(let i = 0; i < n; i++) {
    f(i)
  }
}

times(n => console.log(n), 5)
