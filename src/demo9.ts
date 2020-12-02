// // 类的基本使用
// class teacher {
//   constent = 'Hellow world'
//   sayHello() {
//     return '凛冬将至'
//   }
// }

// const goods = new teacher()
// console.log(goods.sayHello());


// // 类的继承
// class Student {
//   content = '长夜漫漫'
//   sayHello() {
//     return this.content
//   }
// }

// class Parent extends Student {
//   sayLove() {
//     return 'wing'
//   }
// }

// const goddess = new Parent()
// console.log(goddess.sayHello());
// console.log(goddess.sayLove());


// // 类的重写
// class Student {
//   content = '长夜漫漫'
//   sayHello() {
//     return this.content
//   }
// }

// class Parent extends Student {
//   sayLove() {
//     return 'wing'
//   }
//   sayHello() {
//     return "Hi , honey!";
//   }
// }

// const goddess = new Parent()
// console.log(goddess.sayHello());
// console.log(goddess.sayLove());


// super关键字代码使用父类中的方法
class Student {
  content = '父类'
  sayHello() {
    return this.content
  }
}

class Parent extends Student {
  sayLove() {
    return 'wing'
  }
  sayHello() {
    return super.sayHello() + "··········子类父类方法名相同情况!";
  }
}
const goddess = new Parent()
console.log(goddess.sayHello());
console.log(goddess.sayLove());