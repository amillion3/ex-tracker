// AJAX call for ex.json

const loadExData = () => {
  return new Promise ((resolve, reject) => {
    $.get('https://ex-tracker-4ddb9.firebaseio.com/ex.json')
      .done(data => {
        const exsArray = data.exs;
        resolve(exsArray);
      })
      .fail((error) => {
        reject('ex.json has failed to load.', error);
      });
  });
};

module.exports = loadExData;
