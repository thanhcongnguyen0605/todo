import React from 'react';
import { useRecoilValue } from 'recoil';
import { completedListState } from './recoil/listState';
import ExpenseItem from './ExpenseItem';

const CompletedList = () => {
  const completedList = useRecoilValue(completedListState);

  return (
    <div className='col'>
      <h3>Done</h3>
      <ul>
        {completedList.map((item) => (

          
     <li key={item.id}>
            <ExpenseItem title={item.title} />
      
           
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompletedList;
