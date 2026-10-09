import { useContext } from "react";
import { BookContext } from "../../BookContext/BookContext";
import CallTimeline from "./CallTimeline/CallTimeline";
import TextTimeline from "./TextTimeline/TextTimeline";
import VideoTimeline from "./VideoTimeline/VideoTimeline";

const Timeline = () => {
// Voice Call
    const { call, text, video } = useContext(BookContext);
    console.log(call, text, video)

    // Text

    // Video

    return (
        <div className="mt-15">
            <h1 className="text-3xl font-bold">Timeline</h1>

            {/* Voice Call */}
            {
                call.map(friend => <CallTimeline friend={friend} key={friend.id}></CallTimeline>)
            }

            {/* text */}
            {
                text.map(friend => <TextTimeline friend={friend} key={friend.id}></TextTimeline>)
            }
            
            {/* video */}
            {
                video.map(friend => <VideoTimeline friend={friend} key={friend.id}></VideoTimeline>)
            }

        </div>
    );
};

export default Timeline;