import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { newListState, deleteListState } from './recoil/listState';
import ExpenseItem from './ExpenseItem';

const NewList = () => {
  const newList = useRecoilValue(newListState);
  const setInprogress = useSetRecoilState(deleteListState);
  const handleClickDelete = (id) => () => {
    setInprogress(id);
  };

  return (
    <div className='col'>
      <h3>To Do</h3>
      <ul>
        {newList.map((item) => (
          <li key={item.id}>
            <ExpenseItem title={item.title} />
      
            <button onClick={handleClickDelete(item.id)}>Delete</button>
            <button onClick={handleClickDelete(item.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewList;
