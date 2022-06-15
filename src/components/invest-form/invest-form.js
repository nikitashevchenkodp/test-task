import React, {useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '../button';
import { addInvest } from '../../redux/loans/loans-reducer';
import { parseDate } from '../../utils/parseDate';
import { messages } from '../../utils/consts';
import { showModal } from '../../redux/modal/modal-reducer';
import { formatNumberToUsd } from '../../utils/format-number';
import './invest-form.css';


const InvestForm = () => {

  const [value, setValue] = useState(0);
  const [message, setMessage] = useState(" ");
  const [dirty, setDirty] = useState(false);
  const [disabled, setDisabled] = useState(false)

  const dispatch = useDispatch();
  const loan = useSelector((state) => state.modal.currentLoan)

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedLoan = {
      ...loan,
      available: loan.available - value,
      amount: loan.amount + +value,
      invested: true
    }
    dispatch(addInvest(updatedLoan));
    dispatch(showModal(false));
    setValue('');
    setDirty(false);
  }
  
  const validateInput = () => {
    if(value > loan?.available) {
      setMessage(messages.errorMore);
      setDisabled(true);
    } else if (value == 0) {
        if(dirty) {
          setMessage(messages.errorEmpty);
        }
        setDisabled(true);
    } else {
      setMessage('');
      setDisabled(false);
    }
  };

  useEffect(() => {
    validateInput();
  }, [value]);


  const endTime = parseDate(loan?.term_remaining);
  
  const month = endTime.months > 0 ? <span>{endTime.months} months</span> : null;
  const days = endTime.days > 0 ? <span>{endTime.days} days</span> : null;
  const hours = endTime.hours > 0 ? <span>{endTime.hours} hours</span> : null;

  return (
    <form className='form' onSubmit={onSubmit}>
        <h6 className='form-title'>
          Invest in Loan
        </h6>
        <p className='form-loan-title'>{loan?.title}</p>
        <p className='form-info'>Amount available: {formatNumberToUsd(loan?.available)}</p>
        <p className='form-info'>Loan ends in: {month} {days} {hours} </p>
        <div>
          <h6 className='form-amount'>Investment amount</h6>
          <div className='form-invest'>
            <div className='input-container'>
              <input 
                className = "form-input"
                name="amount" 
                value = {value} 
                onChange = {(e) => setValue(e.target.value.replace(/\D/, ''))}
                onFocus = {() => setDirty(true)} />
                {message && <div className='error-message'>{message}</div>}
            </div>
            <Button disabled = {disabled}>Invest</Button>
          </div>

        </div>
    </form>
  )
}

export default InvestForm