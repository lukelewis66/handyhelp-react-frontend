// If given a valid, alphanumeric UID the function will create a public bucket named under the UID
// If given a null or non-alphanumeric UID the function will console log an error

function BucketInit(UID) {
    var stringUID = UID.toString();
    var result = 'Bucket initialized under: ' + UID;
    var alphanumeric = /^[0-9a-zA-Z]+$/;
    if(stringUID && stringUID.match(alphanumeric)) {
            UID = UID.toLowerCase();
            let formData = new FormData();
            let server = 'http://localhost:8118/bucketinit';
            formData.append('Bucket', UID);
            formData.append('ACL', 'public-read-write');
            fetch(server, {
                method: "POST",
                body: formData,
            })
    }
    else {
        result = 'Upload failed: please provide a valid UID that is alphanumeric.';
    }
    console.log(result);
    return '';
}

export default BucketInit