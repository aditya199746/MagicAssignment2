import React from "react";
import { connect } from "react-redux";

const DisplayTable = (props) => {
  //const selector = useSelector((state) => state.users);
  //console.log(selector);

  return (
    <>
      {props.users.map((ele, idx) => {
        return (
          <ul key={idx}>
            <li>{ele.nameText}</li>
            <li>{ele.numberText}</li>
            <li>{ele.gender}</li>
          </ul>
        );
      })}
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

export default connect(mapStateToProps)(DisplayTable);
