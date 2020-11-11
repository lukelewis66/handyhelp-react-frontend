import React from "react";
import DeactivateContractor from "./DeactivateContractor.js"
import { Modal } from "react-bootstrap";

const ContractorEditProfile = () => {
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
          <p>Some text in the modal.</p>
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