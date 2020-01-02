/* Symbol类型
-------------------------- */
const s = Symbol()

/* 基础特性
-------------------------- */
const s1 = Symbol('kzp')
const s2 = Symbol('kzp')

// console.log(s1 === s2); // 永远返回false

/* 可以转成字符串和数值类型
-------------------------- */
console.log(s1.toString());

const s3 = Symbol(2333)

console.log(s3.valueOf());

/* 可以直接取反
-------------------------- */
console.log(!s1);