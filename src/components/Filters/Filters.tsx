import React, { useContext } from "react";
import { ListUsersContext } from "../../context/listUsersContext";

import style from "./Filters.module.css";

function Filters() {
  const { searchTerm, setSearchTerm } = useContext(ListUsersContext);
  const { setGender } = useContext(ListUsersContext);
  const { setNationality } = useContext(ListUsersContext);

  const selectNatChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setNationality(value);
  };

  const selectGenderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setGender(value);
  };

  let natArr = [
    "AU",
    "BR",
    "CA",
    "CH",
    "DE",
    "DK",
    "ES",
    "FI",
    "FR",
    "GB",
    "IE",
    "IR",
    "NO",
    "NL",
    "NZ",
    "TR",
    "US",
  ];

  return (
    <div className={style.filters__filter}>
      <div className={style.filter__searchBar}>
        <input
          onChange={(event) => setSearchTerm(event.target.value)}
          value={searchTerm}
          type="text"
          placeholder="Search by name..."
        />
      </div>
      <label>Choose a nationality:</label>

      <select name="nat" id="natFilter" onChange={selectNatChange}>
        <option value="all">All</option>
        {natArr.map((nat, i) => {
          return (
            <option key={i} value={nat}>
              {nat}
            </option>
          );
        })}
      </select>

      <label>Gender:</label>

      <select name="nat" id="genderFilter" onChange={selectGenderChange}>
        <option value="none">Not specified</option>
        <option value="male">Male</option>;
        <option value="female">Female</option>;
      </select>
    </div>
  );
}

export default Filters;
