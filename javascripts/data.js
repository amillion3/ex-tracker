// Error and success functions for AJAX call
const loadExData = require('./ex');
// const dom = require ('./dom');
const loadLocations = require('./locations');
const bindEvents = require('./events');
const dataGateKeeper = require('./dataGatekeeper');

const getAllExs = () => {
  let allExs = [];
  return loadExData().then(exsArray => {
    allExs = exsArray;
    return Promise.resolve(allExs);
  });
};

const getAllLocations = () => {
  let allLocations = [];
  return loadLocations().then(locationsArray => {
    allLocations = locationsArray;
    return Promise.resolve(allLocations);
  });
};

const megaSmash = (locations, exs) => {
  locations.forEach(location => {
    location.names = [];
    exs.forEach(ex => {
      ex.locationId.forEach(exLocationId => {
        if (exLocationId === location.id) {
          location.names.push(ex.name);
        }
      });
    });
  });
  dataGateKeeper.setMegasmash(locations);
};

const getAllJSONs = () => {
  let locations = [];
  let exs = [];
  return getAllLocations()
    .then(result => {
      locations = result;
      return getAllExs();
    }).then(result2 => {
      exs = result2;
      return megaSmash(locations, exs);
    }).then(result3 => {
      // what should go here?
      // dataGateKeeper.setMegasmash(locations, exs);
    });
};

const initializer = () => {
  bindEvents();
  getAllJSONs();
  // ORIGINAL CODE BELOW
  // loadExData(successLoadEx, fail);
  // loadLocations(successLoadLocations, fail);

};

module.exports = initializer;
