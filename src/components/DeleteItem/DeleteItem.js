import ModalWithForm from "../ModalWithForm/ModalWithForm";
import React from "react";
import close from "../../images/close.svg";

const DeleteItemModal = ({onClose, deleteCard}) => {
    return (
        <div className={"modal delte"}>
            <div className="delete__modal-container">
                <div className="delete__modal">
                    <div className="delete_modal-header">
                        <button className="delete__modal-close"> 
                            <img src={close} onClick={onClose} alt="Close Button" />
                        </button>
                    </div>
                    <div className="delete__modal-content">
                        <p className="delete__modal-text">
                            Are you sure you want to delete this item?
                        </p>
                        <p className="delete__modal-text">
                            This action is irreversible!
                        </p>
                    </div>
                </div>
                <div className="delete__modal-footer">
                    <button className="delete__button-confirm" onClick={deleteCard}>
                        Yes, delete item.
                    </button>
                    <button className="delete__button-cancel" onClick={onClose}>
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeleteItemModal;