/* 作为属性名
-------------------------- */
let prop = 'name';

const info = {
  [prop]: 'chara'
};

console.log('%c 🍏 info: ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', info);

const s4 = Symbol('name');

const info_2 = {
  [s4]: 'chara',
  age: 18,
  sex: 'man'
}

console.log('%c 🍉 info_2: ', 'font-size:20px;background-color: #FFDD4D;color:#fff;', info_2);

info_2[s4] = '2333'
console.log('%c 🍪 info_2: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', info_2);

/* ①
-------------------------- */
for (const key in info_2) {
  console.log(key);
}

/* ②
-------------------------- */
console.log('%c 🥃 Object.keys(info_2): ', 'font-size:20px;background-color: #EA7E5C;color:#fff;', Object.keys(info_2));
// Output: ["age", "sex"]

/* ③
-------------------------- */
console.log('%c 🍊 Object.getOwnPropertyNames(info_2): ', 'font-size:20px;background-color: #E41A6A;color:#fff;', Object.getOwnPropertyNames(info_2));
// Output: ["age", "sex"]

/* ④
-------------------------- */
console.log('%c 🍦 JSON.stringify(info_2): ', 'font-size:20px;background-color: #42b983;color:#fff;', JSON.stringify(info_2));
// Output: {"age":18,"sex":"man"}

/* 以上四种无法获取到Symbol作为属性名的值
-------------------------- */

console.log('%c 🍝 Object.getOwnPropertySymbols(info_2): ', 'font-size:20px;background-color: #33A5FF;color:#fff;', Object.getOwnPropertySymbols(info_2));
// Output: [Symbol(name)]

console.log('%c 🌮 Reflect.ownKeys(info_2): ', 'font-size:20px;background-color: #465975;color:#fff;', Reflect.ownKeys(info_2));
// Output: ["age", "sex", Symbol(name)]

// Symbol的静态方法
const s5 = Symbol('chara')
const s6 = Symbol('chara')

// console.log('%c 🍨 s5 === s6: ', 'font-size:20px;background-color: #42b983;color:#fff;', s5 === s6);
// Output: false

/* 和 Symbol() 不同的是
 * 用 Symbol.for() 方法创建的 symbol 会被放入一个全局 symbol 注册表中.
 * Symbol.for() 并不是每次都会创建一个新的 symbol.
 * 它会首先检查给定的 key 是否已经在注册表中了.
 * 假如是，则会直接返回上次存储的那个.否则，它会再新建一个.
-------------------------- */
const s7 = Symbol.for('chara')
const s8 = Symbol.for('chara')
const s9 = Symbol.for('23333')
// console.log('%c 🍞 s7 === s8: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', s7 === s8);
// Output: true

console.log('%c 🥠 Symbol.keyFor(s7): ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', Symbol.keyFor(s7));
// Output: Chara

console.log('%c 🍺 Symbol.keyFor(s5): ', 'font-size:20px;background-color: #ED9EC7;color:#fff;', Symbol.keyFor(s5));
// Output: Undefined

