let megaSmashed = [];
let locations = [];
let timesOfDay = [];

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

const getExs = () => {

};

const setMegasmash = (locations) => {
  megaSmashed = locations;
  console.log('datagatekeeper', megaSmashed);
};

module.exports = {
  setAllLocations,
  returnAllLocations,
  returnTimesOfDay,
  getExs,
  setMegasmash,
};
