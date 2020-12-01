

// 允许加入任意值
interface Girl {
  name: string
  age: number
  bust: number
  waistline?: number
  [propname: string]: any // 属性的名字是字符串类型，属性的值可以是任何类型。
}
// 属性的名字只能是 string 和 number

const getResume = (girl: Girl) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "身高是：" + girl.bust);
  girl.waistline && console.log(girl.name + "体重是：" + girl.waistline);
  girl.sex && console.log(girl.name + "性别是：" + girl.sex);
};
const girl3 = {
  name: '妲己',
  age: 18,
  bust: 24,
  waistline: 22,
  sex: "女"
}
getResume(girl3)

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// 接口里的方法
interface Boy {
  name: string
  age: number
  sex: string
  waistline1?: string
  [propname: string]: any
  say() : string
}

const getResume1 = (girl: Girl) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "身高是：" + girl.bust);
  girl.waistline && console.log(girl.name + "体重是：" + girl.waistline);
  girl.sex && console.log(girl.name + "性别是：" + girl.sex);
  console.log('：'+girl.say());
  
};
const boy = {
  name: '小刚',
  age: 35,
  bust: 65,
  waistline: 22,
  sex: '男',
  say() {
    return '路南'
  }
}
getResume1(boy)


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
interface Father {
  name: string
  age: number
  sex: string
  waistline1?: string
  [propname: string]: any
  say() : string
}

// 接口和类的约束

// 错误写法
// class XiaoJieJie implements Girl {}

// 完整写法
// class XiaoJieJie implements Boy {
//   name = '哈尔'
//   age = 200
//   bust = 11
//   sax = '男'
//   say() {
//     return '哈尔的移动城堡'
//   }
// }


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 接口间的继承
interface Teacher extends Father {
  teach(): string
}

const boy1 = {
  name: '凯瑞',
  age: 32,
  bust: 32,
  waistline: 21,
  sex: "女",
  say() {
    return "欢迎光临 ！！";
  },
  teach() {
    return "我是一个老师";
  },
}
const getResume4 = ( boy: Teacher ) => {
  console.log(boy.name + "年龄是：" + boy.age);
  console.log(boy.name + "身高是：" + boy.bust);
  boy.waistline && console.log(boy.name + "体重是：" + boy.waistline);
  boy.sex && console.log(boy.name + "性别是：" + boy.sex);
}
getResume4(boy1)