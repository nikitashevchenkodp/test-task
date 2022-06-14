import React, { useEffect, useState } from 'react';
import data from '../../current-loans.json';
import ItemsListItem from '../items-list-item/item-list-item';
import InvestForm from '../invest-form'
import './item-list.css';
import Modal from '../modal/modal';
import { useDispatch, useSelector } from 'react-redux';
import { loadLoans } from '../../redux/loans/loans-reducer';
import { transformData } from '../../utils/transform-data';
import { setCurrentLoan, showModal } from '../../redux/modal/modal-reducer';

const ItemsList = () => {

  const dispatch = useDispatch();
  const loans = useSelector((state) => state.loans.loansList)
  
  const handleClick = (id) => {
    dispatch(showModal(true))
    const findLoan = loans.filter((item) => item.id === id)
    dispatch(setCurrentLoan(findLoan[0]));
  }


  const transformetData = transformData(data.loans)

  useEffect(() => {
    dispatch(loadLoans(transformetData))
  }, []);

  const items = loans.map((item) => {
    return (
      <ItemsListItem key={item.id} item = {item} onClick = {() => handleClick(item.id)}/>
    )
  });

  return (
    <>
      <ul className='list'>
        {items}
      </ul>
      <Modal>
        <InvestForm />
      </Modal>
    </>
  )
}

export default ItemsList