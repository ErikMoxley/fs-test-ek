document.forms[0].onsubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams([...new FormData(e.target).entries()]);
    fetch("https://fs-forms-ek.herokuapp.com/", {
        method:"POST",
        credentials: "include", 
        body:params
      })
      .then(res => res.text())
      .then(alert)
};