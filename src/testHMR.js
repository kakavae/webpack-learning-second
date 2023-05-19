import './css/index.css'
/* 测试模块热替换 */
const btn = document.createElement('button')

btn.textContent = '添加'
document.body.appendChild(btn)

btn.addEventListener('click', () => {
  const div = document.createElement('div')
  div.classList.add('bgc')
  document.body.appendChild(div)
})