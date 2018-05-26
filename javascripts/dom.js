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

const printExDetails = input => {
  const exs = input;
  let output = '';
  exs.forEach(ex => {
    const flawsDom = flaws(ex);
    output += `
    <div class="panel panel-default col-sm-4" id="${ex.name}">
      <div class="panel-body">
        <img class='img-ex img-responsive' src='${ex.imageUrl}' alt='My ex, ${ex.name}'>
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
const displayAllExsAndLocations = (allLocations, allExs) => {
  $('#ex-details').html($(allExs));
  $('#cards-container').html($(allLocations));
  console.log(allExs);
  console.log(allLocations);
};
// End Print Location Stuff

// Print single ex-view-----------------------
const buildBackButton = () => {
  const output = `
  <div class='single-ex-view-back text-center col-sm-3' id='container-back-button'>
      <button class ='button-lg btn-danger' id ='go-back'>< Go Back</button>
  </div>`;
  // const output = `
  // <div class='single-ex-view-back text-center'>
  //   <div class='col-sm-3'>
  //     <button class ='button-lg btn-danger' id ='go-back'>< Go Back</button>
  //   </div>
  // </div>`;
  return output;
};

const buildExProfile = ex => {
  const output = `
        <div class="thumbnail">
          <img src="${ex.imageUrl}" alt="Photo of ${ex.name}">
          <div class="caption">
            <h3 class='text-center'>${ex.name}</h3>
            <p>${ex.age} years old</p>
            <p>Flaws: ${flaws(ex)}</p>
          </div>
        </div>`;
  return output;
};

const buildLocationDomString = locationObject => {
  let output = '';
  locationObject.forEach(location => {
    output += `
    <div class="">
      <div class="col-sm-4 single-ex-card-location">
        <div class="thumbnail">
          <img src="${location.imageUrl}" alt="Photo of ${location.name}">
          <div class="caption">
            <h3 class='text-center'>${location.name}</h3>
            <p>${location.address}</p>
            <p>Time of Day: ${location.timeOfDay}</p>
            <p><a href="https://www.google.com/maps/place/${location.address}" target="_blank" class="btn btn-primary" role="button">Google Maps</a></p>
          </div>
        </div>
      </div>
    </div>`;
  });
  return output;
};

const setupSingleExView = (exLadyObject, locationArray) => {
  // $('#single-ex-view').html('');
  const exLocationDomString = buildLocationDomString(locationArray);
  $('#single-ex-view').prepend(buildBackButton());
  $('#single-ex-profile').html(buildExProfile(exLadyObject));
  $('#single-ex-locations').html($(exLocationDomString));
};

// END print single ex-view

module.exports = {
  printExDetails,
  printLocations,
  setupSingleExView,
  displayAllExsAndLocations,
};
