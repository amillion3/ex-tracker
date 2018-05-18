// AJAX call for ex.json

const loadExData = () => {
  return new Promise ((resolve, reject) => {
    $.get('../db/ex.json')
      .done(data => {
        const exsArray = data.exs;
        resolve(exsArray);
      })
      .fail((error) => {
        reject('ex.json has failed to load.', error);
      });
  });
};

// const firstFoodJSON = () => {
//   return new Promise((resolve, reject) => {
//     $.get('../db/food1.json')
//       .done((data) => {
//         const foodArray = data.food1;
//         foodArray.map(food => food.key = 1);
//         resolve(foodArray);
//       })
//       .fail((err) => {
//         reject(`Oi got an error!`, err);
//       });
//   });
// };

module.exports = loadExData;
