import React, { useState, useEffect } from "react";


const FirebasePlayground = () => {
    const [allClients, setAllClients] = useState([{}]);
    const [allContractors, setAllContractors] = useState([{}]);

    var url;

    // component loads
    // useEffect is called --> calls getAllClients
    // getAllClients fetches data from backend --> sets allClients/allContractors via setAllClients/setAllContractors
    // 

    // fetch the listing/contractor from firestore --> returns listing/contractor item (which has unique ID)
    // get the image url from listing/contractor
    // fetch the image from S3
    // update/render component



    useEffect(() => {
        getAllClients("clients");
    }, [])

    useEffect(() => {
        getAllClients("contractors"); //contractors
    }, [])

    //testing
    const server = "http://localhost:8118"

    //production
    //const server = "https://handyhelp-flask-backend.herokuapp.com"

    //should realistically return ClientListItem components. Dont forget ID props. 
    function showClients() {
        //console.log("allclients: ", allClients);
        return (allClients.map(client => (
            <div>
                <hr />
                <p>Name: {client.name}</p>
                <p>Email: {client.email}</p>
                <p>Phone: {client.phone}</p>
                <p>Location: {client.location}</p>
            </div>)));
    }

    //should realistically return ContractorListItem components. Dont forget ID props. 
    function showContractors() {
        
        //console.log("allcontractors: ", allContractors);
        return (allContractors.map(contractor => (
            <div>
                <hr />
                <p>Name: {contractor.name}</p>
                <p>Rating: {contractor.rating}</p>
                <p>Email: {contractor.email}</p>
                <p>Phone: {contractor.phone}</p>
                <p>Distance: {getDistance(contractor.id)}</p>
                <p>Location: {contractor.phone}</p>
                <p>Picture Url: {contractor.picture}</p>
                <p>Skilltags: {contractor.skilltags}</p>
            </div>
        )))
    }

    function getDistance(UID2) {
        url = new URL(`${server}/getdistance`);
        const params = new URLSearchParams();
        var UID1 = localStorage.getItem("UID");
        params.append("UID1", UID1);
        params.append("UID2", UID2);
        url.search = params.toString();
        const req = {
            method: "GET",
            headers: {
                'Accept': 'application/json',
            },
        };
        fetch(url, req)
            .then(response => response.json())
            .then(data => {
                console.log("\nDistance: "+ data)
                return data;
            });
    }


    function getAllClients(type) {
        if (type === "clients") {
            url = `${server}/getclients/`;
        }
        else if (type === "contractors") {
            url = `${server}/getcontractors/`
        }
        const req = {
            method: "GET",
            headers: {
                'Accept': 'application/json',
            },
        };
        fetch(url, req)
            .then(response => response.json())
            .then(data => {
                
                //changing {objects} to [objects] so we can map then when showing.
                const listData = Object.keys(data).map(key => data[key])
                if (type === "clients") {
                    
                    setAllClients(listData);
                    
                }
                else if (type === "contractors") {
                    setAllContractors(listData);
                }
            });
    }

    

    return (
        <div>
            <h1>Firebase Playground.</h1>
            <h4>Test Firebase things here</h4>

            <div style={{ display: "flex" }}>
                <div style={{ width: "50%", padding: "10px" }}>
                    <h4>Get all clients</h4>
                    {showClients()}

                </div>
                <div style={{ width: "50%", padding: "10px" }}>
                    <h4>Get all contractors</h4>
                    {showContractors()}
                </div>
            </div>
        </div>
    )
}

export default FirebasePlayground;