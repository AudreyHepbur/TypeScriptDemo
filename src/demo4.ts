// 函数无返回值时定义方法
function tosay(): void {
  console.log('定义vido');
  // return 1 + 1 //  注意:加入任何返回值，程序都会报错
}
tosay()


// never返回值类型
// 如果一个函数是永远也执行不完的，就可以定义返回值为never
// 抛出了异常，这时候就无法执行完了
function errorFunction(): never {
  console.log('Error');
  throw new Error()
}
errorFunction()

// 死循环
function forNever(): never {
  while (true) {}
  console.log("Hello JSPang");
}
forNever()