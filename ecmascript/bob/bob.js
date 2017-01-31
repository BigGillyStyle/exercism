class Bob {
  hey(message) {
    if (!message || message.trim().length == 0) {
      return 'Fine. Be that way!';
    } else if (message.endsWith('?')) {
      return 'Sure.';
    } else if (message.endsWith('!')) {
      return 'Whoa, chill out!';
    }
    return 'Whatever.';
  }
}

export default Bob;
