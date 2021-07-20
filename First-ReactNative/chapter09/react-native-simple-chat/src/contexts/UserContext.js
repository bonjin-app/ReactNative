import React, { useState } from 'react';

const UserContext = React.createContext({
    user: { email: null, uid: null },
    dispatch: () => { },
});

const UserPovider = ({ children }) => {
    const [user, setUser] = useState({});
    const dispatch = ({ email, uid }) => {
        setUser({ email, uid });
    };
    const value = { user, dispatch };
    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserPovider };