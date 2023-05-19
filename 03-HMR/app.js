import './src/testHMR.js'
// import func from './src/input.js'
import './src/input.js'

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
// p.sendMsg()

// func()

/* 定制需要热更新的模块，会在依赖的模块变化之后重新加载和执行回调，描述当模块被更改之后发生了什么 */
/* 一般情况下不需要写 */
/* 默认情况下，模块的热更新会冒泡， */
/* 如果一个模块没有 HMR 处理函数，更新就会冒泡(bubble up)。这意味着某个单独处理函数能够更新整个模块树。如果在模块树的一个单独模块被更新，那么整组依赖模块都会被重新加载。 */
/* 能做到修改js之后，页面内容直接在原来的基础上更新，不需要刷新页面，就和style-loader的热加载一样 */
if (module.hot) {
  module.hot.accept('./src/input.js', () => {
    // func()
  })
}