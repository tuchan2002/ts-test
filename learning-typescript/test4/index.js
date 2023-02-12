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
var Employee = /** @class */ (function () {
    function Employee(name, age) {
        this.name = name;
        this.age = age;
    }
    Employee.prototype.getInfo = function () {
        return "".concat(this.name, ", ").concat(this.age);
    };
    return Employee;
}());
var FulltimeEmployee = /** @class */ (function (_super) {
    __extends(FulltimeEmployee, _super);
    function FulltimeEmployee(name, age, salary) {
        var _this = _super.call(this, name, age) || this;
        _this.salary = salary;
        return _this;
    }
    FulltimeEmployee.prototype.getSalary = function () {
        return this.salary;
    };
    return FulltimeEmployee;
}(Employee));
var employee1 = new FulltimeEmployee("TuChan", 20, 3000);
console.log(employee1.getSalary());
