/* Symbol类型
-------------------------- */
const s = Symbol();

/* 基础特性
-------------------------- */
const s1 = Symbol('chara');
const s2 = Symbol('chara');
// console.log(s1 === s2); // 永远返回 false

/* 如果 Symbol 参数是 Object 类型
 * 默认调用对象的 toString() 方法
-------------------------- */
const obj1 = {
  toString() {
    return 'obj1'
  }
};
// const sobj1 = Symbol(obj1); // 在浏览器环境可执行
// console.log(sobj1); // Output: Symbol(obj1)

// const sobj2 = Symbol({ a: '123' }); // 在浏览器环境可执行
// console.log(sobj2); // Output: Symbol([object Object])

/* 可以转成字符串型
-------------------------- */
console.log('%c 🍫 s1.toString(): ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', s1.toString());
// Output: chara

const s3 = Symbol(2333);

console.log('%c 🥐 s3.toString(): ', 'font-size:20px;background-color: #3F7CFF;color:#fff;', s3.toString());
// Output: 2333

/* 可以直接取反
-------------------------- */
console.log('%c 🍭 !s1: ', 'font-size:20px;background-color: #4b4b4b;color:#fff;', !s1);
// Output: false

/* 转化为布尔值
-------------------------- */
console.log('%c 🍵 Boolean(s1): ', 'font-size:20px;background-color: #465975;color:#fff;', Boolean(s1));
// Output: true