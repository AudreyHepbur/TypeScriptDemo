

// 允许加入任意值
interface Girl {
  name: string
  age: number
  bust: number
  waistline?: number
  [propname: string]: any // 属性的名字是字符串类型，属性的值可以是任何类型。
}

const getResume3 = (girl: Girl) => {
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
getResume3(girl3)



// 接口里的方法
interface Boy {
  name: string
  age: number
  sex: string
  waistline1?: string
  [propname: string]: any
  say() : string
}

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
console.log(boy);


// 接口和类的约束
class haar implements Boy {
  name = '哈尔'
  age = 200
  bust = 11
  sax = '男'
  say() {
    return '哈尔的移动城堡'
  }
}

// 接口间的继承
interface Teacher extends Boy {
  teach(): string
}

const boy1 = {
  name: '凯瑞',
  age: 32,
  bust: 32,
  waistline: 21,
  sex: "女",
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  },
  teach() {
    return "我是一个老师";
  },
}
const getResume4 = ( boy: Teacher ) => {
  console.log(boy.name + "年龄是：" + boy.age);
  console.log(boy.name + "胸围是：" + boy.bust);
  boy.waistline && console.log(boy.name + "腰围是：" + boy.waistline);
  boy.sex && console.log(boy.name + "性别是：" + boy.sex);
}
getResume4(boy1)