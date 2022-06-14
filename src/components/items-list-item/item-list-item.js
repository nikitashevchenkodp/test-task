import React from 'react';
import Button from '../button/button';
import {formatNumberToUsd} from '../../utils/format-number';
import './item-list-item.css';

const ItemsListItem = ({item, onClick}) => {

  const {title, available, annualised_return, amount, ltv, invested} = item;

  const disabled = available <= 0 ? true : false;

  return (
    <li className='item'>
      <div className='item-info'>
        <h5 className='item-title'>
          {title}
        </h5>
        <div className='item-details'>
          Available: {formatNumberToUsd(available)}
        </div>
        <div className='item-details'>
          Anualised return: {annualised_return}%
        </div>
        <div className='item-details'>
          Amount: {formatNumberToUsd(amount)}
        </div>
        <div className='item-details'>LTV: {ltv}%</div>
      </div>
      <div className='invest'>
        {invested && <Invested />}
        <Button  onClick={onClick} disabled = {disabled}>
          invest
        </Button>
      </div>
    </li>
  )
}

const Invested = () => {
  return <span className='invested-label'>Invested</span>
}

export default ItemsListItem;