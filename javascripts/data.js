// Error and success functions for AJAX call
const loadExData = require('./ex');
const dom = require ('./dom');
const loadLocations = require('./locations');
const bindEvents = require('./events');
const dataGateKeeper = require('./dataGatekeeper');

const successLoadEx = data => {
  $('#ex-photo').append(dom.printExPhoto(data.ex));
  $('#ex-details').append(dom.printExDetails(data.ex));
};

const successLoadLocations = data => {
  dataGateKeeper.setAllLocations(data.locations);
  $('#cards-container').append(dom.printLocations(dataGateKeeper.returnAllLocations()));
};

const fail = () => {
  console.error('It\'s broken');
};

const initializer = () => {
  loadExData(successLoadEx, fail);
  loadLocations(successLoadLocations, fail);
  bindEvents();
};

module.exports = initializer;
