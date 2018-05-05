// Attaching all event listeners
const dataGateKeeper = require('./dataGatekeeper');
const dom = require ('./dom');

const printMatches = matches => {
  $('#cards-container').append(dom.printLocations(matches));
};

const clearDomOfCards = matches => {
  $('#cards-container').html('');
  printMatches(matches);
};

const findSearchMatches = outputArray => {
  const allLocations = dataGateKeeper.returnAllLocations();
  const matchingLocations = [];
  allLocations.forEach(location => {
    outputArray.forEach(output => {
      const formattedLocation = location.name.toLowerCase();
      const formattedAddress = location.address.toLowerCase();
      const formattedOutput = output.toString();
      if (formattedLocation.indexOf(formattedOutput) > -1) {
        matchingLocations.push(location);
      } else if (formattedAddress.indexOf(formattedOutput) > -1) {
        matchingLocations.push(location);
      }
    });
  });
  if (matchingLocations.length > 0) {
    // console.log([ ...new Set(matchingLocations),]);
    clearDomOfCards([ ...new Set(matchingLocations),]);
    // return [ ...new Set(matchingLocations),];
  } else {
    console.error('no matches');
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

const findTimeMatches = (input) => {
  const matchingTimes = [];
  const allLocations = dataGateKeeper.returnAllLocations();
  allLocations.forEach(location => {
    const formattedLocationTimeOfDay = location.timeOfDay.toLowerCase();
    if (formattedLocationTimeOfDay.indexOf(input)) {
      console.log('match');
      matchingTimes.push(location);
    }
  });
};

const btnTimeClicked = e => {
  const timeButton = $(e.target).closest('.btn');
  console.log(timeButton);
  findTimeMatches(); // this needs the event passed to it still

  // $('#snagged').append(fishCard);
  // $(e.target).text('Remove From Basket').removeClass('add').addClass('remove');
};

const bindEvents = () => {
  $('.btn-submit').on('click', btnSubmitClicked);
  $('#buttons').on('click', '.btn-timing', btnTimeClicked);
};

module.exports = bindEvents;
