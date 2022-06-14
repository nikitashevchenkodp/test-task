import React from 'react';
import { useSelector } from 'react-redux';
import { formatNumberToUsd } from '../../utils/format-number';
import { totalAvalible } from '../../utils/total-available';
import './total-panel.css'

const TotalPanel = () => {

  const loans = useSelector((state) => state.loans.loansList);
  const total = totalAvalible(loans)

  return (
    <div className='total-panel'>
      <p>Total amount available for investment: </p>
      <span>{formatNumberToUsd(total)}</span>
    </div>
  )
}

export default TotalPanel;