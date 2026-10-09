import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { getCallList, getTextList, getVideoCallList } from "../utilis/localDB";

export const BookContext = createContext();



const BookProvider = ({ children }) => {
    // Voice Call
    const [call, setCall] = useState(() => getCallList());

    const handleCall = (friend) => {
        toast(`Call ${friend.name}...`)
        // console.log("Friend id", friend)
        setCall([...call, friend]);
        // console.log(call);
    }
    // Text
    const [text, setText] = useState(() => getTextList());

    const handleText = (friend) => {
        toast(`Text ${friend.name}...`);
        setText([...text, friend]);
    }

    // Video Call
    const [video, setVideo] = useState(() => getVideoCallList());

    const handleVideo = (friend) => {
        toast(`Video Call ${friend.name}...`)
        setVideo([...video, friend]);
    }

    const data = {
        call,
        setCall,
        handleCall,
        text,
        setText,
        handleText,
        video,
        setVideo,
        handleVideo
    }
    return (
        <BookContext.Provider value={data}>
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;