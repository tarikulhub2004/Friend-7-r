import { useEffect, useState } from "react";
import Friend from "../Friend/Friend";

const Friends = () => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const res = await fetch("/users.json");
            const users = await res.json();
            console.log(users)

            setFriends(users)
        }

        getUsers()
    }, [])

    return (
        <div className="mt-15">
            <div className="grid grid-cols-4 gap-4">
                <div className="flex h-30 shadow text-center items-center justify-center rounded">
                    <div className="">
                        <p className="font-bold text-2xl">{friends.length}</p>
                        <h4 className="text-gray-500">Total Friends</h4>
                    </div>
                </div>
                <div className="flex h-30 shadow text-center items-center justify-center rounded">
                    <div className="">
                        <p className="font-bold text-2xl">3</p>
                        <h4 className="text-gray-500">On Track</h4>
                    </div>
                </div>
                <div className="flex h-30 shadow text-center items-center justify-center rounded">
                    <div className="">
                        <p className="font-bold text-2xl">10</p>
                        <h4 className="text-gray-500">Need Attention</h4>
                    </div>
                </div>
                <div className="flex h-30 shadow text-center items-center justify-center rounded">
                    <div className="">
                        <p className="font-bold text-2xl" >12</p>
                        <h4 className="text-gray-500">Interactions This Month</h4>
                    </div>
                </div>
            </div>
            <div className="mt-5">
                <h3 className="font-bold text-2xl">Your Friends</h3>
                <div className="grid grid-cols-4 gap-4">
                    {
                        friends.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Friends;