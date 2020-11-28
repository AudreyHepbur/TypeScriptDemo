### TypeScript

[^技术胖]: [走起](https://www.jspang.com/detailed?id=63)

`2020/11/28`——Ready Go

### TypeScript 开发环境搭建

1. **安装 Node 的运行环境**

2. **全局安装 typeScript**

   ```js
   yarn global add typescript
   ```

3. **ts-node 的安装和使用**

   ```js
   npm install -g ts-node
   ```

   安装完成后，就可以在命令中直接输入如下命令，来查看结果了

   ```js
   ts-node demo.ts
   ```

### TypeScript 的静态类型

> 定义一个数字类型的`count`的变量，这里的`: number`就是定义了一个静态类型。这样定义后`count`这个变量在程序中就永远都是数字类型了，不可以改变了

```js
const count: number = 1;
//错误代码
const count: number = 1;
count = "jspang";
```

> 自定义静态类型

```tsx
interface XiaoJieJie {
  uname: string;
  age: number;
}

const xiaohong: XiaoJieJie = {
  uname: "小红",
  age: 18,
};
```

[^如果使用了静态类型，不仅意味着变量的类型不可以改变，还意味着类型的属性和方法也跟着确定了。这个特点就大大提高了程序的健壮性，并且编辑器这时候也会给你很好的语法提示，加快了你的开发效率]: 

