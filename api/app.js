//import fetch from 'node-fetch'

getAPI()

function getAPI () {
  fetch('http://localhost:3000/api')
    .then(response => response.json())
    .then(data => (document.body.innerHTML = JSON.stringify(data)))
}
