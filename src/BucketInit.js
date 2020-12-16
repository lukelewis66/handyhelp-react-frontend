// If given a valid, alphanumeric UID the function will create a public bucket named under the UID
// If given a null or non-alphanumeric UID the function will console log an error

function BucketInit(UID) {
    return new Promise(function (resolve, reject) {

        console.log("in BucketInit");
        var stringUID = UID.toString();
        var result = 'Bucket initialized under: ' + UID;
        var alphanumeric = /^[0-9a-zA-Z]+$/;
        if (stringUID && stringUID.match(alphanumeric)) {
            UID = UID.toLowerCase();
            let formData = new FormData();
            let server = `${process.env.REACT_APP_SERVER_URL}/bucketinit`;
            formData.append('UID', UID);
            formData.append('ACL', 'public-read-write');
            console.log("formdata: ", formData);
            fetch(server, {
                method: "POST",
                body: formData,
            }).then(() => resolve("success"));
        }
        else {
            reject('Bucket initialization failed: please provide a valid UID that is alphanumeric.');
        }
    })
}

export default BucketInit