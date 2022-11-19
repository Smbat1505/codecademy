// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};
// factory function that produces new specimen with an id and a dna and rna sequence
function pAequorFactory(specimenNum) {
  this.specimenNum = specimenNum;
  this.dna = mockUpStrand();
  mockUpStrand();

  // changes one Base in the dna sequence
  (this.mutate = function () {
    indexToChange = Math.floor(Math.random() * this.dna.length);
    this.dna[indexToChange] = returnRandBase();
    return this.dna, (this.rna = this.transcribe());
  }),
    // compares 2 specimen's dna and logs the similarity in a percentage
    (this.compareDNA = function (pAequor) {
      let counter = 0;
      console.log(this.dna);
      console.log(pAequor.dna);
      for (var i = 0; i < pAequor.dna.length; i++) {
        if (this.dna[i] == pAequor.dna[i]) counter++;
      }
      let percent = Math.floor((counter / pAequor.dna.length) * 100);
      return `specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${percent}% DNA in common`;
    }),
    // gives a true value if the specimen have at least 60% "C" or "G" bases
    (this.willLikelySurvive = function () {
      var counter = 0;
      for (var i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') counter++;
      }
      var percent = Math.floor((counter / this.dna.length) * 100);
      if (percent >= 60) {
        return `with a survival percentage of ${percent}%, this specimen will likely survive.`;
      } else {
        return `with a survival percentage of ${percent}%,this specimen will NOT survive.`;
      }
    }),
    // transcribes the dna sequence and returns the proper rna sequence
    (this.transcribe = function () {
      var currentBase = '';
      var rna = [];
      for (var i = 0; i <= this.dna.length; i++) {
        switch (this.dna[i]) {
          case 'A':
            rna.push('U');
            break;
          case 'T':
            rna.push('A');
            break;
          case 'C':
            rna.push('G');
            break;
          case 'G':
            rna.push('C');
            break;
        }
      }

      return (this.rna = rna);
    }),
    (this.rna = this.transcribe());
}

// let dnaA = mockUpStrand();

let specimen_1 = new pAequorFactory(1);
let specimen_2 = new pAequorFactory(2);
console.log(`dna strand for specimen_1 = ${specimen_1.dna}`);
console.log(`rna strand for specimen_1 = ${specimen_1.rna}`);
console.log(`------------------------------`);
console.log(`dna strand for specimen_2 = ${specimen_2.dna}`);
console.log(`rna strand for specimen_2 = ${specimen_2.rna}`);
specimen_1.mutate();
specimen_2.mutate();
console.log(`after .mutate()`);
console.log(`dna strand for specimen_1 = ${specimen_1.dna}`);
console.log(`rna strand for specimen_1 = ${specimen_1.rna}`);
console.log(`------------------------------`);
console.log(`dna strand for specimen_2 = ${specimen_2.dna}`);
console.log(`rna strand for specimen_2 = ${specimen_2.rna}`);
console.log(`comparing dna`);
console.log(specimen_1.compareDNA(specimen_2));
console.log(specimen_2.compareDNA(specimen_1));
console.log(`survival rates:`);
console.log(specimen_1.willLikelySurvive());
console.log(specimen_2.willLikelySurvive());
