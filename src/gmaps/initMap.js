//<script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAF25QH4TfQgIq6sTY6Ubx6SNpEVvcIC0Y&callback=initMap"
//type="text/javascript"></script>

export function initMap() {
  
    const origin1 = { lat: 55.93, lng: -3.118 };
    const destinationA = { lat: 50.087, lng: 14.421 };
    const google = window.google;
    const service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
      {
        origins: [origin1],
        destinations: [destinationA],
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.IMPERIAL,
        avoidHighways: false,
        avoidTolls: false,
      },
      (response, status) => {
        if (status !== "OK") {
          return(status);
        } else {
          console.log("response = " + response);
          return(response);
        }
      }
    );
  }