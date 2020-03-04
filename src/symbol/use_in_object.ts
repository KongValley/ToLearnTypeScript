/* 作为属性名
-------------------------- */
let prop = 'name';

const info = {
  [prop]: 'chara'
};

console.log('info: ', info);

const s4 = Symbol('name');

const info_2 = {
  [s4]: 'chara',
  age: 18,
  sex: 'man'
};

console.log('info_2: ', info_2);

info_2[s4] = '2333';
console.log('info_2: ', info_2);

/* ①
-------------------------- */
for (const key in info_2) {
  console.log(key);
}

/* ②
-------------------------- */
console.log('Object.keys(info_2): ', Object.keys(info_2));
// Output: ["age", "sex"]

/* ③
-------------------------- */
console.log('Object.getOwnPropertyNames(info_2): ', Object.getOwnPropertyNames(info_2));
// Output: ["age", "sex"]

/* ④
-------------------------- */
console.log('JSON.stringify(info_2): ', JSON.stringify(info_2));
// Output: {"age":18,"sex":"man"}

/* 以上四种无法获取到Symbol作为属性名的值
-------------------------- */

console.log('Object.getOwnPropertySymbols(info_2): ', Object.getOwnPropertySymbols(info_2));
// Output: [Symbol(name)]

console.log('Reflect.ownKeys(info_2): ', Reflect.ownKeys(info_2));
// Output: ["age", "sex", Symbol(name)]

// Symbol的静态方法
const s5 = Symbol(`chara`);
const s6 = Symbol('chara');

// console.log('s5 === s6: ', s5 === s6);
// Output: false

/* 和 Symbol() 不同的是
 * 用 Symbol.for() 方法创建的 symbol 会被放入一个全局 symbol 注册表中.
 * Symbol.for() 并不是每次都会创建一个新的 symbol.
 * 它会首先检查给定的 key 是否已经在注册表中了.
 * 假如是，则会直接返回上次存储的那个.否则，它会再新建一个.
-------------------------- */
const s7 = Symbol.for('chara');
const s8 = Symbol.for('chara');
const s9 = Symbol.for('23333');
// console.log('s7 === s8: ', s7 === s8);
// Output: true

console.log('Symbol.keyFor(s7): ', Symbol.keyFor(s7));
// Output: Chara

console.log('Symbol.keyFor(s5): ', Symbol.keyFor(s5));
// Output: Undefined

