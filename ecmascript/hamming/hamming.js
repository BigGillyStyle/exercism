class Hamming {
  compute(str1, str2) {
    if (str1.length !== str2.length) {
      throw new Error('DNA strands must be of equal length.');
    }

    const arr1 = str1.split('');
    let distance = 0;

    arr1.forEach((char, index) => {
      if (char !== str2[index]) {
        distance++;
      }
    });

    return distance;
  }
}

export default Hamming;
