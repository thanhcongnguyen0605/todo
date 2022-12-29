import React from 'react';

import Card from '../src/UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <Card className='expense-item'>
     
      <div className='expense-item__description'>
      <h2>{props.title}</h2>
        
      </div>
    </Card>
  );
}

export default ExpenseItem;
