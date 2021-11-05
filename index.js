document.forms[0].onsubmit = (e) => {
    e.preventDefault();
    const params = new URLSearchParams([...new FormData(e.target).entries()]);
    fetch("http://localhost:3000/", {
        method:"POST"
      , body:params
      })
      .then(res => res.text())
      .then(alert)
};