var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getDescription = function () {
        return this.description;
    };
    return Car;
}());
var ModelS = /** @class */ (function (_super) {
    __extends(ModelS, _super);
    function ModelS() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = 'Model S';
        return _this;
    }
    ModelS.prototype.cost = function () {
        return 7300;
    };
    return ModelS;
}(Car));
var ModelX = /** @class */ (function () {
    function ModelX() {
        this.description = 'Model X';
    }
    ModelX.prototype.cost = function () {
        return 7700;
    };
    ModelX.prototype.getDescription = function () {
        return this.description;
    };
    return ModelX;
}());
var CarOptions = /** @class */ (function (_super) {
    __extends(CarOptions, _super);
    function CarOptions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CarOptions;
}(Car));
var EnhancedAutoPilot = /** @class */ (function (_super) {
    __extends(EnhancedAutoPilot, _super);
    function EnhancedAutoPilot(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    EnhancedAutoPilot.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ' Enhanced Auto pilot';
    };
    EnhancedAutoPilot.prototype.cost = function () {
        return this.decoratedCar.cost() + 5000;
    };
    return EnhancedAutoPilot;
}(CarOptions));
var RearFancingSeats = /** @class */ (function (_super) {
    __extends(RearFancingSeats, _super);
    function RearFancingSeats(car) {
        var _this = _super.call(this) || this;
        _this.decoratedCar = car;
        return _this;
    }
    RearFancingSeats.prototype.getDescription = function () {
        return this.decoratedCar.getDescription() + ' Rear fancing seats';
    };
    RearFancingSeats.prototype.cost = function () {
        return this.decoratedCar.cost() + 4000;
    };
    return RearFancingSeats;
}(CarOptions));
console.log('MyCar with abstract class');
var myCar = new ModelS();
myCar = new EnhancedAutoPilot(myCar);
console.log('Enhanced car with autopilot: ' +
    myCar.getDescription() +
    ', cost: ' +
    myCar.cost());
myCar = new RearFancingSeats(myCar);
console.log('Enhanced car with seats: ' +
    myCar.getDescription() +
    ', cost: ' +
    myCar.cost());
console.log('MyCar with interface');
var myCar2 = new ModelX();
myCar2 = new EnhancedAutoPilot(myCar2);
console.log('Enhanced car with autopilot: ' +
    myCar2.getDescription() +
    ', cost: ' +
    myCar2.cost());
myCar2 = new RearFancingSeats(myCar2);
console.log('Enhanced car with seats: ' +
    myCar2.getDescription() +
    ', cost: ' +
    myCar2.cost());
