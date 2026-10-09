import { useContext, useState } from "react";
import { BookContext } from "../../BookContext/BookContext";
import CallTimeline from "./CallTimeline/CallTimeline";
import TextTimeline from "./TextTimeline/TextTimeline";
import VideoTimeline from "./VideoTimeline/VideoTimeline";

const Timeline = () => {
    // Voice Call
    const { call, text, video } = useContext(BookContext);
    // console.log(call, text, video)
    const [filterCall, setFilterCall] = useState(call);
    const [filterText, setFilterText] = useState(text);
    const [filterVideo, setFilterVideo] = useState(video);

    
    const handleFilterCall=()=>{
        setFilterCall(call)
        setFilterText([]);
        setFilterVideo([]);
    }

    const handleFilterText=()=>{
        setFilterCall([]);
        setFilterText(text);
        setFilterVideo([]);
    }

    const handleFilterVideo=()=>{
        setFilterCall([]);
        setFilterText([]);
        setFilterVideo(video);
    }

    return (
        <div className="mt-15">
            <h1 className="text-3xl font-bold">Timeline</h1>

            <div className="dropdown dropdown-bottom my-3">
                <div tabIndex={0} role="button" className="btn m-1 border border-gray-300 rounded">Filter timeline ⬇️</div>
                <ul tabIndex={-1} className="dropdown-content menu  rounded-box z-1 w-52 p-2 shadow-sm bg-white">
                    <li onClick={()=> handleFilterCall()}><a>Call</a></li>
                    <li onClick={()=>handleFilterText()}><a>Text</a></li>
                    <li onClick={()=>handleFilterVideo()}><a>Video</a></li>
                </ul>
            </div>

            {/* Voice Call */}
            {
                filterCall.map(friend => <CallTimeline friend={friend} key={friend.id}></CallTimeline>)
            }

            {/* text */}
            {
                filterText.map(friend => <TextTimeline friend={friend} key={friend.id}></TextTimeline>)
            }

            {/* video */}
            {
                filterVideo.map(friend => <VideoTimeline friend={friend} key={friend.id}></VideoTimeline>)
            }

        </div>
    );
};

export default Timeline;