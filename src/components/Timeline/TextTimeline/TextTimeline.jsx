import { IoMdText } from "react-icons/io";

const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric"
});

const TextTimeline = ({friend}) => {
    return (
        <div>
            
            <div className="w-full border border-gray-200 bg-white shadow rounded gap-3 p-3 my-5 flex">
                <div className="my-auto">
                    <IoMdText className="text-4xl" />
                </div>
                <div className="">
                    <div className="flex gap-2"><h1 className="font-semibold text-[1.1rem]">Text</h1><p className="text-gray-500">with {friend.name}</p></div>
                    <p className="text-gray-500">{date}</p>
                </div>
            </div>
        </div>
    );
};

export default TextTimeline;