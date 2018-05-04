// Writing to the dom

// Begin Print Ex Stuff
const flaws = input => {
  let flawsOutput = '';
  const flawsArray = input[0].flaws;
  flawsArray.forEach((flaw) => {
    flawsOutput += `${flaw}, `;
  });
  return flawsOutput.slice(0, -2); // removes trailing comma and space
};
const printExPhoto = input => {
  const output = `<img class='img-ex img-responsive' src='${input[0].imageUrl}' draggable="false" alt='My ex, Ann Veal'>`;
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
// End Print Ex Stuff
// Begin Print Location Stuff
const printLocations = input => {
  let output = '';
  input.locations.forEach(location => {
    output += `

    `;
  });
  return output;
};
// End Print Location Stuff

module.exports = {
  printExPhoto,
  printExDetails,
  printLocations,
};
