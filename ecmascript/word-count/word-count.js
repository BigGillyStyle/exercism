class Words {
  count(str) {
    const result = {};
    if (!str || str.trim().length === 0) {
      return result;
    }

    const words = str.trim().toLowerCase().split(/\s+/g);
    words.forEach(word => result[word] = (result.hasOwnProperty(word) ? result[word] : 0) + 1);
    return result;
  }
}

export default Words;
