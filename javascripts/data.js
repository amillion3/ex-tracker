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

const megaSmash = (locations, exs) => {
  console.log('megasmashhhh');
  console.log('locations', locations);
  console.log('exs', exs);
  const smashedArrays = [];
  locations.forEach(location => {
    exs.forEach(ex => {
      ex.locationId.forEach(exLocationId => {
        if (exLocationId === location.id) {
          const tempLocation = Object.values(location);
          const tempEx = Object.values(ex);
          const temp = [...tempLocation, ...tempEx,];
          smashedArrays.push(temp);
        }
      });
    });
  });
  console.log('shit got smashed', smashedArrays);
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
      dataGateKeeper.setMegasmash(locations, exs);
    });
};

const initializer = () => {
  bindEvents();
  getAllJSONs();
  // this works, but it's UGLY
  // getAllExs().then(exs => {
  //   dataGateKeeper.setAllExs(exs);
  //   getAllLocations().then(locations => {
  //     dataGateKeeper.setAllLocations(locations);
  //   });
  // });

  /* Promise Chaining Solution, returning a resolved promise with the data */
// const getAllPups = () => {
//   let dogos = [];
//   return firstPupJSON()
//     .then((result) => {
//       dogos = [...result,];
//       return secondPupJSON();
//     }).then((result2) => {
//       dogos = [...dogos, ...result2,];
//       return thirdPupJSON();
//     }).then((result3) => {
//       dogos = [...dogos, ...result3,];
//       return Promise.resolve(dogos);
//     }).catch((errorMsg) => {
//       console.error(errorMsg);
//     });
// };

  // ORIGINAL CODE BELOW
  // loadExData(successLoadEx, fail);
  // loadLocations(successLoadLocations, fail);

};

module.exports = initializer;
