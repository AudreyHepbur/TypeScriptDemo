namespace Components {
  export namespace Subcomponents {  //  子命名空间
    export class Header {
      constructor() {
        const elem = document.createElement('div')
        elem.innerText = 'This. is Header'
        document.body.appendChild(elem)
      }
    }
    export class Content {
      constructor() {
        const elem = document.createElement('div')
        elem.innerText = 'This. is Content'
        document.body.appendChild(elem)
      }
    }
    export class Footer {
      constructor() {
        const elem = document.createElement('div')
        elem.innerText = 'This. is Footer'
        document.body.appendChild(elem)
      }
    }
  }
}

/**
 * 
 * ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 * ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑子命名空间↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
 * 
 */
// //  ES6 的 export 导出模式
// export class Header {
//   constructor() {
//     const elem = document.createElement("div");
//     elem.innerText = "This is Header";
//     document.body.appendChild(elem);
//   }
// }

// export class Content {
//   constructor() {
//     const elem = document.createElement("div");
//     elem.innerText = "This is Content";
//     document.body.appendChild(elem);
//   }
// }

// export class Footer {
//   constructor() {
//     const elem = document.createElement("div");
//     elem.innerText = "This is Footer";
//     document.body.appendChild(elem);
//   }
// }