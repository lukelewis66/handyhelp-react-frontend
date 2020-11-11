//<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAF25QH4TfQgIq6sTY6Ubx6SNpEVvcIC0Y&callback=initMap"
//type="text/javascript"></script>

// export function initMap(origin, destination) {

//   var originlat = origin.substring(0, origin.search(","));
//   var originlon = origin.substring(origin.search(",") + 1);
//   var destinationlat = destination.substring(0, destination.search(","));
//   var destinationlon = destination.substring(destination.search(",") + 1);
//     const origin1 = { originlat, originlon};
//     const destinationA = {destinationlat, destinationlon};
//     const google = window.google;
//     const service = new google.maps.DistanceMatrixService();
//     service.getDistanceMatrix(
//       {
//         origins: [origin1],
//         destinations: [destinationA],
//         travelMode: google.maps.TravelMode.DRIVING,
//         unitSystem: google.maps.UnitSystem.IMPERIAL,
//         avoidHighways: false,
//         avoidTolls: false,
//       },
//       (response, status) => {
//         if (status !== "OK") {
//           return(status);
//         } else {
//           console.log("response = " + response);
//           return(response);
//         }
//       }
//     );
//   }