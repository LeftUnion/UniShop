// import React, { createContext, useContext, useState } from 'react';

// export const UuidContext = createContext();

// function getContext() {
//   let uuid = localStorage.getItem("uuid")
//   if (uuid == undefined) {
//     localStorage.setItem("uuid", "0")
//   } else {
//     localStorage.setItem("uuid", parseInt(uuid, 10) + 1)
//   }

//   return localStorage.getItem("uuid")
// }

// export function UuidProvider({ children }) {
//   const [uuid, setUuid] = useState(getContext);

//   return (
//     <UuidContext.Provider value={{ uuid, setUuid }}>
//       {children}
//     </UuidContext.Provider>
//   );
// }