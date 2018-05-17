// Writing to the dom

// Begin Print Ex Stuff
const flaws = input => {
  let flawsOutput = '';
  const flawsArray = input.flaws;
  flawsArray.forEach((flaw) => {
    flawsOutput += `${flaw}, `;
  });
  return flawsOutput.slice(0, -2); // removes trailing comma and space
};

const printExDetails = exs => {
  let output = '';
  exs.forEach(ex => {
    const flawsDom = flaws(ex);
    output += `
    <div class="panel panel-default">
      <div class="panel-body">
        <img class='img-ex img-responsive' src='${ex.imageUrl}' draggable="false" alt='One of my exs'>
      </div>
      <div class="panel-footer">
        <h2>Name: ${ex.name}</h2>
        <h2>Age: ${ex.age}</h2>
        <h2>Flaws: ${flawsDom}</h2></div>
    </div>`;
  });
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
        <button type="button" class="button btn-location" data-container="body" data-toggle="popover" data-html="true" data-placement="bottom"
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
  printExDetails,
  printLocations,
};
