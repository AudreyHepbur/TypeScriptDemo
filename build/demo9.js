"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Student = (function () {
    function Student() {
        this.content = '父类';
    }
    Student.prototype.sayHello = function () {
        return this.content;
    };
    return Student;
}());
var Parent = (function (_super) {
    __extends(Parent, _super);
    function Parent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Parent.prototype.sayLove = function () {
        return 'wing';
    };
    Parent.prototype.sayHello = function () {
        return _super.prototype.sayHello.call(this) + "··········子类父类方法名相同情况!";
    };
    return Parent;
}(Student));
var goddess = new Parent();
console.log(goddess.sayHello());
console.log(goddess.sayLove());
//# sourceMappingURL=demo9.js.map