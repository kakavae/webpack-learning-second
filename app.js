class Person {
  constructor() {
    this.name = '张三'
  }

  getName() {
    console.log(this.name)
  }
}

const p = new Person()

p.getName()