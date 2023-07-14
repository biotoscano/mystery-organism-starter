// Returns a random DNA base
const returnRandBase = (excl = '') => {
  let dnaBases = ['A', 'T', 'C', 'G'];
  if (excl) { dnaBases = dnaBases.filter(b => b !== excl) };
  return dnaBases[Math.floor(Math.random() * dnaBases.length)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (specimenNum, arrDna) => {
  return {
    _specimenNum: specimenNum,
    _dna: arrDna,
    mutate() {
      const index = Math.floor((Math.random() * this._dna.length));
      this._dna[index] = returnRandBase(this._dna[index]);
      return this._dna;
    },
    compareDNA(pAequor) {
      console.log(pAequor);
      const sum = pAequor._dna.filter((b, i) => b === this._dna[i]).length;
      const percent = Math.floor(sum / this._dna.length * 100);
      return `specimen #1 and specimen #2 have ${percent}% DNA in common`
    },
    willLikelySurvive() {
      const sum = this._dna.filter(b => 'CG'.includes(b)).length;
      const percent = Math.floor(sum / this._dna.length * 100);
      return percent >= 60 ? true : false;
    }
  }
}

// function test() {
const arrAq = [];
for (let i = 1; i <= 30; i++) {
  arrAq.push(pAequorFactory(i, mockUpStrand()));
}
console.log(arrAq[0]._dna.join(''));
console.log(arrAq[0].mutate().join(''));
console.log(arrAq[0].willLikelySurvive());
console.log(arrAq[0].compareDNA(arrAq[1]));
// }








