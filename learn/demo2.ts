
/**
 * ~~~~~~~~~~~~~~~~~~~~练习~~~~~~~~~~~~~~~~~~~~~~~~~~~
 */
interface Type {
  main: string
  titile: string
  age: string
  sayTell(): string
}

class Exparent {
  main = '元旦'
  titile = '国庆'
  age = '中秋'
  sayTell() {
    return '赛龙舟'
  }
}
const exparent: Type = new Exparent()
console.log(exparent.main);
console.log(exparent.sayTell());

// 类的继承
class Courage extends Exparent {
  sayHell() {
    return '孔明庙前有老柏'
  }
}
const courage = new Courage()
console.log(courage.sayTell());

/**
 * 
 * ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 * ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓正文↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
 * 
 */



let count: number = 1;

// 接口自定义静态类型
interface Xiaojiejie {
  uname: string,
  age: number
}

const xiaohong: Xiaojiejie = {
  uname: 'xiaohong',
  age: 18
}
// 基础静态类型
// null,undefinde,symbol,boolean，void这些都是最常用的基础数据类型
const count1: number = 857
const myName: string = 'wangwan'




// 对象类型
const objType: {
  name: string,
  age: number
} = {
  name: '大叫',
  age: 18
};
console.log(objType.name)



// 变量xiaoJieJies必须是一个数组，数组里的内容必须是字符串
// const xiaoJieJies: String[] = ["谢大脚", "刘英", 123]; //报错
const arrType: String[] = ['笑道', "刘能", '赵本山']



// 面向对象编程
class Teacher { }
// liuneng必须是一个Teacher类对应的对象才可以
const liuneng: Teacher = new Teacher()

const liuquan: () => string = () => {
  return '刘全'
}
// 对象类型可以有几种形式：
// 对象类型
// 数组类型
// 类类型
// 函数类型