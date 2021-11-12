import React, { useContext } from "react";
import { UsersDataProps } from "../../services/types";
import { ListUsersContext } from "../../context/listUsersContext";
import formattedDate from "../../services/formattedDate";

import style from "./User.module.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";

export const User = (props: UsersDataProps) => {
  const { openModal, handleModal } = useContext(ListUsersContext);
  const { setUserModal } = useContext(ListUsersContext);

  return (
    <tr className={style.user__tableRow}>
      <td>
        {props.name.first} {props.name.last}
      </td>
      <td>{props.gender}</td>
      <td>{formattedDate(props.dob.date)}</td>
      <td>{props.nat}</td>
      <td className={style.user__actions}>
        <div
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            handleModal(!openModal);
            setUserModal([props]);
          }}
        >
          <AccountCircleIcon style={{ margin: "0 10px" }} />
        </div>
        <div>
          <DeleteIcon style={{ margin: "0 10px" }} />
        </div>
      </td>
    </tr>
  );
};
