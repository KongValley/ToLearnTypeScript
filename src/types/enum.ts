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