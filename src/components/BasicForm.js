import useInput from "../hooks/use-input";
import React, { Component } from "react";
import { useSetRecoilState } from "recoil";
import { newListState } from "../recoil/listState";

const isNotEmpty = (value) => value.trim() !== "";

const BasicForm = (props) => {
  const {
    value: idValue,
    isValid: idIsValid,
    hasError: idHasError,
    valueChangeHandler: idChangeHandler,
    inputBlurHandler: idBlurHandler,
    reset: resetID,
  } = useInput(isNotEmpty);
  const {
    value: userIdValue,
    isValid: userIdIsValid,
    hasError: userIdHasError,
    valueChangeHandler: userIdChangeHandler,
    inputBlurHandler: userIdBlurHandler,
    reset: resetUserId,
  } = useInput(isNotEmpty);
  const {
    value: titleValue,
    isValid: titleIsValid,
    hasError: titleHasError,
    valueChangeHandler: titleChangeHandler,
    inputBlurHandler: titleBlurHandler,
    reset: resetTitle,
  } = useInput(isNotEmpty);
  const handleAddNewAction = useSetRecoilState(newListState);

  let formIsValid = false;

  if (idIsValid && userIdIsValid && titleIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");

    const result = {
      id: idValue,
      userId: userIdValue,
      title: titleValue,
    };

    handleAddNewAction(result);

    resetID();
    resetUserId();
    resetTitle();
  };

  const idClasses = idHasError ? "form-control invalid" : "form-control";
  const userIdClasses = userIdHasError
    ? "form-control invalid"
    : "form-control";
  const titleClasses = titleHasError ? "form-control invalid" : "form-control";

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div className={idClasses}>
          <label htmlFor="name">ID</label>
          <input
            type="text"
            id="name"
            value={idValue}
            onChange={idChangeHandler}
            onBlur={idBlurHandler}
          />
          {idHasError && (
            <p className="error-text">Please enter a first name.</p>
          )}
        </div>
        <div className={userIdClasses}>
          <label htmlFor="name">User Id</label>
          <input
            type="text"
            id="name"
            value={userIdValue}
            onChange={userIdChangeHandler}
            onBlur={userIdBlurHandler}
          />
          {userIdHasError && (
            <p className="error-text">Please enter a last name.</p>
          )}
        </div>
      </div>
      <div className={titleClasses}>
        <label htmlFor="name">Title</label>
        <input
          type="text"
          id="name"
          value={titleValue}
          onChange={titleChangeHandler}
          onBlur={titleBlurHandler}
        />
        {titleHasError && (
          <p className="error-text">Please enter a valid title address.</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
