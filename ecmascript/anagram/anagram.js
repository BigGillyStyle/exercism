export default class Anagram {
  constructor(word) {
    this.word = word;
  }

  matches(...list) {
    if (Array.isArray(list[0])) list = list[0];

    const sortedWord = this.word.toLowerCase().split('').sort().join('');
    return list.filter(item => {
      const sortedItem = item.toLowerCase().split('').sort().join('');
      return this.word.toLowerCase() !== item.toLowerCase() &&
        item.length === this.word.length &&
        sortedItem === sortedWord;
    })
  }
}
