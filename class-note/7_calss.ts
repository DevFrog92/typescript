class Person {
  // member 변수에 대한 차입을 모두 정해 주어야 한다.
  private name: string;
  public age: number;
  readonly log:string

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

// vue composition api
