class BlurayPlayer {
  on() {
    console.log('Bluray player turning on');
  }

  off() {
    console.log('Bluray player turning off');
  }

  play() {
    console.log('Bluray player starting disc...');
  }
}

class Amplifier {
  on() {
    console.log('Amplifier turning on');
  }

  off() {
    console.log('Amplifier turning off');
  }

  setSource(source: string) {
    console.log('Setting source to: ' + source);
  }

  setVolume(volume: number) {
    console.log('Setting volume to: ' + volume);
  }
}

class Lights {
  dim() {
    console.log('Lights are dimming...');
  }
}

class TV {
  turnOn() {
    console.log('TV on...');
  }
  turnOff() {
    console.log('TV off...');
  }
}

class PopCornMaker {
  turnOn() {
    console.log('Pop Corn maker on...');
  }
  turnOff() {
    console.log('Pop Corn maker off...');
  }
  pop() {
    console.log('Pop corn time!!...');
  }
}

class HomeTheaterFacade {
  private tv: TV;
  private blurayplayer: BlurayPlayer;
  private amplifier: Amplifier;
  private popcornmaker: PopCornMaker;
  private lights: Lights;

  constructor(
    tv: TV,
    blurayplayer: BlurayPlayer,
    amplifier: Amplifier,
    popcornMaker: PopCornMaker,
    lights: Lights
  ) {
    this.tv = tv;
    this.blurayplayer = blurayplayer;
    this.amplifier = amplifier;
    this.popcornmaker = popcornMaker;
    this.lights = lights;
  }

  public WatchMovie() {
    this.popcornmaker.turnOn();
    this.popcornmaker.pop();

    this.tv.turnOn();

    this.blurayplayer.on();
    this.blurayplayer.play();

    this.amplifier.on();
    this.amplifier.setSource('blurayplayer');
    this.amplifier.setVolume(30);

    this.lights.dim();
  }

  public endMovie() {
    this.popcornmaker.turnOff();
    this.blurayplayer.off();
    this.amplifier.off();
    this.tv.turnOff();
  }
}

let bluray = new BlurayPlayer();
let amp = new Amplifier();
let popcornmaker = new PopCornMaker();
let lights = new Lights();
let samsung = new TV();

let homeTheater = new HomeTheaterFacade(
  samsung,
  bluray,
  amp,
  popcornmaker,
  lights
);

homeTheater.WatchMovie();

console.log('We re watching the movie');

homeTheater.endMovie();
