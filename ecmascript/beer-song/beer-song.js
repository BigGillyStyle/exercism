class Beer {
  static verse(bottleNum) {
    return `${Beer.firstSentence(bottleNum)}
${Beer.secondSentence(bottleNum)}
`;
  }

  static numToBottleString(bottleNum, startOfPhrase = false) {
    const word = startOfPhrase ? 'No' : 'no'
    const num = bottleNum > 0 ? bottleNum : `${word} more`;
    return `${num} bottle${num !== 1 ? 's' : ''}`;
  }

  static firstSentence(bottleNum) {
    return `${Beer.numToBottleString(bottleNum, true)} of beer on the wall, ${Beer.numToBottleString(bottleNum)} of beer.`;
  }

  static secondSentence(bottleNum) {
    const nextBottleNum = bottleNum - 1;
    if (nextBottleNum >= 0) {
      return `Take ${nextBottleNum > 0 ? 'one' : 'it'} down and pass it around, ${Beer.numToBottleString(nextBottleNum)} of beer on the wall.`;
    } else {
      return 'Go to the store and buy some more, 99 bottles of beer on the wall.'
    }
  }

  static sing(from = 99, to = 0) {
    let song = '';
    while (from >= to) {
      song += Beer.verse(from);
      from -= 1;
      if (from >= to) song += '\n';
    }
    return song;
  }
}

export default Beer;
