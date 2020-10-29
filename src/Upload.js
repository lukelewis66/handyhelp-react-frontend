// Pass the upload function a valid array of image file(s) and a UID
function Upload(images, UID) {
    if(images && UID) {
        var s3Urls = [];
        var imageUrl = '';
        const files = Array.from(images);
        for (let i = 0 ; i < files.length ; i++) {
            const formData = new FormData();
            formData.append("bucket", UID);
            formData.append("acl", "public-read-write");
            formData.append("key", files[i].name);
            formData.append("file", files[i]);
            fetch('http://localhost:8118/upload', {
                method: 'POST',
                body: formData,
            });
            imageUrl = 'http://' + UID + '.s3-us-west-1.amazonaws.com/' + files[i].name;
            s3Urls.push(imageUrl);
        }
    
        console.log('Upload succesful: image files uploaded to bucket designated by UID.');
        console.log(s3Urls);
        return s3Urls;
    }
    else {
        return (
            console.log('Upload failed: please return a valid UID or array of image files.')
        )
    }      
}

export default Upload