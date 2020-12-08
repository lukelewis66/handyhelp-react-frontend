import React, { useEffect, useState, useRef } from "react";
import { Modal, Form, Button } from "react-bootstrap";
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
  useEffect(() => {
    checkUserActive(localStorage.getItem("UID")).then((data) => {
      if (data.active) {
        setActive(<AccountDeactivate />);
      } else {
        setActive(<AccountReactivate />);
      }
    });
  }, []);

  const [contractorInfo, setInfo] = useState([]);
  useEffect(() => {
    getContractor(localStorage.getItem("UID")).then((data) => {
      setInfo(data);
    });
  }, []);

  const [formMessage, setFormMessage] = useState("");
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
    var name = nameRef.current.value;
    var phone = phoneRef.current.value;
    var bio = bioRef.current.value;
    var tags = skills;

    if(name === "" || phone === "" || bio === "" || !tags[0]) {
      var content = "All fields must be filled";
      addToast(content, {
        appearance: 'error',
        autoDismiss: true,
      });
      setFormMessage("All fields must be filled");
    } else {
      const imgurls = Upload(imageFiles, localStorage.getItem("UID"), "ProfilePic", "placeholder");
      console.log("imgurls: ", imgurls);
      editContractor(
        name,
        phone,
        bio,
        tags,
        localStorage.getItem("UID"),
        imgurls
      ).then(() => window.location.reload());
    }
    e.preventDefault();
  };

  const isImage = (file) => {
    var ext = getExtension(file);
    console.log(ext);
    if(ext === "jpg" || ext === "jpeg" || ext === "png") {
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
    for(i = 0; i < files.length; i++) {
      if(!(isImage(files[i].name))) {
        correctFiles = false;
      }
    }
    if(correctFiles) {
      setImageFiles(files);
    } else {
      setImageFiles([]);
      var content = "Incorrect file type(s)! Please reselect your images"
      addToast( content, {
        appearance: 'error',
        autoDismiss: true,
      });
    }
    console.log('correctFiles: ', correctFiles);
  }

  // const handleSubmit = () => {
  //   if (imageFiles.length > 0) {
  //     const imgurls = Upload(imageFiles, localStorage.getItem("UID"), "ProfilePic", "");
  //     const server = process.env.REACT_APP_SERVER_URL;
  //     const updateBody = { imageUrls: imgurls }
  //     const updateUrl = `${server}/updateprofilepicture`;
  //     const requestOpts = {
  //         method: "POST",
  //         headers: { "Content-Type": "application/json" },
  //         body: JSON.stringify(updateBody),
  //     }
  //     fetch(updateUrl, requestOpts).then((response => response.text().then(message => console.log(message))));
  //   }
  //   var content = 'Your profile picture has been added';
  //   addToast( content, {
  //     appearance: 'success',
  //     autoDismiss: true,
  //   });
  // }
  //This was at the botton of the return statement.
  /*
    
  */
  return (
    <div>
      <div className="tabStyleEdit">
        <Form className="formStyle">
          <Form.Group>
            <h1>Upload a profile picture:</h1>
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
          {active}
        </Form>
        <button
          otrype="button"
          class="btn btn-info btn-lg"
          data-toggle="modal"
          data-target="#myModal"
        >
          Deactivate Account
        </button>
        <div class="modal fade" id="myModal" role="dialog"></div>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
              <h4 class="modal-title">Modal Header</h4>
            </div>
            <div class="modal-body">
              <p>Some text in the modal.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  function openModal() {
    return <Modal>Are you sure you want to Deactivate your account</Modal>;
  }
};

export default ContractorEditProfile;
