import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';


function WantToDelete({ showDeleteModal, hideTheDeleteModal, deleteTheQuestion }) {
    const deleteTheGivenQuestion = () => {
        deleteTheQuestion();
        hideTheDeleteModal();
    }

    const handleClose = () => {
        hideTheDeleteModal();
    }

    return (
        <div>
            <Modal
                show={showDeleteModal}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Do you want to Delete..
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={deleteTheGivenQuestion}>I want to delete the given question</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default WantToDelete
