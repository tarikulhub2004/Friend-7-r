import { useContext } from "react";
import { BookContext } from "../../BookContext/BookContext";
import { IoCall, IoVideocam } from "react-icons/io5";

const Timeline = () => {

    const { call } = useContext(BookContext);
    console.log(call)

    const date = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric"
    });
    // console.log(date);

    return (
        <div className="mt-15">
            <h1 className="text-3xl font-bold">Timeline</h1>

            {
                call.map(friend => <div friend={friend} key={friend.id} className="w-full border border-gray-200 bg-white shadow rounded gap-3 p-3 my-5 flex">
                    <div className="my-auto">
                        <IoCall className="text-4xl" />
                    </div>
                    <div className="">
                        <div className="flex gap-2"><h1 className="font-semibold text-[1.1rem]">video</h1><p className="text-gray-500">with {friend.name}</p></div>
                        <p className="text-gray-500">{date}</p>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Timeline;