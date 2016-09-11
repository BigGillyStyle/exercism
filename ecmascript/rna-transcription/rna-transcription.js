class Transcriptor {
  constructor() {
    this.dnaToRnaMapping = {
      'G': 'C',
      'C': 'G',
      'T': 'A',
      'A': 'U'
    }
  }

  toRna(dna) {
    return [...dna].map((nucleotide) => this.dnaToRnaMapping[nucleotide]).join('');
  }
}

export default Transcriptor;