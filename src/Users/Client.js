export function getAllListings(UID) {
    const url = "http://localhost:8118/getlistings";
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
                    const userListings = listData.filter((listing) => listing.client === UID && listing.active === true);
                    //console.log(userListings);
                    resolve (userListings);
                });
        }) 
}

export function getAllInactiveListings(UID) {
    const url = "http://localhost:8118/getlistings";
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
                    resolve (userListings);
                });
        }) 
}


export function getListing(LID) {
    const url = "http://localhost:8118/getlistings";
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
    const url = "http://localhost:8118/getusers";
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
