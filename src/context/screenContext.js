import React, { useState, createContext } from "react";

export const ScreenContext1 = createContext();


const ScreenProvider = ({ children }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')


  return (
    <ScreenContext1.Provider value={{
      firstName, setFirstName
      , lastName, setLastName, phoneNumber, setPhoneNumber
    }}>
      {children}
    </ScreenContext1.Provider>
  )
}





export default ScreenProvider;
