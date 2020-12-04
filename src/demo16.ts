/**
 * 
 * TypeScript 函数泛型——难点✨✨✨✨✨
 * 
 */
// 例1
function join(first: string | number, second: string | number) {
  return `${first}${second}`
}
const result = join('小吱', 1)
console.log(result);

// 例2
function judge<JSpang>(first: JSpang, second: JSpang) {
  return `${first}${second}`
}
const params = judge<number>(2, 5)
console.log(params);

// 例3
const estimate = <T>(first: T, second: T) => {
  return `${first}${second}`
}
console.log(estimate<number>(2,5));



/**
 * 
 * 泛型——数组中的使用
 * 
 */
// 写法一
function myArray<T>(params: T[]) {
  return params
}
const data = myArray<string>(['123', '456'])
console.log(data);

// 写法二
function myArray2<T>(params: Array<T>) {
  return params
}
const data2 = myArray2<string>(['789', '321'])
console.log(data2);

// 箭头函数
const myArray3 = <T>(params: T[]) =>{
    return params
}
console.log(myArray3<string>(['1', '3', '5']));


/**
 * 
 * 多个泛型的定义
 * 
 */
function getParams<T, P>(first: T, second: P) {
  return `${first}${second}`
}
getParams<number, string>(1, '2')

// 箭头函数
const _getParams = <T, P>(first: T, second: P) => {
  return `${first}${second}`
}
console.log(_getParams<number, string>(1, '2'));



/**
 * 
 * 泛型的类型推断
 * 不建议大量使用类型推断，这会让代码易读和健壮性都会下降
 */
function infer<T, P>(first: T, second: P) {
  return `${first}${second}`
}
infer(1, '2')   // 类型推断