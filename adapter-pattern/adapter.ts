interface Iphone {
  useLightning();
}

interface Xiaomi {
  useUsbTypeC();
}

class Iphone8 implements Iphone {
  useLightning() {
    console.log('Using lightning port...');
  }
}

class Xiaomi9 implements Xiaomi {
  useUsbTypeC() {
    console.log('Using UsbTypeC port...');
  }
}

class LightningToUsbTypeCAdapter implements Xiaomi {
  iphoneDevice: Iphone8;

  constructor(iphone: Iphone8) {
    this.iphoneDevice = iphone;
  }

  useUsbTypeC() {
    console.log('Want to use UsbTypeAdapterC converting to Lightning...');

    this.iphoneDevice.useLightning();
  }
}

class UsbTypeCAdapterToLightning implements Iphone {
  xiaomiDevice: Xiaomi9;

  constructor(xiaomi: Xiaomi9) {
    this.xiaomiDevice = xiaomi;
  }

  useLightning() {
    console.log('Want to use Lightning converting to UsbTypeC...');

    this.xiaomiDevice.useUsbTypeC();
  }
}

let iphone = new Iphone8();
let chargeAdapter = new LightningToUsbTypeCAdapter(iphone);

chargeAdapter.useUsbTypeC();

let xiaomi = new Xiaomi9();
let chargeAdapter2 = new UsbTypeCAdapterToLightning(xiaomi);

chargeAdapter2.useLightning();
