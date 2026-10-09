import { createContext, useState } from "react";

export const BookContext = createContext();



const BookProvider = ({ children }) => {
    const [call, setCall] = useState([]);
    const handleCall = (friend) => {
        // console.log("Friend id", friend)
        setCall([...call, friend]);
        console.log(call);
    }

    const data = {
        call,
        setCall,
        handleCall
    }
    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;