import { createContext, useState, useContext } from "react";

import {
  ListUsersContextProps,
  ListUsersProviderProps,
  UsersDataProps,
} from "../services/types";

export const ListUsersContext = createContext({} as ListUsersContextProps);

export function ListUsersProvider({ children }: ListUsersProviderProps) {
  const [usersData, setUsersData] = useState<UsersDataProps[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [userModal, setUserModal] = useState<UsersDataProps[]>([]);
  const [gender, setGender] = useState<string>("none");
  const [nationality, setNationality] = useState<string>("all");

  function getUsersData(params: UsersDataProps[]) {
    setUsersData(params);
  }

  function handleModal(param: boolean) {
    setOpenModal(param);
  }

  function handleLoading(param: boolean) {
    setLoading(param);
  }

  return (
    <ListUsersContext.Provider
      value={{
        usersData,
        getUsersData,
        openModal,
        handleModal,
        loading,
        handleLoading,
        selectedOption,
        setSelectedOption,
        searchTerm,
        setSearchTerm,
        userModal,
        setUserModal,
        gender,
        setGender,
        nationality,
        setNationality,
      }}
    >
      {children}
    </ListUsersContext.Provider>
  );
}

export const useListUsersContext = () => {
  return useContext(ListUsersContext);
};
