export function getContractor(UID) {
    console.log("getContractor called");
    const server = process.env.REACT_APP_SERVER_URL;
    var url = new URL(`${server}/getcontractor`);
    const params = new URLSearchParams();
    params.append("UID", UID);
    url.search = params.toString();
    return new Promise(function (resolve, reject) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                console.log("contractor data: ", data);
                resolve(data);
            });
    })
}

export function getAllContractors() {
    console.log("getAllContractors called");
    const url = `${process.env.REACT_APP_SERVER_URL}/getallcontractors`;
    const req = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
        }
    }
    return new Promise(function (resolve, reject) {
        fetch(url, req)
            .then(response => response.json())
            .then(data => {
                //changing {objects} to [objects] so we can map then when showing.
                const contractors = Object.keys(data).map(key => data[key]);
                //const user = test.find((info) => info.id === UID);
                console.log("contractors: ", contractors);
                resolve(contractors);
            });
    })

}

export function getAllFeedItems(UID) {
    const url = `${process.env.REACT_APP_SERVER_URL}/getfeeditems`;
    const req = {
        method: "GET",
        headers: {
            'Accept': 'application/json',
        }
    };
    console.log("get all feed items called with UID: ", UID);
    return new Promise(function (resolve, reject) {
        fetch(url, req)
            .then(response => response.json())
            .then(data => {
                //changing {objects} to [objects] so we can map them when showing.
                const feedData = Object.keys(data).map(key => data[key]);
                console.log("feedData: ", feedData);
                //console.log(feedData);
                var feeditems;
                if (UID) {
                    console.log("here with UID: ", UID);
                    feeditems = feedData.filter((feeditem) => feeditem.contractor === UID);
                }
                else {
                    console.log("Invalid or no UID provided, rejecting with feed items: ", feeditems)
                    reject(feeditems)
                }
                console.log("resolving with feed items: ", feeditems);
                resolve(feeditems);
            })
            .catch(err => reject(err));
    })
}

export function getFeedItem(FID) {
    const server = process.env.REACT_APP_SERVER_URL;
    var url = new URL(`${server}/getfeeditem`);
    const params = new URLSearchParams();
    params.append("FID", FID);
    url.search = params.toString();
    return new Promise(function (resolve, reject) {
        fetch(url)
            .then(response => response.json())
            .then(feeditem => {
                console.log("feed item retrieved: ", feeditem);
                resolve(feeditem);
            })
            .catch(err => reject(err));
    })
}

export function getReviews(UID) {
    const url = `${process.env.REACT_APP_SERVER_URL}/getreviews`;
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
                const revList = Object.keys(data).map(key => data[key]);
                var reviews;
                reviews = revList.filter((review) => review.contractor === UID);
                resolve(reviews);
            })
            .catch(err => reject(err));
    })
}