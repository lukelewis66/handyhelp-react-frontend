export function checkUserExists(UID) {
    const url = new URL("http://localhost:8118/checkuserexists");
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
        const server = "http://localhost:8118";
        //if production server = "sldkfalskdj"
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
    const url = new URL("http://localhost:8118/checkuseractive");
    const params = new URLSearchParams();
    params.append("UID", UID);
    url.search = params.toString();
    return new Promise(function (resolve, reject) {
        fetch(url)
            .then(response => response.json())
            .then(data => {resolve(data)})
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
        formData.append("UID", UID)
        fetch('http://localhost:8118/deactivateaccount', {
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
        formData.append("UID", UID)
        fetch('http://localhost:8118/reactivateaccount', {
            method: 'POST',
            body: formData,
        })
        .then((response) => resolve(response.text()))
        .catch((err) => reject(err));
    });
}


export function editInfo(name, phone, email, UID) {
    return new Promise(function (resolve, reject) {
        const formData = new FormData();
        formData.append("name", name)
        formData.append("phone", phone)
        formData.append("email", email)
        formData.append("UID", UID)
        fetch('http://localhost:8118/editInfo', {
            method: 'POST',
            body: formData,
        })
        .then((response) => resolve(response.text()))
        .catch((err) => reject(err));
    });
}
