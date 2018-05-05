// Attaching all event listeners

const findSearchMatches = input => {

};

const btnSubmitClicked = () => {
  const submitButton = $('#user-input').val();
  findSearchMatches(submitButton);
};

const btnTimeClicked = e => {
  const timeButton = $(e.target).closest('.btn');
  console.log(timeButton);
  // $('#snagged').append(fishCard);
  // $(e.target).text('Remove From Basket').removeClass('add').addClass('remove');
};

module.exports = {
  btnSubmitClicked,
  btnTimeClicked,
};
