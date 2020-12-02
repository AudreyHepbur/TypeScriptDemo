// 函数参数为对象(解构)时
function add({ one, two }) {
  return one + two
}
const total = add({ one: 1, two: 2 })
console.log(total);


// 类型注解
function add1({ one, two }: { one: number, two: number }): number {
  return one + two;
}

const total1 = add1({ one: 1, two: 2 });


// 例1
function getNumber({ one }: { one: number }) {
  return one
}
getNumber({ one: 1 })


// TypeScript中的数组类型的定义
const numberArr = [1, 2, 3, 4, 5]

// 字符串类型数组
const numberArr: string[] = ['1', '3', '4', '5']
// 数字类型数组
const numberArr: number[] = [1, 2, 3, 4, 5, 66, 6]
// 任意类型数组
const undefinedArr: undefined[] = [undefined, undefined]

// 多种类型定义
const erveryThing: (number | string)[] = [1, 'ssdsd', undefined]


// 数组对象类型的定义
// 复杂麻烦
const arrObj: { name: string, age: number }[] = [
  { name: 'ruth', age: 26 },
  { name: 'jeek', age: 24 }
]

// 类型别名写法
type Lady = { name: string, age: number }
const arrObj1: Lady[] = [
  { name: '刘奶奶', age: 88 },
  { name: '刘姥姥', age: 89 },
]

// 类定义写法
class Madam {
  name: string;
  age: number
}

const xiao :Madam[] = [
  { name: '刘奶奶', age: 88 },
  { name: '刘姥姥', age: 89 },
]