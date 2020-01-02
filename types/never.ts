/* never 类型
-------------------------- */
const errorMessage = (message: string): never => {
  throw new Error(message)
}

const infiniteFunc = (): never => {
  while(true) {}
}

/* never 类型是任何类型的子类型，可以赋值给任何类型
-------------------------- */
const neverVariable = (() => {
  while(true) {}
})()

let num: number = 5
num = neverVariable

/* 没有类型是 never 的子类型或可以赋值给 never 类型（除了 never 本身）
 * 即使 any 类型也不可以赋值给 never 类型
-------------------------- */