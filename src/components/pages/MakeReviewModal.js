import React, { useEffect, useState } from "react";

import { Modal, Button, Form} from "react-bootstrap";

import { SKILLTAGS } from "../../constants/skilltags";

import { useToasts } from "react-toast-notifications";

//https://codeburst.io/react-image-upload-with-kittens-cc96430eaece

const MakeReviewModal = ({ UID, refreshReviews }) => {
  console.log("Passed UID: " + UID);
  //https://react-bootstrap.github.io/components/modal/
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    contractor: UID,
    client: localStorage.getItem("UID"),
    title: "",
    description: "",
    rating: 0,
    skilltags: [],
  });
  useEffect(() => {
    setForm((prevState) => ({
      ...prevState,
      contractor: UID,
    }));
  }, []);

  // const showTags = () => {
  //   return SKILLTAGS.map((tag) => (
  //     <Form.Check
  //       type="checkbox"
  //       label={tag.label}
  //       value={tag.label}
  //       onChange={(e) => handleChange(e, "skilltags")}
  //     />
  //   ));
  // };

  const clearForm = () => {
    console.log("clear form called");
    setForm(() => ({
      client: localStorage.getItem("UID"),
      contractor: UID,
      title: "",
      description: "",
      rating: 0,
      skilltags: [],
    }));
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const { addToast } = useToasts();

  const handleChange = (e, field) => {
    let val;
    val = e.target.value;

    //copies previous form state, and updates the changed form field
    setForm((prevState) => ({
      ...prevState,
      contractor: UID,
      [field]: val,
    }));
  };

  const handleSubmit = () => {
    console.log("Form: ", form);
    if (form.title === "" || form.description === "" || form.rating === 0) {
      var content = "Title, description, and rating must be filled out";
      addToast(content, {
        appearance: "error",
        autoDismiss: true,
      });
      //alert("Title, description, and rating must be filled out");
    } else if (
      form.rating != 1 &&
      form.rating != 2 &&
      form.rating != 3 &&
      form.rating != 4 &&
      form.rating != 5
    ) {
      var content = "Please enter either 1, 2, 3, 4, or 5 in the rating";
      addToast(content, {
        appearance: "error",
        autoDismiss: true,
      });
      //alert("Please enter either 1, 2, 3, 4, or 5 in the rating");
    } else {
      const server = process.env.REACT_APP_SERVER_URL;
      const url = `${server}/addreview/`;
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      };
      console.log("FORM: ");
      console.log(form);
      fetch(url, requestOptions).then((response) =>
        response.text().then((id) => {
          console.log("response id: ", id);

          // Whoever is uploading should pass their UID and LID (if uploading listing images) or 'ProfilePic' (if uploading profile pictures)
          // upload images and update listing document if user has added photos

          handleClose();
          clearForm();
          addToast("Your review has been added", {
            appearance: "success",
            autoDismiss: true,
          });
          refreshReviews();
        })
      );
    }
  };

  return (
    <div >
      <Button variant="primary" onClick={handleShow}>
        Create Review
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Review Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Review Title</Form.Label>
              <Form.Control
                placeholder="Ex: Great Service"
                field="title"
                onChange={(e) => handleChange(e, "title")}
              />
              <Form.Text className="text-muted">
                Enter a descriptive title for your Review
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                field="description"
                onChange={(e) => handleChange(e, "description")}
              />
              <Form.Text className="text-muted">
                Enter a more thorough description of your listing
              </Form.Text>
            </Form.Group>
            <Form.Group>
              <Form.Label>Rating</Form.Label>
              <Form.Control
                field="rating"
                onChange={(e) => handleChange(e, "rating")}
              />
              <Form.Text className="text-muted">
                Enter an integer between 1 - 5
              </Form.Text>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Publish Review
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MakeReviewModal;
