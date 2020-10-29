//https://developers.google.com/maps/documentation/javascript/examples/places-autocomplete-addressform
//https://react-bootstrap.netlify.app/components/forms/#forms

import React, { useEffect, useRef, useState } from "react";

import { Form } from "react-bootstrap";


// PARENT MUST PROVIDE A handleCoordinates CALLBACK
//
// Define in parent:
/* 
    function handleCoordinates(lat, lng){
        do stuff with lat, lng returned from GeoSearchBar
    }
*/

//  Dont forget to pass the function to this component:
/*
    return(
        <GeoSearchBar handleCoordinates={handleCoordinates}/>
    )
*/

const GeoSearchBar = ({ handleCoordinates }) => {
    let autocompleteRef = useRef();
    const G = window.google.maps;
    let autocomplete;
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        initAutocomplete();
    }, [])


    function initAutocomplete() {
        autocomplete = new G.places.Autocomplete(autocompleteRef.current, { types: ["geocode"] });
        autocomplete.setFields(["geometry"]);
        autocomplete.addListener("place_changed", getCoordinates);
    }

    function getCoordinates() {
        // Get the place details from the autocomplete object.
        console.log("wadup");
        const place = autocomplete.getPlace();
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();

        //callback function --> pass lat, lng back to parent. 
        handleCoordinates(lat, lng);
    }

    // Bias the autocomplete object to the user's geographical location,
    // as supplied by the browser's 'navigator.geolocation' object.
    function geolocate() {
        if (autocomplete) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const geolocation = {
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    };
                    const circle = new G.Circle({
                        center: geolocation,
                        radius: position.coords.accuracy,
                    });
                    autocomplete.setBounds(circle.getBounds());
                });
            }
        }
    }

    function handleCheck() {
        //user selects to use current location
        if (!checked) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((position) => {
                    const lat = position.coords.latitude;
                    const lng = position.coords.longitude;
                    handleCoordinates(lat, lng);
                }
                )
            }
        }
        setChecked(!checked);
    }

    function sendEmptyCoordinates() {
        handleCoordinates(null, null);
    }

    return (
        <div id="locationField" style={{ display: "flex", flexDirection: "column", padding: "5px" }}>
            <Form.Label>Enter your location</Form.Label>
            <Form.Control as="input"
                id="autocomplete"
                placeholder="Ex: Santa Barbara, CA"
                onFocus={geolocate()}
                type="text"
                ref={autocompleteRef}
                disabled={checked}
                onChange={() => sendEmptyCoordinates()}
            />

            <Form.Check label="Use current location" style={{ paddingTop: "5px" }} type="checkbox" checked={checked} onChange={() => handleCheck()} />
        </div>
    )
}

export default GeoSearchBar;