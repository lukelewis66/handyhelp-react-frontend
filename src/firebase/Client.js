export function getAllListings(UID, active) {
    const url = `${process.env.REACT_APP_SERVER_URL}/getlistings`;
    const req = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
        }
    };
    console.log("get all listings called with UID: ", UID, " \nactive: ", active);
    return new Promise(function (resolve, reject) {
        fetch(url, req)
            .then(response => response.json())
            .then(data => {
                //changing {objects} to [objects] so we can map them when showing.
                const listData = Object.keys(data).map(key => data[key]);
                console.log("listData: ", listData);
                //console.log(listData);
                var listings;
                if (UID) {
                    console.log("here with UID: ", UID);
                    listings = listData.filter((listing) => listing.client === UID && listing.active === active);
                }
                else {
                    listings = listData.filter((listing) => listing.active === active);
                }
                console.log("resolving with listings: ", listings);
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
    const server = process.env.REACT_APP_SERVER_URL;
    var url = new URL(`${server}/getlisting`);
    const params = new URLSearchParams();
    params.append("LID", LID);
    url.search = params.toString();
    return new Promise(function (resolve, reject) {
        fetch(url)
            .then(response => response.json())
            .then(listing => {
                console.log("listing retrieved: ", listing);
                resolve(listing);
            })
            .catch(err => reject(err));
    })


}

export function getUserInfo(UID) {
    const server = process.env.REACT_APP_SERVER_URL;
    var url = new URL(`${server}/getuser`);
    const params = new URLSearchParams();
    params.append("UID", UID);
    url.search = params.toString();
    return new Promise(function (resolve, reject) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("user retrieved: ", data);
                resolve(data);
            });
    })
}
