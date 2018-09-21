class Clock {
  constructor() {
    // 1. Create a Date object.
    this.start = new Date();

    // 3. Call printTime.
    this.printTime(this.start);

    // 4. Schedule the tick at 1 second intervals.
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // 2. Store the hours, minutes, and seconds.
    // let hours = start.getHours();
    // let minutes = start.getMinutes();
    // let seconds = start.getSeconds();
    let hours = this.start.getHours();
    let minutes = this.start.getMinutes();
    let seconds = this.start.getSeconds();
    // Format the time in HH:MM:SS
    console.log(`${hours}:${minutes}:${seconds}`);
    // Use console.log to print it.
  }

  _tick() {
    // 1. Increment the time by one second.
    this.start.setSeconds(this.start.getSeconds() + 1);

    // 2. Call printTime.
    console.log(this.printTime());
  }
}

const clock = new Clock();
