
function learn() {
  const content: string = '路漫漫其修远兮，吾将上下而求索'
  console.log(content);
}
learn()

/**
 * 
 * ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 * ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑正文↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 * 
 */


 interface Formate {
  content: string
  sayTell(): string
}

//类
class Person {
  public content = '路漫漫其修远兮'
  sayTell() {
    return this.content + ', 吾将上下而求索'
  }
}
const person:Formate = new Person()
console.log(person.sayTell())
