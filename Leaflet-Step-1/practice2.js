var myMap = L.map("mapid", {
    center: [39.52, -98.67],
    zoom: 2
  });
  
//   // Adding a tile layer (the background map image) to our map
//   // We use the addTo method to add objects to our map
 L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
    maxZoom: 18,
    id: "light-v10",
    accessToken: API_KEY
  }).addTo(myMap);

  function myColor(n){
    var color = "";
    if (n < 10) {
      color = "red";
    }
    else if (n < 30) {
      color = "green";
    }
    else if (n < 50) {
      color = "orange";
    }
    else if (n < 70) {
      color = "yellow";
    }
    else if (n < 90){
        color = "brown"
    }
    return color;
}

function radius(n){
    if (n === 0){
    return 1;
}
return n ;
}

// var myStyle = { 
//         radius: radius(feature.properties.mag),
//         fillColor: colorPick(feature.geometry.coordinates[2]),
//         color:  colorPick(feature.geometry.coordinates[2]),
//         weight: 0.5,
//         opacity: 1,
//         fillOpacity: 0.5,
//         stroke: 1,
// };
  var geojson = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson";
  
  L.geoJSON(geojson).addTo(myMap);





//   function colorPick(n){
//     var color = "";
//     if (n < 10) {
//       color = "lime-green";
//     }
//     else if (n < 30) {
//       color = "yellow-green";
//     }
//     else if (n < 50) {
//       color = "orange";
//     }
//     else if (n < 70) {
//       color = "burnt orange";
//     }
//     else if (n < 90){
//         color = "brown"
//     }
//     return color;
// }

// function radius(n){
//   return n;
// }

//   d3.json(url, function(response){
//       // for (var i = 0; i < response.length; i++){
//         var geometry = response.features[0].geometry;
//         // console.log(geometry.coordinates[2]);
//         function style(feature){
//           console.log(geometry.coordinates[2])
//           return{
        
//         radius: radius(feature.properties.mag),
//         fillColor: colorPick(geometry.coordinates[2]),//this should call from inside but only shows up with this
//         color: colorPick(geometry.coordinates[2]),
//         weight: 1,
//         opacity: 1,
//         fillOpacity: 0.8
//           };
//         }
//     // var geoJson = response.features[0].geometry;
//     // var long = geoJson.coordinates[0];
//     // var lat = geoJson.coordinates[1];
//     // var depth = geoJson.coordinates[2];
//     // var magnitude = response.features[0].properties.mag;
 
//         // function color(n){
//         //     var color = "";
//         //     if (n < 10) {
//         //       color = "lime";
//         //     }
//         //     else if (n< 30) {
//         //       color = "yellow";
//         //     }
//         //     else if (n < 50) {
//         //       color = "orange";
//         //     }
//         //     else if (n < 70) {
//         //       color = "orange";
//         //     }
//         //     else if (n < 90){
//         //         color = "brown"
//         //     }
//         //     return color;
//         // }

       

//     // var geometry = response.features[0].geometry;
//     // var long = geometry.coordinates[0];
//     // var lat = geometry.coordinates[1];
//     // var depth = geometry.coordinates[2];
//     // var magnitude = response.features[0].properties.mag;



// // L.geoJson(response, {
// //   // We turn each feature into a circleMarker on the map.
// //   pointToLayer: function(feature, geometry) {
// //     console.log(feature.properties.mag);
// //     return L.circleMarker(geometry, {
// //       fillOpacity: 0.5,
// //       color: color(geometry.alt),
// //       radius: feature.properties.mag,
// //       weight: .5,
// //       fillColor: color(geometry.alt),
// //       // Adjust radius
      
//   //     "popupContent": "<h1>" + feature.properties.place + "</h1>" + "<hr> <h3>Magnitude: " + feature.properties.mag + "</h3>"
//   //     // .addTo(myMap).bindPopup("<h1>" + feature.properties.place + "</h1>" + "<hr> <h3>Magnitude: " + feature.properties.mag + "</h3>");//.addTo(myMap);
//   // })}

//   L.geoJSON(response, {
//     pointToLayer: function (feature, latlng) {
//         return L.circleMarker(latlng)
//     },
//     style:style,
//     onEachFeature : function(feature,layer){
//       layer.bindPopup("<h1>" + feature.properties.place + "</h1>" + "<hr> <h3>Magnitude: " + feature.properties.mag + "</h3>");//.addTo(myMap);
//     }
  
// }).addTo(myMap);//.bindPopup("<h1>" + feature.properties.place + "</h1>" + "<hr> <h3>Magnitude: " + feature.properties.mag + "</h3>");//.addTo(myMap);




//         // L.circle([lat,long], {
//         //     fillOpacity: 0.75,
//         //     color: "white",
//         //     fillColor: color(depth),
//         //     // Adjust radius
//         //     radius: magnitude
//         //   }).addTo(myMap);//.bindPopup("<h1>" + countries[i].name + "</h1> <hr> <h3>Points: " + countries[i].points + "</h3>").addTo(myMap);

//     // var myLines = [{
//     //     "type": "Circle",
//     //     "coordinates": [lat, long]
//     // }];

//     // var myStyle = {
//     //     "color": color(),
//     //     "weight": 2,
//     //     "opacity": 0.65
//     // };


//     // L.geoJSON(myLines, {
//     //     style: myStyle
//     // }).addTo(map);
//     // }
   
// });