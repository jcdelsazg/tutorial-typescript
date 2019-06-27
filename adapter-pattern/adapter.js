var Iphone8 = /** @class */ (function () {
    function Iphone8() {
    }
    Iphone8.prototype.useLightning = function () {
        console.log('Using lightning port...');
    };
    return Iphone8;
}());
var Xiaomi9 = /** @class */ (function () {
    function Xiaomi9() {
    }
    Xiaomi9.prototype.useUsbTypeC = function () {
        console.log('Using UsbTypeC port...');
    };
    return Xiaomi9;
}());
var LightningToUsbTypeCAdapter = /** @class */ (function () {
    function LightningToUsbTypeCAdapter(iphone) {
        this.iphoneDevice = iphone;
    }
    LightningToUsbTypeCAdapter.prototype.useUsbTypeC = function () {
        console.log('Want to use UsbTypeAdapterC converting to Lightning...');
        this.iphoneDevice.useLightning();
    };
    return LightningToUsbTypeCAdapter;
}());
var UsbTypeCAdapterToLightning = /** @class */ (function () {
    function UsbTypeCAdapterToLightning(xiaomi) {
        this.xiaomiDevice = xiaomi;
    }
    UsbTypeCAdapterToLightning.prototype.useLightning = function () {
        console.log('Want to use Lightning converting to UsbTypeC...');
        this.xiaomiDevice.useUsbTypeC();
    };
    return UsbTypeCAdapterToLightning;
}());
var iphone = new Iphone8();
var chargeAdapter = new LightningToUsbTypeCAdapter(iphone);
chargeAdapter.useUsbTypeC();
var xiaomi = new Xiaomi9();
var chargeAdapter2 = new UsbTypeCAdapterToLightning(xiaomi);
chargeAdapter2.useLightning();
