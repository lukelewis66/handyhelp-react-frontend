function Upload(props) {
    var s3Urls = [];
    var imageUrl = '';
    const files = Array.from(props);
    for (let i = 0 ; i < files.length ; i++) {
        const formData = new FormData();
        formData.append("acl", "public-read-write");
        formData.append("key", files[i].name);
        formData.append("file", files[i]);
        fetch('http://localhost:8118/upload', {
            method: 'POST',
            body: formData,
        });
        imageUrl = 'http://handyhelpimages.s3-us-west-1.amazonaws.com/' + files[i].name;
        s3Urls.push(imageUrl);
    }
    
    console.log(s3Urls);
    return s3Urls;      
}

export default Upload