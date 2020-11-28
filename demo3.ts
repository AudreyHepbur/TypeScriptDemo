// TypeScript 中的类型注解和类型推断✨✨✨✨✨

// 类型注解
const nameType: number = 2;

// 类型推断
const countInference = 123


// 如果 TS 能够自动分析变量类型， 我们就什么也不需要做了
// 如果 TS 无法分析变量类型的话， 我们就需要使用类型注解
// 类型注解的例子：
const one = 1;
const two = 2;
const three = one + two;


// 这里的one和two会显示为any类型
function getTotal(one, two) {
  return one + two
}
const tatal = getTotal(1, 2)


// 类型注解
function  getTotal1(one: number, two: number) {
  return one + two
}
console.log(getTotal1(1,2));


// 小坑
// total的值就不是number类型了，但是不会报错
function  getTotal2(one: number, two: number) {
  return one + two + ''
}
const taotal = getTotal1(1,2)
console.log(taotal);

// 正确写法
function getTotal3(one: number, two: number): number {
  return one + two
}

const taotal1 = getTotal1(1,2)
console.log(taotal1);