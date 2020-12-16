import React, { useState } from "react";


import { Modal, Button, Form, Spinner } from "react-bootstrap";

import { SKILLTAGS } from "../../constants/skilltags";

import Upload from "../../Upload";
import { useToasts } from "react-toast-notifications";

//https://codeburst.io/react-image-upload-with-kittens-cc96430eaece

const MakeFeedItemModal = ({ refreshFeed }) => {
    //https://react-bootstrap.github.io/components/modal/
    const [spinnerActive, setSpinnerActive] = useState(false);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        contractor: localStorage.getItem("UID"),
        title: "",
        description: "",
        images: [],
        skilltags: [],
    });

    const [imageFiles, setImageFiles] = useState([])

    const showTags = () => {
        return SKILLTAGS.map((tag) => (
            <Form.Check type="checkbox" label={tag.label} value={tag.label} onChange={(e) => handleChange(e, "skilltags")} />
        ));
    }
    const clearForm = () => {
        console.log("clear form called");
        setForm((prevState) => ({
            ...prevState,
            title: "",
            description: "",
            images: [],
            skilltags: [],
        }))
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { addToast } = useToasts();


    const handleChange = (e, field) => {
        let val;
        if (field === "skilltags") {
            val = [...form.skilltags];
            const curTag = e.target.value;
            if (val.some((tag) => tag === curTag)) {
                val.splice(val.indexOf(curTag), 1);
            }
            else {
                val.push(e.target.value);
            }
        }
        else if (field === "images") {
            const files = Array.from(e.target.files);
            setImageFiles(files);
            val = [];
        }
        else {
            val = e.target.value;
        }
        //copies previous form state, and updates the changed form field
        setForm((prevState) => ({
            ...prevState,
            [field]: val
        }))
    }

    const handleSubmit = () => {
        console.log("Form: ", form);
        if (form.title === "" || form.description === "") {
            var content = 'Post title and description must be filled out'
            addToast(content, {
                appearance: 'error',
                autoDismiss: true,
            });
        }
        else {
            setSpinnerActive(true);
            const server = process.env.REACT_APP_SERVER_URL;
            const url = `${server}/addfeeditem/`;
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            }
            fetch(url, requestOptions)
                .then((response => response.text()
                    .then(id => {
                        console.log("response id: ", id);

                        // Whoever is uploading should pass their UID and LID (if uploading listing images) or 'ProfilePic' (if uploading profile pictures)
                        // upload images and update listing document if user has added photos
                        if (imageFiles.length > 0) {
                            Upload(imageFiles, localStorage.getItem("UID"), "Feed", id).then(imgurls => {
                                const updateBody = {
                                    feedID: id,
                                    imageUrls: imgurls,
                                }
                                const updateUrl = `${server}/updatefeeditemimages`;
                                const requestOpts = {
                                    method: "POST",
                                    headers: { "Content-Type": "application/json" },
                                    body: JSON.stringify(updateBody),
                                }
                                fetch(updateUrl, requestOpts).then(() => {
                                    refreshFeed();
                                    handleClose();
                                    clearForm();
                                    setSpinnerActive(false);
                                    var content = 'Your post has been added';
                                    addToast(content, {
                                        appearance: 'success',
                                        autoDismiss: true,
                                    });
                                })
                            })
                        }
                    })));
        }
    }
    return (
        <div className="feedModal">
            <Button variant="primary" onClick={handleShow}>
                Create Post
                </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Post Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Post Title</Form.Label>
                            <Form.Control
                                placeholder="Ex: Checkout this fence I fixed!"
                                field="title"
                                onChange={(e) => handleChange(e, "title")} />
                            <Form.Text className="text-muted">Enter a descriptive title for your post</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                field="description"
                                onChange={(e) => handleChange(e, "description")} />
                            <Form.Text className="text-muted">Enter a more thorough description of the work you did</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Images</Form.Label>
                            <div>
                                <input type="file" accept="image/*" multiple onChange={(e) => handleChange(e, "images")} />
                            </div>
                            <Form.Text className="text-muted">Choose up to 10 images for your post</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Select Tags</Form.Label>
                            {showTags()}
                            <Form.Text className="text-muted">Select any relevant tags to the post.</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Publish Post
                </Button>
                    {spinnerActive ? <Spinner animation="border" /> : null}
                </Modal.Footer>
            </Modal>
        </div >
    );

}

export default MakeFeedItemModal;