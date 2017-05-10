class PhoneNumber {
  constructor(phoneNum) {
	  this.phoneNum = phoneNum;
  }

  number() {
    const sanitzedPhoneNum = this.phoneNum.replace(/[\(\)\. \-]/g, "");
	  const match = sanitzedPhoneNum.match(/^1?(\d{10})$/);
	  return match && match[1];
  }
}

export default PhoneNumber;
