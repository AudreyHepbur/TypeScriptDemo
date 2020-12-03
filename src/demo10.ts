/**
 * 
 * TypeScript 中类的访问类型
 * 三个关键词private、protected和public
 * 
 */
// class Parson {
//   public name: string
// }

// const person = new Parson()
// person.name = 'jspang.com'
// console.log(person.name);


/**
 * 
 * public 属性讲解
 * 公共的,允许在类的内部和外部被调用.
 * 如果不在类里对name的访问属性进行定义，那么它就会默认是public访问属性
 * 
 */
// class Student {
//   public name:string  
//   public sayHello() {
//     console.log(this.name + ' say Hello');
//   }
// }
// ```````````````以下属于类的外部`````````````````````
// const student = new Student()
// student.name = 'huoihu'
// student.sayHello()



/**
 * 
 * private 属性讲解
 * private 私有的,只允许再类的内部被调用，外部不允许调用
 * 
 */
// class Teacher {
//   private content: string
//   public sayTell() {
//     return this.content + ' say Hello'      //此处不报错
//   }
// }
// //-------以下属于类的外部--------
// const teacher = new Teacher()
// teacher.content = 'pangoang'      //此处报错
// teacher.sayTell()
// console.log(teacher.content);     //此处报错


// protected 属性讲解
// protected 受保护的,允许在类内及继承的子类中使用
class Student {
  protected name: string
  public sayTell() {
    console.log(this.name + 'say Hello')  //此处不报错
  }
}
class Teacher extends Student {
  public sayBye() {
    return this.name
  }
}