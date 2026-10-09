import { useContext, useState } from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { MdOutlineTextsms } from "react-icons/md";
import { TbPhoneCall } from "react-icons/tb";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../../BookContext/BookContext";

const BookDetails = () => {

    const { id } = useParams();
    // console.log(id);

    const friends = useLoaderData();
    // console.log(friends)

    const expectFriend = friends.find(friend => friend.id === Number(id));
    // console.log(expectFriend);

    const { name, picture, status, tags, bio, email } = expectFriend;

    const { handleCall, handleText, handleVideo } = useContext(BookContext);





    return (
        <div className="grid md:grid-cols-3 gap-5 my-15">
            <div className="col-span-1">f
                <div className="bg-white mt-5 text-center flex shadow items-center justify-center rounded p-5">
                    <div className="">
                        <img className="w-[80px] rounded-full mx-auto" src={picture} alt="" />
                        <p className="text-xl font-bold ">{name}</p>
                        <p>62d ago</p>
                        <div className="flex justify-center">
                            <p className={`text-white rounded-2xl mt-1 mx-auto px-2 ${status === "overdue" ? "bg-red-500" : status === "due_soon" ? "bg-green-900" : "bg-amber-700"}`}>{status}</p>
                        </div>
                        <div className="flex gap-2 mx-auto justify-center">
                            {
                                tags.map((tag, index) => <p className="mt-1 bg-green-200 rounded-2xl px-2" tag={tag} key={index}>{tag}</p>)
                            }
                        </div>
                        <p className="font-semibold text-gray-500">"{bio}"</p>
                        <p className="text-gray-500">Preferred: {email}</p>
                    </div>
                </div>
                <div className="shadow my-3 text-center font-semibold h-12 flex justify-center items-center bg-white rounded">Snooze 2 weeks</div>
                <div className="shadow my-3 text-center font-semibold h-12 flex justify-center items-center bg-white rounded">Archive</div>
                <div className="shadow my-3 text-center font-semibold h-12 flex justify-center items-center bg-white rounded text-red-600">Delete</div>
            </div>

            <div className="grid grid-rows-3 gap-3 w-full col-span-2 mt-10">
                <div className="grid grid-cols-3 gap-5">
                    <div className="flex justify-center text-center bg-white rounded items-center shadow">
                        <div className="">
                            <h1 className="text-3xl font-semibold">62</h1>
                            <p className="text-xl text-gray-500">Days Since Contact</p>
                        </div>
                    </div>
                    <div className="flex justify-center text-center items-center shadow bg-white rounded">
                        <div className="">
                            <h1 className="text-3xl font-semibold">30</h1>
                            <p className="text-xl text-gray-500">Goal (Days)</p>
                        </div>
                    </div>
                    <div className="flex justify-center text-center items-center shadow bg-white rounded">
                        <div className="">
                            <h1 className="text-3xl font-semibold">Feb 27, 2026</h1>
                            <p className="text-xl text-gray-500">Next Due</p>
                        </div>
                    </div>
                </div>

                <div className="shadow p-5 flex justify-between bg-white rounded">
                    <div className="text-xl font-semibold flex flex-col gap-8 mt-5">
                        <h1>Relationship Goal</h1>
                        <h1><span className="text-gray-500">Connect every</span> 30 days</h1>
                    </div>
                    <div className="btn bg-gray-100 rounded border border-gray-200">Edit</div>
                </div>

                <div className="shadow p-3 rounded bg-white">
                    <h3 className="text-xl font-semibold mb-3">Quick Check-In</h3>

                    <div className="grid grid-cols-3 gap-3">
                        <div onClick={() => handleCall(expectFriend)} className="cursor-pointer shadow p-5 flex justify-center items-center rounded bg-gray-50 text-2xl font-semibold border border-gray-100">
                            <div className="text-center">
                                <TbPhoneCall className="mx-auto" />
                                <h1>Call</h1>
                            </div>
                        </div>
                        <div onClick={() => handleText(expectFriend)} className="shadow p-5 flex justify-center items-center text-2xl cursor-pointer font-semibold bg-gray-50 border border-gray-100">
                            <div className="">
                                <MdOutlineTextsms className="mx-auto" />
                                <h1>Text</h1>
                            </div>
                        </div>
                        <div onClick={()=> handleVideo(expectFriend)} className="shadow p-5 flex justify-center items-center text-2xl cursor-pointer font-semibold bg-gray-50 border border-gray-100">
                            <div className="">
                                <IoVideocamOutline className="mx-auto" />
                                <h1>Video</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;