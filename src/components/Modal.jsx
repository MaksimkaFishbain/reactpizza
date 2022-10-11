import React from 'react';

const Modal = ({isOpened, setIsOpened}) => {
    return (
        <div className={isOpened ? "modal" : "modal.active"} onClick={() => setIsOpened(false)}>
            <div className="modal__content" onClick={e => e.stopPropagation()}>

            </div>
        </div>
    );
};

export default Modal;