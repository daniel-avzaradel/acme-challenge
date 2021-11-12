import { ReactNode } from "react";

export type UsersDataProps = {
  name: {
    first: string;
    last: string;
    title: string;
  };
  location: {
    street: string;
    city: string;
    country: string;
  };
  email: string;
  gender: string;
  login: {
    username: string;
  };
  dob: {
    date: string;
    age: string;
  };
  phone: string;
  cell: string;
  nat: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

export type ListUsersContextProps = {
  usersData: UsersDataProps[];
  getUsersData: (params: UsersDataProps[]) => void;
  openModal: boolean;
  handleModal: (param: boolean) => void;
  loading: boolean;
  handleLoading: (param: boolean) => void;
  selectedOption: string;
  setSelectedOption: (param: string) => void;
  searchTerm: string;
  setSearchTerm: (param: string) => void;
  userModal: UsersDataProps[];
  setUserModal: (params: UsersDataProps[]) => void;
  gender: string;
  setGender: (param: string) => void;
  nationality: string;
  setNationality: (param: string) => void;
};

export type ListUsersProviderProps = {
  children: ReactNode;
};
