import React, { useState } from "react";


import { Modal, Button, Form } from "react-bootstrap";

import { SKILLTAGS } from "../../constants/skilltags";

import Upload from "../../Upload";

//https://codeburst.io/react-image-upload-with-kittens-cc96430eaece

const MakeListingModal = () => {
    //https://react-bootstrap.github.io/components/modal/
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        active: true,
        client: "clients/po1X8blsdRaEdsSMXpRf", //fake@google.com
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

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
        console.log("val: ", val);
        //copies previous form state, and updates the changed form field
        setForm((prevState) => ({
            ...prevState,
            [field]: val
        }))
    }

    const handleSubmit = () => {
        if (form.title === "" || form.description === "") {
            alert("Listing title and description must be filled out");
        }
        else {
            const server = "http://localhost:8118";
            const url = `${server}/addlisting/`;
            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form)
            }
            fetch(url, requestOptions)
                .then((response => response.text()
                    .then(id => {
                        console.log("response id: ", id);
                        Upload(imageFiles);
                    })));
        }
    }

    return (
        <div className="component-border">
            <h3>MakeListingModal component</h3>
            <Button variant="primary" onClick={handleShow}>
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
                                <input type="file" accept="image/*" multiple onChange={(e) => handleChange(e, "images")} />
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
                </Modal.Footer>
            </Modal>
        </div >
    );

}

export default MakeListingModal;