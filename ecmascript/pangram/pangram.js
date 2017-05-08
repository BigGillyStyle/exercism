class Pangram {
  static get lowerAlphaCharArray() {
    return 'abcdefghijklmnopqrstuvwxyz'.split('');
  }

  constructor(sentence) {
    this.sentence = sentence;
  }

  isPangram() {
    if (!this.sentence) return false;

    const lowerSentence = this.sentence.toLowerCase();
    return Pangram.lowerAlphaCharArray.every(char => lowerSentence.includes(char));
  }
}

export default Pangram;
