import React, { useState } from 'react';
import data from '../../current-loans.json';
import ItemsListItem from '../items-list-item/item-list-item';
import InvestForm from '../invest-form'
import './item-list.css';
import Modal from '../modal/modal';

const ItemsList = () => {

  const [active, setActive] = useState(false)

  const items = data.loans.map((item) => {
    return (
      <ItemsListItem key={item.id} item = {item} onClick = {setActive}/>
    )
  });

  return (
    <>
      <ul className='list'>
        {items}
      </ul>
      <Modal active = {active} setActive = {setActive}>
        <InvestForm />
      </Modal>
    </>
  )
}

export default ItemsList