import React, { useEffect, useState, useRef } from "react";
import { Modal, Form, Button, Spinner } from "react-bootstrap";
import { getContractor } from "../../firebase/Contractor";
import { SKILLTAGS } from "../../constants/skilltags";
import {
  checkUserActive,
  editContractor,
} from "../../firebase/accountFunctions";
import AccountDeactivate from "../account/AccountDeactivate";
import AccountReactivate from "../account/AccountReactivate";
import { useToasts } from "react-toast-notifications";
import Upload from "../../Upload";

const ContractorEditProfile = () => {
  const [imageFiles, setImageFiles] = useState([]);
  const [active, setActive] = useState();
  const [contractorInfo, setInfo] = useState([]);
  const [spinnerActive, setSpinnerActive] = useState(false);

  useEffect(() => {
    checkUserActive(localStorage.getItem("UID")).then((data) => {
      if (data.active) {
        setActive(<AccountDeactivate />);
      } else {
        setActive(<AccountReactivate />);
      }
    });
    getContractor(localStorage.getItem("UID")).then((data) => {
      setInfo(data);
    });
  }, []);

  const { addToast } = useToasts();

  const showTags = () => {
    return SKILLTAGS.map((tag) => (
      <Form.Check
        type="checkbox"
        label={tag.label}
        value={tag.label}
        onChange={(e) => handleChange(e)}
      />
    ));
  };
  let skills = [];

  const handleChange = (e) => {
    const curTag = e.target.value;
    if (skills.some((tag) => tag === curTag)) {
      skills.splice(skills.indexOf(curTag), 1);
    } else {
      skills.push(e.target.value);
    }
    console.log(skills);
  };
  const nameRef = useRef();
  const phoneRef = useRef();
  const bioRef = useRef();

  const handleClick = (e) => {
    setSpinnerActive(true);
    var name = nameRef.current.value;
    var phone = phoneRef.current.value;
    var bio = bioRef.current.value;
    var tags = skills;

    if (name == "" || phone == "" || bio == "") {
      var content = "All fields must be filled";
      addToast(content, {
        appearance: 'error',
        autoDismiss: true,
      });
    } else {
      Upload(imageFiles, localStorage.getItem("UID"), "ProfilePic", "placeholder").then(imgurls => {
        console.log("imgurls: ", imgurls);
        if (imgurls[0]) {
          editContractor(
            name,
            phone,
            bio,
            tags,
            localStorage.getItem("UID"),
            imgurls
          ).then(() => {
            setSpinnerActive(false);
            window.location.reload()
          });
        }
        else {
          editContractor(
            name,
            phone,
            bio,
            tags,
            localStorage.getItem("UID"),
            contractorInfo.profilepic
          ).then(() => {
            setSpinnerActive(false);
            window.location.reload();
          });
        }
      })
    }
    e.preventDefault();
  };

  const isImage = (file) => {
    var ext = getExtension(file).toLowerCase();
    console.log(ext);
    if (ext === "jpg" || ext === "jpeg" || ext === "png") {
      return true;
    }
    return false;
  }

  const getExtension = (file) => {
    var parts = file.split('.');
    return parts[parts.length - 1];
  }

  const handleImageChange = (e) => {
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
    } else {
      setImageFiles([]);
      var content = "Incorrect file type(s)! Please reselect your images"
      addToast(content, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
    console.log('correctFiles: ', correctFiles);
  }

  return (
    <div>
      <div className="tabStyleEdit">
        <Form className="formStyle">
          <Form.Group>
            <Form.Label>Upload a profile picture</Form.Label>
            <br />
            <input type="file" accept="image/*" onChange={(e) => handleImageChange(e)} />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control value={contractorInfo.email} disabled />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              defaultValue={contractorInfo.name}
              placeholder="Enter Name"
              autoComplete="name"
              id="name"
              ref={nameRef}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="text"
              defaultValue={contractorInfo.phone}
              placeholder="Enter Phone Number"
              autoComplete="tel"
              id="phone"
              ref={phoneRef}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Bio</Form.Label>
            <Form.Control
              as="textarea"
              defaultValue={contractorInfo.bio}
              placeholder="Enter Bio"
              autoComplete="off"
              id="bio"
              ref={bioRef}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Select Tags</Form.Label>
            {showTags()}
            <Form.Text className="text-muted">
              Select any relevant tags that relate to your expertise.
            </Form.Text>
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            id="submitButton"
            onClick={handleClick}
          >
            Submit
          </Button>
          {spinnerActive ? <Spinner animation="border" /> : null}
          {active}
        </Form>
      </div>
    </div>
  );

  function openModal() {
    return <Modal>Are you sure you want to Deactivate your account</Modal>;
  }
};

export default ContractorEditProfile;
