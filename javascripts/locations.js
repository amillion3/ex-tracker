// AJAX call for locations.json

const loadLocations = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/locations.json')
      .done(data => {
        const locationsArray = data.locations;
        resolve(locationsArray);
      })
      .fail(error => {
        reject('locations.json has failed to load.', error);
      });
  });
};

module.exports = loadLocations;
