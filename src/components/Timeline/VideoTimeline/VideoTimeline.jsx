import { FaVideo } from "react-icons/fa";


const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
});

const VideoTimeline = ({friend}) => {
    return (
        <div>
            <div className="w-full border border-gray-200 bg-white shadow rounded gap-3 p-3 my-5 flex">
                <div className="my-auto">
                    <FaVideo className="text-4xl" />
                </div>
                <div className="">
                    <div className="flex gap-2"><h1 className="font-semibold text-[1.1rem]">Video Call</h1><p className="text-gray-500">with {friend.name}</p></div>
                    <p className="text-gray-500">{date}</p>
                </div>
            </div>
        </div>
    );
};

export default VideoTimeline;