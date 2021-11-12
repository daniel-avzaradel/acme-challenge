import { useContext, useEffect } from "react";

import UserModal from "./UserModal/UserModal";
import Filters from "./Filters/Filters";

import { ListUsersContext } from "../context/listUsersContext";
import { User } from "./User/User";
import { CircularProgress } from "@mui/material";

import style from "./UserList.module.css";

function UserList() {
  const { usersData, getUsersData } = useContext(ListUsersContext);
  const { openModal } = useContext(ListUsersContext);
  const { loading, handleLoading } = useContext(ListUsersContext);
  const { searchTerm } = useContext(ListUsersContext);
  const { gender } = useContext(ListUsersContext);
  const { nationality } = useContext(ListUsersContext);

  useEffect(() => {
    const fetchData = async () => {
      handleLoading(true);
      fetch(`https://randomuser.me/api/?page=10&results=25&seed=abc`)
        .then((res) => res.json())
        .then((data) => {
          getUsersData(data.results);
          handleLoading(false);
        })
        .catch((err) => err);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1 className={style.userList__title}>Scientists</h1>
        <Filters />
        {loading ? (
          <div className={style.userList__loading}>
            <CircularProgress />
          </div>
        ) : (
          <table className={style.userList__table}>
            <thead>
              <tr>
                <th>Full Name</th>
                <th>Gender</th>
                <th>Date of Birth</th>
                <th>Nationality</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {usersData
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.name.first
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .filter((val) => {
                  if (gender === "male") {
                    return val.gender === gender;
                  } else if (gender === "female") {
                    return val.gender === gender;
                  } else {
                    return val;
                  }
                })
                .filter((val) => {
                  if (nationality === "all") {
                    return val;
                  } else {
                    return val.nat === nationality;
                  }
                })
                .map((item, id) => {
                  return <User key={id} {...item} />;
                })}
            </tbody>
          </table>
        )}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          margin: "20px auto",
        }}
      ></div>

      {/* MODAL */}
      {openModal ? <UserModal /> : ""}
    </>
  );
}

export default UserList;
