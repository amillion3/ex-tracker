// Attaching all event listeners
const dataGateKeeper = require('./dataGatekeeper');
const dom = require ('./dom');

// Clear/Show DOM for single ex view
const clearDOMAllExsLocations = () => {
  $('#all-exs-locations').html('');
  // call build single ex view
};
const clearSingleExView = () => {
  $('#single-ex-view').html('');
  // call build all exs + locations view
};
// END Clear/Show DOM for single ex view

// Ex-clicked
const btnPanelClicked = e => {
  clearDOMAllExsLocations();
  // TO DO gather the ex-id and call a function to retrieve their info
  console.log(clearSingleExView);
};
// END Ex-clicked

const printMatches = matches => {
  $('#cards-container').append(dom.printLocations(matches));
  $('[data-toggle="popover"]').popover();
};

const clearDomOfCards = matches => {
  $('#cards-container').html('');
  printMatches(matches);
  $('[data-toggle="popover"]').popover();
};
// Submit button functionality -----------------
const findSearchMatches = outputArray => {
  const allLocations = dataGateKeeper.returnAllLocations();
  const matchingLocations = [];
  allLocations.forEach(location => {
    outputArray.forEach(output => {
      const formattedLocation = location.name.toLowerCase();
      const formattedAddress = location.address.toLowerCase();
      const formattedNamesArray = location.names;
      const formattedOutput = output.toString();
      if (formattedLocation.indexOf(formattedOutput) > -1) {
        matchingLocations.push(location);
      } else if (formattedAddress.indexOf(formattedOutput) > -1) {
        matchingLocations.push(location);
      } else if (formattedNamesArray.length > 0) {
        formattedNamesArray.forEach(nameFromArray => {
          if (nameFromArray.toLowerCase().indexOf(formattedOutput) > -1) {
            matchingLocations.push(location);
          }
        });
      }
    });
  });
  if (matchingLocations.length > 0) {
    clearDomOfCards([ ...new Set(matchingLocations),]);
  } else {
    alert('No matches found, please try your query again.');
  }
};
const cleanAndValidate = submitButtonText => {
  const outputArray = submitButtonText.replace(/[^A-Za-z\s]/g, '').toLowerCase().split(' ');
  findSearchMatches(outputArray);
};
const btnSubmitClicked = () => {
  const submitButtonText = $('#user-input').val();
  cleanAndValidate(submitButtonText);
};
// END Submit button functionality -----------------
// Time of Days button functionality -----------------
const findTimeMatches = (input) => {
  const matchingTimes = [];
  const allLocations = dataGateKeeper.returnAllLocations();
  allLocations.forEach(location => {
    const formattedLocationTimeOfDay = location.timeOfDay;
    if (formattedLocationTimeOfDay === input) {
      matchingTimes.push(location);
    }
  });
  if (matchingTimes.length > 0) {
    clearDomOfCards(matchingTimes);
  } else {
    alert('No matches found, please try your query again.');
  }
};

const btnTimeClicked = e => {
  const timeButton = $(e.target).closest('.btn-timing').text();
  findTimeMatches(timeButton); // this needs the event passed to it still
};

// END Time of Days button functionality -----------------

const bindEvents = () => {
  $('.btn-submit').on('click', btnSubmitClicked);
  $('#buttons').on('click', '.btn-timing', btnTimeClicked);
  $('.panel').on('click', btnPanelClicked);
};

module.exports = bindEvents;
