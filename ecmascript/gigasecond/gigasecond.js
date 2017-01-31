class Gigasecond {
  constructor(date) {
    this.date = date;
  }

  date() {
    const gigaMs = Math.pow(10, 9) * 1000;
    return new Date(this.date.getTime() + gigaMs);
  }
}

export default Gigasecond;
