import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap';
import './Modal.css'
function SuccessModal({ showModal, hideTheModal }) {


    const handleClose = () => {
        hideTheModal()
        window.location.reload();
    };


    return (
        <div>
            <Modal className='modal' show={showModal} onHide={handleClose}>
                <Modal.Header className='modal-header' >
                    <Modal.Title className='modal-title'>
                        <i class="fas fa-check-circle success-icon"></i>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body className='the-modal-body'>
                    Thank you for sharing valuable information
                    Your response has been recorded successfully!
                </Modal.Body>
                <Modal.Footer className='modal-footer'>
                    <Button variant="success" className='modal-button ' onClick={handleClose}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SuccessModal
