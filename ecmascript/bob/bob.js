class Bob {
  hey(message) {
    if (!message || message.trim().length == 0) {
      return 'Fine. Be that way!';
    } else if (message.match(/[a-z]/i) && message === message.toUpperCase()) {
      return 'Whoa, chill out!';
    } else if (message.endsWith('?')) {
      return 'Sure.';
    }
    return 'Whatever.';
  }
}

export default Bob;
