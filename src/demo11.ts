// // 类的构造函数
class Teacher {
  public _title: string
  constructor(content: string) {
    this._title = content
  }
}
const teacher = new Teacher('lili')
console.log(teacher._title);



// 类的构造函数(简写)
class Nurse {
  constructor(public name: string){}
}
const nurse = new Nurse('职业')
console.log(nurse.name);


// 类继承中的构造器写法
// 在子类中使用构造函数需要用super()调用父类的构造函数

// // 这就是子类继承父类并有构造函数的原则，就是在子类里写构造函数时，必须用super()调用父类的构造函数，如果需要传值，也必须进行传值操作。就是是父类没有构造函数，子类也要使用super()进行调用，否则就会报错。
class Parent {
  constructor(public name: string){}
}
class Children extends Parent {
  constructor(public age:number) {
    super('教父')
  }
}
const children = new Children(68)
console.log(children.name);
console.log(children.age);



// // 父类没有构造函数，子类也要使用super()进行调用，否则就会报错。

class Mother {}
class Boy extends Mother {
  constructor(public name: string){
    super()
  }
}
const boy = new Boy('男孩')
console.log(boy.name);
