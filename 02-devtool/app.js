class Person {
  constructor() {
    this.name = '张三'
  }

  getName() {
    console.log(this.name)
  }

  sendMsg() {
    fetch('/api/hello').then((response) => {
      return response.text()
    }).then((result) => {
      console.log(result)
    }).catch((e) => {
      console.log(e)
    })
  }
}

const p = new Person()

p.getName()
p.sendMsg()