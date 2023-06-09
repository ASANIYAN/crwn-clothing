import { createContext, useEffect, useState } from "react";
import { createuserDocumentFromAuth, onAuthStateChangedListener } from "../utils/firebase/firebase.utils";

// as the actual value we want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
    const [ currentUser, setCurrentUser ] = useState(null);
    const value = { currentUser, setCurrentUser };

    useEffect(() => {
        const unsubscribe = onAuthStateChangedListener((user) => {
            if (user) {
                createuserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        }) 

        return unsubscribe;
    }, [])


    return <UserContext.Provider value={value}> { children } </UserContext.Provider>
}