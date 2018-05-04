// Error and success functions for AJAX call
const loadExData = require('./ex');
const dom = require ('./dom');
const loadLocations = require('./locations');

const successLoadEx = data => {
  $('#ex-photo').append(dom.printExPhoto(data.ex));
  $('#ex-details').append(dom.printExDetails(data.ex));
};

const successLoadLocations = data => {
  $('#cards-container').append(dom.printLocations(data.locations));
};

const fail = () => {
  console.error('It\'s broken');
};

const initializer = () => {
  loadExData(successLoadEx, fail);
  loadLocations(successLoadLocations, fail);
};

module.exports = initializer;
