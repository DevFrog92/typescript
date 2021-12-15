// ts function
// parameter and return 값의 타입을 명시할 수 있다.
// 타입 추론

// 함수의 반환 값에 타입을 정의하는 방식
function add(): number {
  return 10;
}

// 함수의 타입을 정의하는 방식
function sum(a: number, b: number): number {
  return a + b;
}

sum(10);

// 함수의 옵셔널 파라미터 -> ?
function log(a: string, b?: number) {

}

log("hello ts");
log("hello ts", 100);