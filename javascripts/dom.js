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
    <div class="panel panel-default col-sm-4" id="${ex.name}">
      <div class="panel-body">
        <img class='img-ex img-responsive' src='${ex.imageUrl}' draggable="false" alt='My ex, ${ex.name}'>
      </div>
      <div class="panel-footer">
        <h3>Name: ${ex.name}</h3>
        <h3>Age: ${ex.age}</h3>
        <h3>Flaws: ${flawsDom}</h3></div>
    </div>`;
  });
  return output;
};
// End Print Ex Stuff
// Begin Print Location Stuff
const printNamesIfLocationMatches = location => {
  let output = '';
  if (location.names.length > 0) {
    location.names.forEach(name => {
      output += name + ', ';
    });
  }
  return output.slice(0, -2);
};

const printLocations = input => {
  let output = '';
  input.forEach(location => {
    const displayLocation = (location.address.split(',', 1));
    const mapUrl = `https://www.google.com/maps/place/${location.address}`;
    output += `
      <div class='col-sm-3 text-center location'>
        <button type="button" class="button btn-location" data-container="body" data-toggle="popover" data-html="true" data-placement="bottom"
          data-content=
          "${location.name}<br/>
          ${displayLocation}<br/>
          ${printNamesIfLocationMatches(location)}<br/>
          <a href='${mapUrl}' target='_blank' alt='Location'>Google Maps</a>">
              Details
        </button>
        <img draggable="false" class='img-loc-fixed img-responsive' src='${location.imageUrl}'>
      </div>`;
  });
  return output;
};
// End Print Location Stuff

// Print single ex-view
const setupSingleExView = () => {
  console.log('hi');
};
// END rint single ex-view

module.exports = {
  printExDetails,
  printLocations,
  setupSingleExView,
};
