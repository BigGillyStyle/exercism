class Pangram {
  constructor(sentence) {
    this.sentence = sentence;
  }

  isPangram() {
    return new Set(this.sentence.toLowerCase().match(/[a-z]/g)).size === 26;
  }
}

export default Pangram;
