const lowerAlphaCharArray = 'abcdefghijklmnopqrstuvwxyz'.split('');

class Pangram {
  constructor(sentence) {
    this.sentence = sentence;
  }

  isPangram() {
    const lowerSentence = this.sentence.toLowerCase();
    return lowerAlphaCharArray.every(char => lowerSentence.includes(char));
  }
}

export default Pangram;
