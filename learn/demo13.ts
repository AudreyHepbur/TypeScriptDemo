// 类的抽象类
// 关键词 abstract
abstract class Person {
  abstract skill()
}

class Waiter extends Person {
  skill() {
    console.log('滑雪');
  }
}
const waiter = new Waiter()
console.log(waiter.skill());

class BaseTeacher extends Person {
  skill() {
    console.log('蹦极');
  }
}
const baseTeacher = new BaseTeacher()
console.log(baseTeacher.skill());


class SeniorTeacher extends Person {
  skill() {
    console.log('冲浪');
  }
}
const seniorTeacher = new SeniorTeacher()
console.log(seniorTeacher.skill());