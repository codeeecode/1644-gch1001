//import fetch from 'node-fetch'

getAPI()

function getAPI () {
  fetch('https://gch1001-1644.herokuapp.com/student/api')
    .then(response => response.json())
    .then(data => (document.body.innerHTML = JSON.stringify(data)))
}