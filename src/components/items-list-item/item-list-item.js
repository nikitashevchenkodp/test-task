import React from 'react';
import Button from '../button/button';
import './item-list-item.css';

const ItemsListItem = ({item, onClick}) => {
  return (
    <li className='item'>
      <div className='item-info'>
        <h5 className='item-title'>
          Name of Loan
        </h5>
        <div className='item-details'>
          Available: 
        </div>
        <div className='item-details'>
          Anualised return: 
        </div>
        <div className='item-details'>
          Amount: 
        </div>
        <div className='item-details'>LTV:</div>
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