var myMap = L.map("mapid", {
    center: [39.52, -98.67],
    zoom: 4
  });
  
  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
 L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  }).addTo(myMap);


  var url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson"

//   function color(){
//     var color = "";
//     if (depth < 10) {
//       color = "lime-green";
//     }
//     else if (depth < 30) {
//       color = "yellow-green";
//     }
//     else if (depth < 50) {
//       color = "orange";
//     }
//     else if (depth < 70) {
//       color = "burnt orange";
//     }
//     else if (depth < 90){
//         color = "brown"
//     }
// }

  d3.json(url, function(response){
      for (var i = 0; i < response.length; i++){

    var geoJson = response.features[0].geometry;
    var long = geoJson.coordinates[0];
    var lat = geoJson.coordinates[1];
    var depth = geoJson.coordinates[2];
    var magnitude = response.features[0].properties.mag;
 
        function color(){
            var color = "";
            if (depth < 10) {
              color = "lime-green";
            }
            else if (depth < 30) {
              color = "yellow-green";
            }
            else if (depth < 50) {
              color = "orange";
            }
            else if (depth < 70) {
              color = "burnt orange";
            }
            else if (depth < 90){
                color = "brown"
            }
        }
        L.circle([lat,long], {
            fillOpacity: 0.75,
            color: "white",
            fillColor: color(depth),
            // Adjust radius
            radius: magnitude
          }).addTo(myMap);//.bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Points: " + countries[i].points + "</h3>").addTo(myMap);

    // var myLines = [{
    //     "type": "Circle",
    //     "coordinates": [lat, long]
    // }];

    // var myStyle = {
    //     "color": color(),
    //     "weight": 2,
    //     "opacity": 0.65
    // };


    // L.geoJSON(myLines, {
    //     style: myStyle
    // }).addTo(map);
    }
   
});