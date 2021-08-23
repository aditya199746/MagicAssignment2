import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_DATA, USER_NAME, USER_AGE, USER_GENDER } from "./Actions/index";
import DisplayTable from "./DisplayTable";
const MainDisplay = () => {
  //const [state,setState]= useState();
  const dispatch = useDispatch();
  //const selector = useSelector((state) => state.users);
  const nameSel = useSelector((state) => state.userName);
  const ageSel = useSelector((state) => state.userAge);
  const genderSel = useSelector((state) => state.userGender);

  //useEffect(() => {}, []);

  const handleChange = (e) => {
    let nameVal = e.target.value;

    let ch = nameVal.split("");
    console.log(ch, "www");

    if (e.target.name === "userName") {
      dispatch(USER_NAME(nameVal));
      //dispatch(`${e.target.name}(${nameVal})`);
    } else if (e.target.name === "userAge") {
      dispatch(USER_AGE(nameVal));
      //dispatch(`${e.target.name}(${nameVal})`);
    } else if (e.target.name === "userGender") {
      dispatch(USER_GENDER(nameVal));
      //dispatch(`${e.target.name}(${nameVal})`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let nameText = nameSel; //e.target.userName.value;
    let numberText = ageSel; //e.target.userAge.value;
    let gender = genderSel; //e.target.userGender.value;

    const payload = {
      nameText,
      numberText,
      gender,
    };
    dispatch(ADD_DATA(payload));
    dispatch(USER_NAME(""));
    dispatch(USER_AGE(""));
    dispatch(USER_GENDER(""));
    //console.log(selector);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          name="userName"
          type="text"
          value={nameSel}
          onChange={handleChange}
        ></input>
        <input
          name="userAge"
          type="number"
          onChange={handleChange}
          value={ageSel}
        ></input>

        <select
          disabled={ageSel === ""}
          name="userGender"
          onChange={handleChange}
          value={genderSel}
        >
          <option>Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <button disabled={genderSel === ""} type="submit">
          Submit
        </button>
      </form>
      <div></div>
      <DisplayTable />
    </>
  );
};

export default MainDisplay;
