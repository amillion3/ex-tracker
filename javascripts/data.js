// Error and success functions for AJAX call
const loadExData = require('./ex');
const dom = require ('./dom');

const successLoadEx = (data) => {
  $('#ex-photo').append(dom.printExPhoto(data.ex));
  $('#ex-details').append(dom.printExDetails(data.ex));
};

const fail = () => {
  console.error('It\'s broken');
};

const initializer = () => {
  loadExData(successLoadEx, fail);
};

module.exports = initializer;
