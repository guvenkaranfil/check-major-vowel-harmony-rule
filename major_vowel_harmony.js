// this function checks the givend word, is word follows major vowel harmony rule
// In the begining, we think like there is no hard or soft letter
// And then, We check every letter of word with hardVowels and softVowels veriables
// After the loop, if 'isHardLetter' and 'isSoftLetter are true return will be false
// Because according the rule word doesn't have hard and soft vowels
// if only one veriable is false, result will be true
// Because that means,  the word have only one vowels elements.

const isHasMajorVowelHarmony = word => {
  const hardVowels = "aıou";
  const softVowels = "eiöü";

  let isHardLetter = false;
  let isSoftLetter = false;
  for (var i = 0; i < word.length; i++) {
    if (hardVowels.indexOf(word[i]) !== -1) {
      isHardLetter = true;
    }
    if (softVowels.indexOf(word[i]) !== -1) {
      isSoftLetter = true;
    }
  }
  if (isHardLetter && isSoftLetter) return false;
  else if (isHardLetter || isSoftLetter) return true;
};

export default isHasMajorVowelHarmony;
