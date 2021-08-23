import React from "react";
import { useSelector } from "react-redux";

const DisplayTable = () => {
  const selector = useSelector((state) => state.users);
  console.log(selector);

  return (
    <>
      {selector.map((ele, idx) => {
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

export default DisplayTable;
