import React from "react";

const Modal = ({ showModal, onClose }) => {
    

    function handleClose(){
        onClose();
    }

    return (
        <div>
            {
                showModal &&

                <div className="model-overlay">
                    <button 
                    onClick={handleClose}
                    className="model-close">Close</button>
                    <p>This is the content of the modal.</p>
                </div>
            }
        </div>
    )
}

export default Modal;