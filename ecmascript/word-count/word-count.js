class Words {
  count(str) {
    const result = {};
    if (!str || str.trim().length === 0) {
      return result;
    }

    const words = str.trim().replace(/\n/g, ' ').replace(/\r/g, ' ').replace(/\t/g, ' ').toLowerCase().split(' ').filter(elem => elem !== ' ');
    words.forEach((word) => {
      if (result[word]) {
        result[word] = result[word] + 1;
      } else {
        result[word] = 1;
      }
    });
    return result;
  }
}

export default Words;
