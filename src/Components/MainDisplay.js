import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_DATA, USER_NAME, USER_AGE, USER_GENDER } from "./Actions/index";
import DisplayTable from "./DisplayTable";
import { connect } from "react-redux";
const MainDisplay = (props) => {
  const { userAddProps, userNameProps, userAgeProps, userGenderProps } = props;

  const handleChange = (e) => {
    let nameVal = e.target.value;

    if (e.target.name === "userName") {
      let valid = nameVal.match(/[A-Za-z]/gi, "");
      console.log(valid, "regex");
      userNameProps(valid);
    } else if (e.target.name === "userAge") {
      userAgeProps(nameVal);
    } else if (e.target.name === "userGender") {
      userGenderProps(nameVal);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let nameText = props.userName; //nameSel; //e.target.userName.value;
    let numberText = props.userAge; //ageSel; //e.target.userAge.value;
    let gender = props.userGender; //genderSel; //e.target.userGender.value;

    const payload = {
      nameText,
      numberText,
      gender,
    };
    //dispatch(ADD_DATA(payload));

    userAddProps(payload);
    userNameProps("");
    userAgeProps("");
    userGenderProps("");
    //console.log(selector);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="userName"
          type="text"
          onChange={handleChange}
          value={props.userName}
        ></input>
        <input
          name="userAge"
          type="number"
          onChange={handleChange}
          value={props.userAge}
        ></input>

        <select
          disabled={props.userAge === ""}
          name="userGender"
          onChange={handleChange}
          value={props.userGender}
        >
          <option>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        {
          <button disabled={props.userGender === ""} type="submit">
            Submit
          </button>
        }
      </form>
      <div></div>
      <DisplayTable />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    userName: state.userName,
    userAge: state.userAge,
    userGender: state.userGender,
  };
};

const dispatchToProps = (dispatch) => {
  return {
    userNameProps: (value) => {
      dispatch(USER_NAME(value));
    },

    userAgeProps: (value) => {
      dispatch(USER_AGE(value));
    },

    userGenderProps: (value) => {
      dispatch(USER_GENDER(value));
    },

    userAddProps: (value) => {
      dispatch(ADD_DATA(value));
    },
  };
};

export default connect(mapStateToProps, dispatchToProps)(MainDisplay);
