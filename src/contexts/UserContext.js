import React, { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userSessionInfo, setUserSessionInfo] = useState({
        accountID: null,
        sessionID: null,
        sequence: 0,
        first_name: null,
        last_name: null,
        email: null,
        linkedinLink: null,
    });

    const updateUserSessionInfo = (newInfo) => {
        setUserSessionInfo(prevInfo => ({
            ...prevInfo,
            ...newInfo,
            sequence: prevInfo.sequence + 1
        }));
    };

    return (
        <UserContext.Provider value={{ userSessionInfo, updateUserSessionInfo }}>
            {children}
        </UserContext.Provider>
    );
};

export default UserContext;
