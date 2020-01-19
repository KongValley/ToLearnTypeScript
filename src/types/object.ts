/* object 类型
-------------------------- */
let obj = {
  name: 'chara'
}

let obj2 = obj
obj2.name = 'C'
console.log(obj);

function getObject(obj: object): void {
  console.log(obj)
}

getObject(obj2)