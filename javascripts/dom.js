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
  input.forEach(location => {
    const displayLocation = (location.address.split(',', 1));
    output += `
    <div class='col-sm-3 text-center'>
      <img draggable="false" class='img-loc-fixed img-responsive' src='${location.imageUrl}'>
      <button class="btn btn-location btn-block collapse-fixed" type="button" data-toggle="collapse" data-target="#loc-${location.id}" aria-expanded="false" aria-controls="loc-${location.id}">
          Details
      </button>
    <div class="collapse collapse-fixed-content" id="loc-${location.id}">
      <div class='expanded-container'>
        <p class='text-loc-name'>${location.name}</p>
        <p class='text-loc-address'>${displayLocation}</p>
        <p class='text-loc-timing'>${location.timeOfDay}</p>
      </div>
    </div>
  </div>`;
  });
  return output;
};
// End Print Location Stuff

module.exports = {
  printExPhoto,
  printExDetails,
  printLocations,
};
