document.forms[0].onsubmit = (e) => {
  e.preventDefault();
  const params = new URLSearchParams([...new FormData(e.target).entries()]);
  fetch("https://fs-forms-ek.herokuapp.com", {
      method:"POST"
    , body:params
    })
    .then(res => res.text())
    .then(alert)
};

function submitForm() {
  // Get the first form with the name
  // Hopefully there is only one, but there are more, select the correct index
  var frm = document.getElementsByName('form')[0];
  frm.submit(); // Submit
  frm.reset();  // Reset
  return false; // Prevent page refresh
}