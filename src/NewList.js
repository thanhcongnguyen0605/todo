import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  editRecordState,
  deleteListState,
  newListState,
} from "./recoil/listState";
import ExpenseItem from "./UI/ExpenseItem";
import useInput from "./hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";

const FormAddNewRecord = (props) => {
  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput(isNotEmpty);
  const handleAddNewAction = useSetRecoilState(editRecordState);

  let formIsValid = false;

  if (titleIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");

    const result = {
      title: titleValue,
      id: props.id,
    };
    console.log(result);

    handleAddNewAction(result);

    resetTitle();
  };

  const titleClasses = titleHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group"></div>
      <div className={titleClasses}>
        <label htmlFor="name">Title</label>
        <input
          type="text"
          id="name"
          value={titleValue}
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
        />
      </div>
      <div className="form-actions">
        <button>Edit</button>
      </div>
    </form>
  );
};

const NewList = () => {
  const newList = useRecoilValue(newListState);
  const setInprogress = useSetRecoilState(deleteListState);
  const handleClickDelete = (id) => () => {
    setInprogress(id);
  };

  return (
    <div className="col">
      <h3>To Do</h3>
      <ul>
        {newList.map((item) => (
          <li key={item.id}>
            <ExpenseItem title={item.title} />

            <button onClick={handleClickDelete(item.id)}>Delete</button>

            <FormAddNewRecord id={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewList;
