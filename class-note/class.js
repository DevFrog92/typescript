// ES2015 (ES6)
// class
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const yong1 = new Person('yong', 20);

class Person {
  // 클래스 로직
  constructor(name, age) {
    //초기화 메서드
    console.log("생성되었습니다.");
    this.name = name;
    this.age = age;
  }
}

const yong = new Person('yong', 30);
console.log("🚀 ~ file: class.js ~ line 15 ~ yong", yong)
