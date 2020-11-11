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
                const test = Object.keys(data).map(key => data[key]);
                const user = test.find((info) => info.id === UID);
                resolve(user);
            });
    })

}