export function getCityName(latitude, longitude) {
    const G = window.google.maps;
    console.log("g: ", G);
    const geocoder = new G.Geocoder();
    const latlng = {
        lat: latitude,
        lng: longitude,
    }
    return new Promise(function (resolve, reject) {
        geocoder.geocode({ location: latlng }, (results, status) => {
            if (status == "OK") {
                if (results[0]) {
                    //console.log("results: ", results);
                    var city = results[0].address_components.filter(ac => ~ac.types.indexOf('locality'))[0].long_name;
                    var state = results[0].address_components.filter(ac => ~ac.types.indexOf('administrative_area_level_1'))[0].short_name;
                    resolve(`${city}, ${state}`);
                }
                else {
                    resolve("");
                }
            }
            else {
                reject("error getting city");
            }
        })
    })
}