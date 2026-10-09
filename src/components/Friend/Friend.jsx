
const Friend = ({ friend }) => {
    const { name, picture, status, tags } = friend;

    return (
        <div>
            <div className="mt-5 text-center flex shadow items-center justify-center rounded p-5">
                <div className="">
                    <img className="w-[80px] rounded-full mx-auto" src={picture} alt="" />
                    <p className="text-xl font-bold">{name}</p>
                    <p>62d ago</p>
                    <div className="flex gap-2 mx-auto justify-center">
                        {
                            tags.map((tag, index) => <p className="mt-1 bg-green-200 rounded-2xl px-2" tag={tag} key={index}>{tag}</p>)
                        }
                    </div>
                    <div className="flex justify-center"><p className="bg-red-400 text-white rounded-2xl mt-1 mx-auto px-2">{status}</p></div>
                </div>
            </div>
        </div>
    );
};

export default Friend;