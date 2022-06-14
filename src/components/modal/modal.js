import React from 'react';
import './modal.css';

const Modal = ({children, active, setActive}) => {

  const styleModal = active ? "modal active" : "modal";
  const styleModalContent = active ? "modal-content active" : "modal-content";

  return (
      <div className={styleModal} onClick={() => setActive(false)}>
        <div className={styleModalContent} onClick = {(e) => e.stopPropagation()}>
          <span className='modal-close' onClick={() => setActive(false)} ></span>
          {children}
        </div>
      </div>
  )
}

export default Modal;