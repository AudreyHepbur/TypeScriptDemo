// // TypeScript 类的 Getter,Setter和static 使用
// class Person {
//   constructor(private _age: number) {}    // _age是私有的
//   get age() {   // getter属性的关键字是get
//     return this._age -10
//   }
//   set age(age:number) {
//     this._age = age + 3
//   }
// }
// // 类的外部用没办法改变, 可以用setter属性进行改变

// const person = new Person(28)
// person.age = 35
// console.log(person.age);


// 只读属性
// class Person {
//   public readonly _name: string
//   constructor (name: string) {
//     this._name = name
//   }
// }
// const person = new Person('jieke')
// person._name = 'rules'
// console.log(person._name);




// // 类中的 static(静态修饰符)
// class Person {
//   sayTell() {
//     return 'hello world'
//   }
// }
// const person = new Person()
// console.log(person.sayTell());


// 不需要new出对象,直接使用static
// class Person {
//   static sayLove() {
//     return 'hello word'
//   }
// }
// console.log(Person.sayLove());
