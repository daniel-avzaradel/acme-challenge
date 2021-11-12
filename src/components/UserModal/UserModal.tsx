import React, { useContext } from "react";
import { ListUsersContext } from "../../context/listUsersContext";
import formattedDate from "../../services/formattedDate";

import style from "./UserModal.module.css";

function UserModal() {
  const { handleModal } = useContext(ListUsersContext);
  const { userModal } = useContext(ListUsersContext);

  return (
    <div className={style.modal__modal} id="modal">
      <div className={style.modal__overlay}></div>
      <div className={style.modal__content}>
        <img
          src={userModal[0].picture.large}
          className={style.modal__picture}
          alt=""
          id="picture"
        />
        <h2 id="fullname">
          {userModal[0].name.title}. {userModal[0].name.first}{" "}
          {userModal[0].name.last}
        </h2>

        <p>Email: {userModal[0].email}</p>
        <p>Gender: {userModal[0].gender}</p>
        <p>Date of Birth: {formattedDate(userModal[0].dob.date)}</p>
        <p>Nationality: {userModal[0].nat}</p>
        <br />
        <button
          className={style.modal__closeBtn}
          onClick={(event: React.MouseEvent<HTMLElement>) => {
            handleModal(false);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default UserModal;
