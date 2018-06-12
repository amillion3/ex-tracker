// let megaSmashed = [];
let locations = [];
let timesOfDay = [];
let exs = [];

const setTimesOfDay = () => {
  locations.forEach(location => {
    timesOfDay.push(location.timeOfDay);
  });
  timesOfDay = [ ...new Set(timesOfDay),];
};

const returnTimesOfDay = () => timesOfDay;

const returnAllLocations = () => locations;

const setAllLocations = input => {
  locations = input;
  setTimesOfDay();
};

const getExs = () => exs;
const setExs = input => {
  exs = input;
};

module.exports = {
  setAllLocations,
  returnAllLocations,
  returnTimesOfDay,
  getExs,
  setExs,
};
