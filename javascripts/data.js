// Error and success functions for AJAX call
const loadExData = require('./ex');
const dom = require ('./dom');
const loadLocations = require('./locations');
const bindEvents = require('./events');
const dataGateKeeper = require('./dataGatekeeper');

const getAllExs = () => {
  let allExs = [];
  return loadExData().then(exsArray => {
    allExs = exsArray;
    dataGateKeeper.setExs(allExs);
    return Promise.resolve(allExs);
  });
};

const getAllLocations = () => {
  let allLocations = [];
  return loadLocations().then(locationsArray => {
    allLocations = locationsArray;
    dataGateKeeper.setAllLocations(allLocations);
    return Promise.resolve(allLocations);
    // return allLocations;
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
  // dataGateKeeper.setMegasmash(locations);
  return [locations, exs,];
};

const successPrintLocations = input => {
  $('#cards-container').append(dom.printLocations(input));
  $('[data-toggle="popover"]').popover();
};
const successPrintExs = input => {
  $('#ex-details').append(dom.printExDetails(input));
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
      successPrintLocations(result3[0]);
      successPrintExs(result3[1]);
    });
};

const initializer = () => {
  bindEvents();
  getAllJSONs();
};

module.exports = {
  initializer,
};
