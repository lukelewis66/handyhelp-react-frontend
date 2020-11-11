export function getAllListings(UID, active) {
    const url = `${process.env.REACT_APP_SERVER_URL}/getlistings`;
    const req = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
        }
    };
    return new Promise(function (resolve, reject) {
        fetch(url, req)
            .then(response => response.json())
            .then(data => {
                //changing {objects} to [objects] so we can map them when showing.
                const listData = Object.keys(data).map(key => data[key]);
                //console.log(listData);
                var listings;
                if (UID) {
                    listings = listData.filter((listing) => listing.client === UID && listing.active === active);
                }
                else {
                    listings = listData.filter((listing) => listing.active === active);
                }
                //console.log(userListings);
                resolve(listings);
            })
            .catch(err => reject(err));
    })
}

export function getAllInactiveListings(UID) {
    const url = `${process.env.REACT_APP_SERVER_URL}/getlistings`;
    const req = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
        }
    };
    return new Promise(function (resolve, reject) {
        fetch(url, req)
            .then(response => response.json())
            .then(data => {
                //changing {objects} to [objects] so we can map then when showing.
                const listData = Object.keys(data).map(key => data[key]);
                //console.log(listData);
                const userListings = listData.filter((listing) => listing.client === UID && listing.active === false);
                //console.log(userListings);
                resolve(userListings);
            });
    })
}


export function getListing(LID) {
    const url = `${process.env.REACT_APP_SERVER_URL}/getlistings`;
    const req = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
        }
    }
    fetch(url, req)
        .then(response => response.json())
        .then(data => {
            //changing {objects} to [objects] so we can map then when showing.
            const listData = Object.keys(data).map(key => data[key]);
            //console.log(listData);
            const listing = listData.find((listing) => listing.id === LID);
            console.log(listing);
            console.log(listing.images);
        });
}

export function getUserInfo(UID) {
    const url = `${process.env.REACT_APP_SERVER_URL}/getusers`;
    const req = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
        }
    };
    return new Promise(function (resolve, reject) {
        fetch(url, req)
            .then(response => response.json())
            .then(data => {
                //changing {objects} to [objects] so we can map then when showing.
                const test = Object.keys(data).map(key => data[key]);
                const user = test.find((info) => info.id === UID);
                resolve(user);
            });
    })
}

export function getClientInfo(UID) {
    console.log("getClientInfo called");
    const url = `${process.env.REACT_APP_SERVER_URL}/getclients`;
    const req = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
        }
    };
    return new Promise(function (resolve, reject) {
        fetch(url, req)
            .then(response => response.json())
            .then(data => {
                //changing {objects} to [objects] so we can map then when showing.
                const test = Object.keys(data).map(key => data[key]);
                const user = test.find((info) => info.id === UID);
                resolve(user);
            });
    })
}

export function getContractorInfo(UID) {
    console.log("getContractorInfo called");
    const url = `${process.env.REACT_APP_SERVER_URL}/getcontractors`;
    const req = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
        }
    };
    return new Promise(function (resolve, reject) {
        fetch(url, req)
            .then(response => response.json())
            .then(data => {
                //changing {objects} to [objects] so we can map then when showing.
                const test = Object.keys(data).map(key => data[key]);
                const user = test.find((info) => info.id === UID);
                resolve(user);
            });
    })
}
