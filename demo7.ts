// TypeSript 中的 interface 接口
const screenResult = (name: string, age: number, bust: number) => {
  age < 24 && bust >= 90 && console.log(name + '进入面试');
  age > 24 || (bust < 90 && console.log(name + '你被淘汰'));
};
screenResult('das', 18, 68)


// 定义接口
interface Girl {
  name: string
  age: number
  bust: number
}

const screenResult1 = (girl: Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试');
  girl.age > 24 || (girl.bust < 90 && console.log(girl.name + '你被淘汰'));
};
const getResume = (girl: Girl) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "身高是：" + girl.bust);
};
const girl = {
  name: '妲己',
  age: 18,
  bust: 24
}
screenResult1(girl)
getResume(girl)



// 接口和类型别名的区别
// 接口
interface Girl {
  name: string
  age: number
  bust: number
  waistline?: number
}
const getResume2 = (girl: Girl) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "胸围是：" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
};
