# 基础类型
## Number
```typescript
/* 数字类型
-------------------------- */
const binaryNumber: number = 0b1010;
const octalNumber: number = 0o1721;
const decimalNumber: number = 45;
const hexNumber: number = 0x1e3c;
```

## Boolean
```typescript
/* 布尔类型
-------------------------- */
const success: boolean = true;
const fail: boolean = false;
```

## String
```typescript
/* 字符串类型
-------------------------- */
const str1: string = '123Hello';
const id: number = 15
const str2: string = `hell,${id}`
```

## Array
```typescript
/* 数组类型
-------------------------- */
const numberArr: number[] = [2333];
const stringArr: string[] = ['Apple', 'Banana'];
/* 使用数组泛型
-------------------------- */
const otherNameArr: Array<number> = [1, 2, 3];

const doubleTypeArr: (string | number)[] = [123, 'Apple'];
```

## Tuple
```typescript
/* 元组类型
-------------------------- */
const tuple: [string, number, boolean] = ['a', 1, true];
```

## Enum
```typescript
/* 枚举类型
-------------------------- */
enum Roles {
  SUPER_ADMIN,
  ADMIN = 4,
  USER
}

console.log(Roles.SUPER_ADMIN);

console.log(Roles[4]);

/* 枚举类型的值也可以为字符串型
-------------------------- */
enum Direction {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}

console.log(Direction['Right'], Direction.Up); // Right Up

/* 异构
-------------------------- */
enum DirectionRefactoring {
  Up = 0,
  Down = "Down",
}
```

## Void
```typescript
/* void 类型
-------------------------- */
const consoleText = (text: string): void => {
  console.log(text)
};

// void 类型的变量可以赋值为 undefined 和 null
let voidVal = undefined;
voidVal = null;
```

## Any
```typescript
/* any 类型
-------------------------- */
let anyValue: any = 123;

anyValue = 'abc';
anyValue = false;

const anyArr: any[] = [1, 'a'];
```

## Undefined
```typescript
/* undefined 类型，是其他类型的子类型
-------------------------- */
const u: undefined = undefined;
```

## Null
```typescript
/* null 类型，是其他类型的子类型
-------------------------- */
const n: null = null;
```

## Never
```typescript
/* never 类型
-------------------------- */
const errorMessage = (message: string): never => {
  throw new Error(message)
};

const infiniteFunc = (): never => {
  while(true) {}
};

/* never 类型是任何类型的子类型，可以赋值给任何类型
-------------------------- */
const neverVariable = (() => {
  while(true) {}
})();

let num: number = 5;
num = neverVariable;

/* 没有类型是 never 的子类型或可以赋值给 never 类型（除了 never 本身）
 * 即使 any 类型也不可以赋值给 never 类型
-------------------------- */
```

## Object
```typescript
/* object 类型
-------------------------- */
let obj = {
  name: 'chara'
};

let obj2 = obj;
obj2.name = 'C';
console.log(obj);

function getObject(obj: object): void {
  console.log(obj)
}

getObject(obj2);
```

## Type Assertion
```typescript
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
```