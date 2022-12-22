import React, { createContext } from 'react';








export const UserAuth = createContext();



const UserContext = ({children}) => {



const name = { name: 'xxx'}




    const userInfo= {
        name
    }
    return (
        <UserAuth.Provider value={userInfo}>
            {children}
        </UserAuth.Provider>
    );
};

export default UserContext;