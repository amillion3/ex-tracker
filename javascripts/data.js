// Error and success functions for AJAX call
const loadExData = require('./ex');
// const dom = require ('./dom');
const loadLocations = require('./locations');
const bindEvents = require('./events');
const dataGateKeeper = require('./dataGatekeeper');

// const successLoadEx = data => {
//   $('#ex-photo').append(dom.printExPhoto(data.ex));
//   $('#ex-details').append(dom.printExDetails(data.ex));
// };

// const successLoadLocations = data => {
//   dataGateKeeper.setAllLocations(data.locations);
//   $('#cards-container').append(dom.printLocations(dataGateKeeper.returnAllLocations()));
//   $('[data-toggle="popover"]').popover();
// };

// const fail = () => {
//   console.error('It\'s broken');
// };

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

/*
Using PROMISE.ALL to get the matching foods for the first Pup
Note: we are exporting this function
*/
// const singlePup = () => {
//   let pup = {};
//   return getAllPups().then((pups) => {
//     pup = pups[0];
//     return Promise.all([firstFoodJSON(), secondFoodJSON(), thirdFoodJSON(),]);
//   }).then((foodz) => {
//     const allTheFood = [...foodz[0], ...foodz[1], ...foodz[2],];
//     const matching = allTheFood.filter((food) => {
//       if (pup.favFoodId === food.key) {
//         return true;
//       };
//       return false;
//     });
//     pup.favFood = matching;
//     return Promise.resolve(pup);
//   });
// };

const initializer = () => {
  bindEvents();
  // this works, but it's UGLY
  getAllExs().then(exs => {
    dataGateKeeper.setAllExs(exs);
    getAllLocations().then(locations => {
      dataGateKeeper.setAllLocations(locations);
    });
  });

  dataGateKeeper.setAllLocations(getAllLocations());
  // OLD CODE BELOW
  // loadExData(successLoadEx, fail);
  // loadLocations(successLoadLocations, fail);

};

module.exports = initializer;
