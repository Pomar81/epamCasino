// event for button submit
// it catches click and prevents the default submit but in return it prints data to console
document.getElementById('loginFormSubmit').addEventListener('click', function (evt) {
  evt.preventDefault();
  for (let elm of document.forms[this.form.id].elements) {
    if (elm.tagName.toLowerCase() === 'input')
      console.log(`${elm.name}: ${elm.value}`);
  }
});