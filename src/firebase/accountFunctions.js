export function checkUserExists(UID) {
    const server = process.env.REACT_APP_SERVER_URL;
    const url = new URL(`${server}/checkuserexists`);
    const params = new URLSearchParams();
    params.append("UID", UID);
    url.search = params.toString();
    return new Promise(function (resolve, reject) {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                resolve(data)
            }
            )
            .catch((err) => reject({ "error": err }));
    });
}

export function createAccount(UID, form) {
    return new Promise(function (resolve, reject) {
        const server = process.env.REACT_APP_SERVER_URL;
        const url = `${server}/createaccount`;
        form.UID = UID;
        const requestOptions = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(form)
        }
        fetch(url, requestOptions)
            .then((response) => resolve(response.text()))
            .catch((err) => reject(err));
    });
}

export function checkUserActive(UID) {
    const server = process.env.REACT_APP_SERVER_URL;
    const url = new URL(`${server}/checkuseractive`);
    const params = new URLSearchParams();
    params.append("UID", UID);
    url.search = params.toString();
    return new Promise(function (resolve, reject) {
        fetch(url)
            .then(response => response.json())
            .then(data => { resolve(data) })
            .catch((err) => reject({ "error": err }));
    });
}

export function deactivateAccount(UID) {
    return new Promise(function (resolve, reject) {
        // const server = "http://localhost:8118";
        // const url = `${server}/deactivateaccount`; 
        // const requestOptions = {
        //     method: "POST",
        //     body: FormData,
        // }
        const formData = new FormData();
        formData.append("UID", UID);
        const server = process.env.REACT_APP_SERVER_URL;
        fetch(`${server}/deactivateaccount`, {
            method: 'POST',
            body: formData,
        })
            .then((response) => resolve(response.text()))
            .catch((err) => reject(err));
    });
}

export function reactivateAccount(UID) {
    return new Promise(function (resolve, reject) {
        // const server = "http://localhost:8118";
        // const url = `${server}/reactivateaccount`;
        // const requestOptions = {
        //     method: "POST",
        //     body: {
        //         "UID": UID
        //     }
        // }
        const formData = new FormData();
        formData.append("UID", UID);
        const server = process.env.REACT_APP_SERVER_URL;
        fetch(`${server}/reactivateaccount`, {
            method: 'POST',
            body: formData,
        })
            .then((response) => resolve(response.text()))
            .catch((err) => reject(err));
    });
}


export function editInfo(name, phone, UID) {
    return new Promise(function (resolve, reject) {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("phone", phone);
        formData.append("UID", UID);
        const server = process.env.REACT_APP_SERVER_URL;
        fetch(`${server}/editInfo/`, {
            method: 'POST',
            body: formData,
        })
            .then((response) => resolve(response.text()))
            .catch((err) => reject(err));
    });
}

export function editContractor(name, phone, bio, skilltags, UID) {

    return new Promise(function (resolve, reject) {        
        const forms = {
            name: name,
            phone: phone,
            bio: bio,
            skilltags: skilltags,
            UID: UID,
        }
        const server = process.env.REACT_APP_SERVER_URL;
        fetch(`${server}/editContractor/`, {
            method: 'POST',
            body: JSON.stringify(forms),
        })
            .then((response) => resolve(response.text()))
            .catch((err) => reject(err));
    });
}

export function getUserRole(UID) {
    return new Promise(function (resolve, reject) {
        const server = process.env.REACT_APP_SERVER_URL;
        var url = new URL(`${server}/getrole`);
        const params = new URLSearchParams();
        params.append("UID", UID);
        url.search = params.toString();
        console.log(url.toString());
        fetch(url)
            .then(response => response.json())
            .then(data => {
                resolve(data)
                console.log(data.role);

            }
            )
            .catch((err) => reject(err));
    });
}
