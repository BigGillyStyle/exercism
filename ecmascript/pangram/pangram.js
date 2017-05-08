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
    const uniqueSentenceChars = [...new Set(lowerSentence.split(''))];
    const lowerAlphaChars = uniqueSentenceChars.filter(char => Pangram.lowerAlphaCharArray.indexOf(char) > -1)
    return lowerAlphaChars.length === Pangram.lowerAlphaCharArray.length;
  }
}

export default Pangram;
