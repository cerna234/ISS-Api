

const mymap = L.map('issMap').setView([0, 0], 1);

const issIcon = L.icon({
  iconUrl: 'iss200.png',
  iconSize: [50, 32],
  iconAnchor: [25, 16],
  
});


const marker = L.marker([0, 0] , {icon: issIcon}).addTo(mymap);

const attribution =
  '&copy; <a href="https://www.opentreetmap.org/copyright">OpenStreetMap</a> contributors' ;


const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl,{attribution});
tiles.addTo(mymap);

const api_url = "https://api.wheretheiss.at/v1/satellites/25544";


const api_url_position = "https://api.wheretheiss.at/v1/satellites/25544";







async function getISS(){
  const response = await fetch(api_url);
  const data = await response.json();
  const {latitude ,longitude , visibility } = data;
  
 


  marker.setLatLng([latitude,longitude]);

  document.getElementById("lat").textContent = data.latitude;
  document.getElementById("lon").textContent = data.longitude;
  document.getElementById("visibility").textContent = data.visibility;

  document.getElementById("velocity").textContent = data.velocity/0.621371;
}

var colors = [
  'red',
  'blue',
  'orange'
]


function yourFunction(){

  for(var i = 0; i>colors.length;i++){
    colors[i];
  }
  getISS();

  setTimeout(yourFunction, 5000);
}

var images = [
  
  
  "orange",
  "green",
  "pink",
 "cyan",
  
]

var imageHead = document.getElementById("lat");
var imageHead2 = document.getElementById("lon");
var imageHead3 = document.getElementById("velocity");
var imageHead4 = document.getElementById("visibility");



var i = 0;
setInterval(function() {
    imageHead.style.color = ""+ images[i] +"";
    imageHead2.style.color = ""+ images[i] +"";
    imageHead3.style.color = ""+ images[i] +"";
    imageHead4.style.color = ""+ images[i] +"";
    i = i + 1;
    if (i == images.length) {
      i =  0;
    }
}, 5000);

yourFunction();






