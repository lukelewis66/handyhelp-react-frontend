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

