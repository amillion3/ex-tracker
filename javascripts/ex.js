// AJAX call for ex.json

const loadExData = (successFunction, failureFunction) => {
  $.get('../db/ex.json')
    .done(successFunction)
    .fail(failureFunction);
};

module.exports = loadExData;
