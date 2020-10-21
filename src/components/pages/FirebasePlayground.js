import React, { useState, useEffect } from "react";


const FirebasePlayground = () => {

    const [allClients, setAllClients] = useState([{}]);

    useEffect(() => {
        getAllClients();
    }, [])
    //testing
    const server = "http://localhost:8118"

    //production
    //const server = "https://handyhelp-flask-backend.herokuapp.com"

    const showClients = () => {
        console.log("allclients: ", allClients);
        return (allClients.map(client => (
            <div>
                <p>Name: {client.name}</p>
                <p>Email: {client.email}</p>
                <p>Phone: {client.phone}</p>
                <p>Location: {client.location}</p>
            </div>)));
    }
    const getAllClients = () => {
        const url = `${server}/getclients`;
        const req = {
            method: "GET",
            headers: {
                'Accept': 'application/json',
            },
        };
        fetch(url, req)
            .then(response => response.json())
            .then(data => {
                console.log("got data!");
                console.log("data: ", data);
                const test = [data]
                console.log("test: ", test);
                setAllClients(test.map(client => ({
                    key: client.name,
                    name: client.name,
                    email: client.email,
                    phone: client.phone,
                    location: client.location,
                })));
            });
    }

    // const showAllClients = () => {
    //     const allClients = getAllClients();
    //     return allClients.map(client => {
    //         <div>
    //             <p>Name: {client.name}</p>
    //             <p>Email: {client.email}</p>
    //             <p>Phone: {client.phone}</p>
    //             <p>Location: {client.location}</p>
    //         </div>
    //     })
    // }
    return (
        <div>
            <h1>Firebase Playground.</h1>
            <h4>Test Firebase things here</h4>

            <div style={{ display: "flex" }}>
                <div style={{ width: "50%" }}>
                    <h4>Get all clients</h4>
                    {showClients()}

                </div>
                <div style={{ width: "50%" }}>
                    <h4>Get all contractors</h4>

                </div>
            </div>
        </div>
    )
}

export default FirebasePlayground;