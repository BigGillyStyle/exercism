class PhoneNumber {
  constructor(phoneNum) {
    this.phoneNum = phoneNum;
  }

  number() {
    if (this.phoneNum.match(/[a-z]/gi)) return null;
    let digitsOnly = this.phoneNum.match(/[0-9]/g);
    const len = digitsOnly.length;
    if (len < 10 || len > 11 || len === 11 && digitsOnly[0] !== '1') return null;
    if (digitsOnly.length === 11) digitsOnly.splice(0, 1);
    return digitsOnly.join('');
  }
}

export default PhoneNumber;
