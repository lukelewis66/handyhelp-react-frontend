import React, { useState } from "react";
import DeactivateContractor from "./DeactivateContractor.js";
import { Modal, Button } from "react-bootstrap";
import Upload from "../../Upload";

const ContractorEditProfile = () => {
    const [imageFiles, setImageFiles] = useState([])

    const handleChange = (e, field) => {
        const files = Array.from(e.target.files);
        setImageFiles(files)
    }

    const handleSubmit = () => {
        if (imageFiles.length > 0) {
            const server = process.env.REACT_APP_SERVER_URL;
            const imgurls = Upload(imageFiles, localStorage.getItem("UID"), "ProfilePic");
            const updateBody = {
                UID: localStorage.getItem("UID"),
                imageUrls: imgurls,
            }
            const updateUrl = `${server}/updateprofilepicture`;
            const requestOpts = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(updateBody),
            }
            fetch(updateUrl, requestOpts).then((response => response.text().then(message => console.log(message))));
        }
    }

    return (
        <div className="component-border">
            <h1>ContractorEditProfile component</h1>
            <button otrype="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Deactivate Account</button>
            <div class="modal fade" id="myModal" role="dialog"></div>
            <div class="modal-dialog">
            <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Modal Header</h4>
        </div>
        <div class="modal-body">
          <p>Upload a new profile picture:</p>
          <input type="file" accept="image/*" onChange={(e) => handleChange(e)} />
          <Button variant="primary" onClick={handleSubmit}>Upload selected files</Button>
          <p>Note: this will override your current profile picture!</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
            </div>
        </div>
        
        );

    function openModal(){
        return(
        <Modal>Are you sure you want to Deactivate your account</Modal>
            
        )
    }
}

export default ContractorEditProfile;