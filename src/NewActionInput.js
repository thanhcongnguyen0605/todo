import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { newListState } from './recoil/listState';

import useInput from '../hooks/use-input'



//  const NewActionInput = (props) => {
//   const [enteredName, setEnteredName] = useState('');
//   const nameInputChangeHandler = event => {
//   setEnteredName(event.target.value);
// }
//   const formSubmissionHandler = event => {
//     event.preventDefault();
//     console.log(enteredName)
//   };
 
// }



const NewActionInput = () => {

  const handleAddNewAction = useSetRecoilState(newListState);
  const [values, setValues] = useState({
    id: '',
    userId: '',
    title: '',
    complete: ''
  });

  

  const handleUserIdInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      userId: event.target.value,
    }));
  };

  const handleIdInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      id: event.target.value,
    }));
  };
  
  const handleTitleInputChange = (event) => {
    event.persist();
    setValues((values) => ({
      ...values,
      title: event.target.value,
    }));
  };

  

  return (
    <div className='action-input'>
  <input
    id="id"
    class="form-field"
    type="text"
    placeholder="Id"
    name="id"
    value={values.id}
    onChange={handleIdInputChange}/>
  <input 
    id='userId' 
    class='form-field' 
    type='text' 
    placeholder='userId' 
    name='userId' 
    value={values.userId} 
    onChange={handleUserIdInputChange} />
  <input
    id="title"
    class="form-field"
    type="text"
    placeholder="title"
    name="title"
    value={values.title}
    onChange={handleTitleInputChange} />
  {/* <input
    id="complete"
    class="form-field"
    type="text"
    placeholder="complete"
    name="complete"
    value={values.complete}
    onChange={handleTitleInputChange} /> */}
  
  <button onClick={handleAddNewAction}>Add</button>
    </div>
  );
};

 export default NewActionInput;
