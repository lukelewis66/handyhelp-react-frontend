// Pass the upload function a valid array of image file(s), UID, and the type of images being uploaded:
// if the image being uploaded is for a profile picture, pass "ProfilePic" as the type, 
// if it's a listing picture, pass the LID as the type.
function Upload(images, UID, type, id) {
    if (images && UID && type && id) {
        var s3Urls = [];
        const files = Array.from(images);
        for (let j = 0; j < files.length; j++) {
            if (!files[j].type.match('image.*')) {
                alert("Your images were not uploaded: please only upload files that ends in .jpg, .jpeg, .png or .html");
                return (
                    console.log('Upload failed: one or more of your file(s) was not an image file.')
                )
            }
        }
        for (let i = 0; i < files.length; i++) {
            var imageUrl = 'http://' + UID.toLowerCase() + '.s3-us-west-1.amazonaws.com/';
            const formData = new FormData();
            formData.append("type", type);
            formData.append("IDnum", id);
            formData.append("bucket", UID);
            formData.append("acl", "public-read-write");
            formData.append("key", files[i].name);
            formData.append("file", files[i]);
            fetch(`${process.env.REACT_APP_SERVER_URL}/upload`, {
                method: 'POST',
                body: formData,
            });
            if (type == 'ProfilePic') {
                imageUrl += 'ProfilePic.png';
            }
            else if (type == 'Listing') {
                imageUrl += 'Listings/' + id + '/' + files[i].name;
            }
            else {
                imageUrl += 'Feed/' + id + '/' + files[i].name;
            }
            s3Urls.push(imageUrl);
        }

        console.log('Upload succesful: image file(s) uploaded to bucket designated by UID.');
        console.log(s3Urls);
        return s3Urls;
    }
    else {
        return (
            console.log('Upload failed: you did not provide all the neccessary parameters for Upload().')
        )
    }
}

export default Upload