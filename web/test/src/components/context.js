import React, { createContext, useContext, useState } from 'react';

export const IdContext = createContext();

export function IdProvider({ children }) {
  const [id, setId] = useState(0);

  return (
    <IdContext.Provider value={{ id, setId }}>
      {children}
    </IdContext.Provider>
  );
}