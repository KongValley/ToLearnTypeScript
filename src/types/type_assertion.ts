/* 类型断言
-------------------------- */
const getLength = (target: string | number): number => {
  if((<string>target).length || (target as string).length === 0) {
    return (<string>target).length
  } else {
    return target.toString().length
  }
};

getLength(123);
getLength('Apple');

/* 可以使用自定义类型保护来简化
-------------------------- */