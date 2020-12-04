/**
 * 
 * TypeScript 类中泛型——难点✨✨✨✨✨
 * 
 */
// 基本类
class SelectBooks {
  constructor(public tabelBooks: string[]) { }
  getTabelBooks(index: number): string {
    return this.tabelBooks[index]
  }
}
const selectBooks = new SelectBooks(['童话书', '经管类', '财经类'])
const data1 = selectBooks.getTabelBooks(2)
console.log(data1);

// 
interface Type {
  name: string
  aggressivity: number
  weapon: string
  sex?: string
}
class SelectObj {
  constructor(public params: Type[]) { }
  getObj(val: number): number | string {
    return this.params[val].weapon
  }
}
const yuanshen = [
  { name: '琴', aggressivity: 8000, weapon: 'sword' },
  { name: '迪卢克', aggressivity: 30000, weapon: 'knife' }
]
const selectObj = new SelectObj(yuanshen)
console.log(selectObj.getObj(1));



class SelectGirl {
  constructor(public girls: string[] | number[]) { }
  getGirl(index: number): string | number {
    return this.girls[index]
  }
}

/**
 * 
 * 初始类的泛型
 * 
 */
class GetBoy<T> {
  constructor(private lads: T[]) { }
  getBoys(index: number): T {
    return this.lads[index]
  }
}
const getBoy = new GetBoy<string>(['温蒂', '琴', '班尼特', '迪卢克'])
console.log(getBoy.getBoys(1));

/**
 * 
 * 泛型中的继承
 * 
 */
interface Girl {
  name: string
}

class SelectWeapon<T extends Girl> {
  constructor(public val: T[]) { }
  getWeapon(index: number): string {
    return this.val[index].name
  }
}
const selectWeapon = new SelectWeapon([
  { name: "可莉" },
  { name: "钟离" },
  { name: "达达利亚" },
  { name: "砂糖" }
])
console.log(selectWeapon.getWeapon(1));


/**
 * 
 * 泛型约束
 * 
 */
class SelectClothing<T> {
  constructor(public style: T[]) { }
  getClothing(val: number): T {
    return this.style[val]
  }
}
const selectClothing = new SelectClothing<string>([ '重云', '雷泽', '香磷', '莫娜' ])
console.log(selectClothing.getClothing(2));
//  进行约束
class SelectClothing1<T extends number | string> {
  //.....
}