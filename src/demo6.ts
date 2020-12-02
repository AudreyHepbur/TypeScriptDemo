// TypeScript中元组的使用和类型约束

// 元组的基本运用
type Person = [string, string, number]
// 严谨的编程就需要用到元组了
const xiaojiejie = ["dajiao", "teacher", 28];
// 注解
const xiaojiejie1: (string | number)[] = ["dajiao", 28, "teacher"];
// 元组注解
const xiaojeijie2: [string, number, string] = ["dajiao", 28, "teacher"];
// 严谨写法 === 元组注解
const xiaojiejies: Person[] = [
  ["dajiao", "teacher", 28],
  ["liuying", "teacher", 18],
  ["cuihua", "teacher", 25],
];

