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

    });
}