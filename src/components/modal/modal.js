import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showModal } from '../../redux/modal/modal-reducer';
import './modal.css';

const Modal = ({children}) => {

  const dispatch = useDispatch()
  const active = useSelector((state) => state.modal.active) 

  const styleModal = active ? "modal active" : "modal";
  const styleModalContent = active ? "modal-content active" : "modal-content";

  return (
      <div className={styleModal} onClick={() => dispatch(showModal(false))}>
        <div className={styleModalContent} onClick = {(e) => e.stopPropagation()}>
          <span className='modal-close' onClick={() => dispatch(showModal(false))} ></span>
          {children}
        </div>
      </div>
  )
}

export default Modal;