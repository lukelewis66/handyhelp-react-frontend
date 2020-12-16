import Upload from "../Upload";

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
                resolve(data);
            });
    })
}

export function deactivateListing(LID) {
    return new Promise(function (resolve, reject) {
        const formData = new FormData();
        formData.append("LID", LID);
        const server = process.env.REACT_APP_SERVER_URL;
        fetch(`${server}/deactivatelisting`, {
            method: 'POST',
            body: formData,
        })
            .then((response) => resolve(response.text()))
            .catch((err) => reject(err));
    });
}

export function reactivateListing(LID) {
    return new Promise(function (resolve, reject) {
        const formData = new FormData();
        formData.append("LID", LID);
        const server = process.env.REACT_APP_SERVER_URL;
        fetch(`${server}/reactivatelisting`, {
            method: 'POST',
            body: formData,
        })
            .then((response) => resolve(response.text()))
            .catch((err) => reject(err));
    });
}

export function addListing(UID, listingForm, imageFiles) {
    console.log("Form: ", listingForm);
    const server = process.env.REACT_APP_SERVER_URL;
    const url = `${server}/addlisting/`;
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(listingForm)
    }
    return new Promise(function (resolve, reject) {
        if (listingForm.title === "" || listingForm.description === "") {
            reject('Listing title and description must be filled out');
        }
        else {
            fetch(url, requestOptions)
                .catch(() => reject('There was a problem adding your listing. Please try again.'))
                .then((response => response.text()
                    .then(id => {
                        console.log("response id: ", id);

                        // Whoever is uploading should pass their UID and LID (if uploading listing images) or 'ProfilePic' (if uploading profile pictures)
                        // upload images and update listing document if user has added photos
                        if (imageFiles.length > 0) {
                            const imgurls = Upload(imageFiles, UID, "Listing", id);
                            const updateBody = {
                                listingID: id,
                                imageUrls: imgurls,
                            }
                            const updateUrl = `${server}/updatelistingimages`;
                            const requestOpts = {
                                method: "POST",
                                headers: { "Content-Type": "application/json" },
                                body: JSON.stringify(updateBody),
                            }
                            fetch(updateUrl, requestOpts)
                                .then(() => resolve('Your listing has been added'))
                                .catch(() => reject('There was an error in uploading your listing images. Please try again.'));
                        }
                        else {
                            resolve('Your listing has been added')
                        }
                    })));
        }

    })

}