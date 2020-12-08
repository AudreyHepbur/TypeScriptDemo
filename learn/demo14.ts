/**
 * 
 * 联合类型和 类型保护
 * 
 */
interface Waiter {
  anjiao: boolean;
  say: () => {};
}

interface Teacher {
  anjiao: boolean;
  skill: () => {};
}
/**
 * 
 * 联合类型，关键符号是|(竖线)
 * 
 */

function judgeOccupation(animal: Waiter | Teacher) {}

/**
 * 
 * 会报错，因为judgeWho不能准确的判断联合类型具体的实例是什么
 * 
 */
// function judgeWho(animal: Waiter | Teacher) {
//   animal.say();  // 报错
// }


/**
 * 
 * 类型保护——类型断言
 * 
 */
interface Student {
  isShow: boolean
  hello:() => {}
}
interface Teacher {
  isShow: boolean
  teach:() => {}
}

function HandelGetData(data: Student | Teacher) {
  if(data.isShow) {
    (data as Student).hello()
  } else {
    (data as Teacher).teach()
  }
}



/**
 * 
 * 类型保护——in语法
 * 
 */
function judgeWhoTwo(animal: Waiter | Teacher) {
  if('skill' in animal) {
    animal.skill()
  } else {
    animal.say()
  }
}


/**
 * 
 * 类型保护——typeof语法
 * 
 */
// // 不做任何的类型保护，只是相加，这时候就会报错
// // function add(first: string | number, second: string | number) {
// //   return first + second
// // }

// // typeof类型保护处理
// function add(first: string | number, second: string | number) {
//   if (typeof first === 'string' || typeof second === 'string') {
//     return first + second   // 报错 
//   }
//   return first + second //TS自动判断
// }



/**
 * 
 * 类型保护——instanceof语法
 * instanceof 只能用在类上
 */
class NumberObj {
  count: number
}
// 不进行类型保护,报错
// function addObj(first: object | NumberObj, second: object | NumberObj) {
//   return first.count + second.count
// }
// instanceof类型保护处理
function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count
  }
  return 0
}