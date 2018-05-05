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
  <h2>Name: ${input[0].name}</h2>
  <h2>Age: ${input[0].age}</h2>
  <h2>Flaws: ${flawsDom}</h2>`;
  return output;
};
// End Print Ex Stuff
// Begin Print Location Stuff
const printLocations = input => {
  let output = '';
  input.forEach(location => {
    const displayLocation = (location.address.split(',', 1));
    const mapUrl = `https://www.google.com/maps/place/${location.address}`;
    output += `
      <div class='col-sm-3 text-center location'>
        <button type="button" class="btn btn-location" data-container="body" data-toggle="popover" data-html="true" data-placement="bottom"
          data-content="${location.name}<br/>${displayLocation}<br/><a href='${mapUrl}' target='_blank' alt='Location'>Google Maps</a>">
              Details
        </button>
        <img draggable="false" class='img-loc-fixed img-responsive' src='${location.imageUrl}'>
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
