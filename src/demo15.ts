// /**
//  * 
//  * Enum 枚举类型
//  * 
//  */
// /**
//  * 中级写法:
//  */
// // const Status = {
// //   MASSAGE: 0,
// //   SPA: 1,
// //   DABAOJIAN: 2,
// // };
// function getServe(status: any) {
//   if (status === Status.MASSAGE) {
//     return "massage";
//   } else if (status === Status.SPA) {
//     return "spa";
//   } else if (status === Status.DABAOJIAN) {
//     return "dabaojian";
//   }
// }
// const result = getServe(Status.SPA);

/**
 * 高级写法:
 */
enum Status {
  MASSAGE,
  SPA = 3,
  DABAOJIAN
}
function getParams(status: any) {
  if(status === Status.MASSAGE) {
    return 'massage'
  } else if (status === Status.SPA) {
    return 'spa'
  } else if (status === Status.DABAOJIAN) {
    return 'dabaojian'
  }
}
const params = getParams(Status.SPA)
console.log(params);
console.log(Status[0]); //  通过下标反查
