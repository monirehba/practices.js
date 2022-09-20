function summery(text, tedad) {
  const sum = text.substring(0, tedad);
  return `${sum}...`;
}
console.log(summery("bah bah emryz ajab havaye khubie!", 5));

function secretCard(cardNumber) {
  const first12 = string(cardNumber).substring(0, 12);
  return `${first12}****`;
}
console.log(secretCard(6104337547959658));

function censor(text, word) {
  const censoredText = text.replaceAll(word, "*".repeat(word.length));
  return censoredText;
}
console.log(censor("bah bah emryz ajab havaye khubie!", "bah bah"));

function level(expAge) {
  if (expAge <= 2) {
    return "junior";
  } else if (expAge <= 5) {
    return "mid level";
  } else {
    return "senior";
  }
}
console.log(level(8));

//  return expAge<=2 ? 'junior' ? expAge <=5 ? 'mid level' : "senior"
