// AJAX call for locations.json

const loadLocations = (successFunction, failureFunction) => {
  $.get('../db/locations.json')
    .done(successFunction)
    .fail(failureFunction);
};

module.exports = loadLocations;
