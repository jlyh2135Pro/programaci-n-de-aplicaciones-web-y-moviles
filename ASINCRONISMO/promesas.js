fetch("https://api.com/datos")
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));