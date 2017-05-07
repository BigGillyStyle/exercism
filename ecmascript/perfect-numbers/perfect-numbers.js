class PerfectNumbers {
  classify(num) {
    if (!Number.isInteger(num) || num < 1) throw 'Classification is only possible for natural numbers.';

    const aliquotSum = this.factors(num).reduce((acc, val) => acc + val, 0);
    if (aliquotSum === num) {
      return 'perfect';
    } else if (aliquotSum > num) {
      return 'abundant';
    }
    return 'deficient';
  }

  factors(num) {
    const startNum = Math.floor(num / 2);
    const intRange = [...Array(startNum).keys()].map(i => i+1);
    return intRange.filter(div => this.isDivisor(num, div));
  }

  isDivisor(num, div) {
    return num % div === 0;
  }
}

export default PerfectNumbers;
