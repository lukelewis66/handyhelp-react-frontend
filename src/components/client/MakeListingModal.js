import React, { useState } from "react";


import { Modal, Button, Form, Spinner } from "react-bootstrap";

import { SKILLTAGS } from "../../constants/skilltags";
import { useToasts } from "react-toast-notifications";
import { addListing } from "../../firebase/Client";


//https://codeburst.io/react-image-upload-with-kittens-cc96430eaece

const MakeListingModal = ({ refreshListings }) => {
    //https://react-bootstrap.github.io/components/modal/
    const [spinnerActive, setSpinnerActive] = useState(false);
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        active: true,
        client: localStorage.getItem("UID"),
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

    const getExtension = (file) => {
        var parts = file.split('.');
        return parts[parts.length - 1];
    }

    const isImage = (file) => {
        var ext = getExtension(file).toLowerCase();
        console.log(ext);
        if (ext === "jpg" || ext === "jpeg" || ext === "png") {
            return true;
        }
        return false;
    }



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
            var i;
            var correctFiles = true;
            for (i = 0; i < files.length; i++) {
                if (!(isImage(files[i].name))) {
                    correctFiles = false;
                }
            }
            if (correctFiles) {
                setImageFiles(files);
                val = [];
            }
            else {
                setImageFiles([]);
                val = [];
                var content = "Incorrect file type(s)! Please reselect your images"
                addToast(content, {
                    appearance: 'error',
                    autoDismiss: true,
                });
            }
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
        setSpinnerActive(true);
        addListing(localStorage.getItem("UID"), form, imageFiles)
            .then(content => {
                addToast(content, {
                    appearance: 'success',
                    autoDismiss: true,
                });
                //alert("Your listing has been added.");
                refreshListings();
                handleClose();
                clearForm();
                setSpinnerActive(false);
            })
            .catch(content => {
                addToast(content, {
                    appearance: 'error',
                    autoDismiss: true,
                });
                setSpinnerActive(false);
            });

    }

    return (
        <div className="listing-modal">
            <Button style={{ textAlign: "center" }} className="" variant="primary" onClick={handleShow}>
                Create Listing
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter Listing Info</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Listing Title</Form.Label>
                            <Form.Control
                                placeholder="Ex: Need help fixing my fence"
                                field="title"
                                onChange={(e) => handleChange(e, "title")} />
                            <Form.Text className="text-muted">Enter a descriptive title for your listing</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                field="description"
                                onChange={(e) => handleChange(e, "description")} />
                            <Form.Text className="text-muted">Enter a more thorough description of your listing</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Images</Form.Label>
                            <div>
                                <input type="file" accept="image/*" multiple style={{ overflow: "hidden" }} onChange={(e) => handleChange(e, "images")} />
                            </div>
                            <Form.Text className="text-muted">Choose up to 10 images for your listing</Form.Text>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Select Tags</Form.Label>
                            {showTags()}
                            <Form.Text className="text-muted">Select any relevant tags to help contractors find your listing.</Form.Text>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
              </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Publish Listing
              </Button>
                    {spinnerActive ? <Spinner animation="border" /> : null}

                </Modal.Footer>
            </Modal>
        </div >
    );

}

export default MakeListingModal;