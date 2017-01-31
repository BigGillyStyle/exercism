class Gigasecond {
  constructor(date) {
    this.dateIn = date;
  }

  static get gigaMilliseconds() {
    return Math.pow(10, 12);
  }

  date() {
    return new Date(this.dateIn.getTime() + Gigasecond.gigaMilliseconds);
  }
}

export default Gigasecond;
