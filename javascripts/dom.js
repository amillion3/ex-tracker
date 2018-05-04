// Writing to the dom

const flaws = input => {
  let flawsOutput = '';
  const flawsArray = input[0].flaws;
  flawsArray.forEach((flaw) => {
    flawsOutput += `${flaw}, `;
  });
  return flawsOutput.slice(0, -2); // removes trailing comma and space
};

const printExPhoto = input => {
  const output = `<img class='img-ex' src='${input[0].imageUrl}' alt='My ex, Ann Veal'>`;
  return output;
};

const printExDetails = input => {
  const flawsDom = flaws(input);
  const output = `
  <p>Name: ${input[0].name}</p>
  <p>Age: ${input[0].age}</p>
  <p>Flaws: ${flawsDom}</p>`;
  return output;
};

module.exports = {
  printExPhoto,
  printExDetails,
};
