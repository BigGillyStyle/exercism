export default class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(list) {
    const sortedWord = this.word.toLowerCase().split('').sort().join('');
    return list.filter(item => {
      const sortedItem = item.toLowerCase().split('').sort().join('');
      return this.word.toLowerCase() !== item.toLowerCase() &&
        item.length === this.word.length &&
        sortedItem === sortedWord;
    })
  }
}
