// // 类的构造函数
// class Person {
//   public name: string
//   constructor(name:string) {
//     this.name = name
//   }
// }
// const person = new Person('jspang')
// console.log(person.name)


// // 类的构造函数(简写)
// class Person {
//   constructor(public name:string) {}
// }
// const person = new Person('jspang')
// console.log(person.name);


// 类继承中的构造器写法
// 在子类中使用构造函数需要用super()调用父类的构造函数

// // 这就是子类继承父类并有构造函数的原则，就是在子类里写构造函数时，必须用super()调用父类的构造函数，如果需要传值，也必须进行传值操作。就是是父类没有构造函数，子类也要使用super()进行调用，否则就会报错。
// class Person{
//   constructor(public name: string) {}
// }
// class Teacher extends Person{
//   constructor(public age:number) {
//     super('jspang')
//   }
// }
// const teacher = new Teacher(18)
// console.log(teacher.name);
// console.log(teacher.age);


// // 父类没有构造函数，子类也要使用super()进行调用，否则就会报错。
// class Person{}

// class Teacher extends Person{
//     constructor(public age:number){
//         super()
//     }
// }

// const teacher = new Teacher(18)
// console.log(teacher.age)