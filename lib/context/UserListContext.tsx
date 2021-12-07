import React, { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

export const UserListContext = createContext<string | any>(undefined);

const UserListContextProvider = ({ children }: Props) => {
  const [keyword, setKeyword] = useState("");

  const handleKeyword = (word: string) => setKeyword(word);

  return (
    <UserListContext.Provider value={{ keyword, handleKeyword }}>
      {children}
    </UserListContext.Provider>
  );
};

export default UserListContextProvider;
