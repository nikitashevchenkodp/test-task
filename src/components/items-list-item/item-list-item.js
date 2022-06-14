import React from 'react';
import Button from '../button/button';
import './item-list-item.css';

const ItemsListItem = ({item, onClick}) => {
  const {title, available, annualised_return, amount, ltv} = item;
  return (
    <li className='item'>
      <div className='item-info'>
        <h5 className='item-title'>
          {title}
        </h5>
        <div className='item-details'>
          Available: {available}
        </div>
        <div className='item-details'>
          Anualised return: {annualised_return}
        </div>
        <div className='item-details'>
          Amount: {amount}
        </div>
        <div className='item-details'>LTV: {ltv}</div>
      </div>
      <div className='invest'>
        <Button  onClick={onClick}>
          invest
        </Button>
      </div>
    </li>
  )
}

export default ItemsListItem;