// mac dinh moi thu (variables/functions)
// ben trong class la public
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// readonly: chi dc read chu ko dc sua
var Animal = /** @class */ (function () {
    function Animal(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.uid = Animal.id++;
    }
    Animal.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Animal.id = 0;
    return Animal;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(firstName, lastName, age, height) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.height = height;
        return _this;
    }
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}(Animal));
var tuchan1 = new Person("Tran", "Tu", 20, 170);
var tuchan2 = new Person("Tran", "Tu", 20, 170);
var tuchan3 = new Person("Tran", "Tu", 20, 170);
console.log(tuchan1, tuchan2, tuchan3);
console.log(Animal.id);
