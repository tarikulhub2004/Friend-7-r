import { useContext } from "react";
import { BookContext } from "../../BookContext/BookContext";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

const Stats = () => {

    const { call, text, video } = useContext(BookContext)

    const data = [
        { name: "call", value: call.length },
        { name: "text", value: text.length },
        { name: "video", value: video.length }
    ]

    const empty = call.length === 0 && text.length === 0 && video.length === 0;

    const COLORS = ["#0088FE", "#00C49F", "green"];

    return (
        <div>
            <h1 className="text-5xl font-semibold mt-10">Friendship Analytics</h1>
            <div className="bg-white border border-gray-200 shadow mt-5">
                <h4 className="text-left font-semibold text-gray-500 pt-5 pl-5">By Interaction Type</h4>

                {
                    empty ? (<h1 className="text-gray-500 font-semibold text-center pb-5">No interactions logged yet</h1>) : (<div className="w-full justify-center items-center rounded gap-3 p-3 my-5 flex text-gray-600">
                        <div className="">
                            <div className="md:w-[300px]">
                                <PieChart style={{ width: '100%', maxWidth: '500px', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                                    <Pie
                                        data={data}
                                        innerRadius="80%"
                                        outerRadius="100%"
                                        cornerRadius="50%"
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {
                                            data.map((item, index) => (
                                                <Cell key={item.name} fill={COLORS[index]}></Cell>
                                            ))
                                        }
                                    </Pie>
                                    <Tooltip></Tooltip>
                                </PieChart>
                            </div>


                            <div className="flex gap-3 text-center justify-center items-center">
                                <div className="flex justify-center items-center gap-1">
                                    <div className="w-2 h-2 bg-[#0088FE] rounded-full"></div><p className="text-[12px]">Call</p>
                                </div>
                                <div className="flex justify-center items-center gap-1">
                                    <div className="w-2 h-2 bg-[#00C49F] rounded-full"></div><p className="text-[12px]">Text</p>
                                </div>
                                <div className="flex justify-center items-center gap-1">
                                    <div className="w-2 h-2 bg-green-700 rounded-full"></div><p className="text-[12px]">Video</p>
                                </div>
                            </div>
                        </div>

                    </div>)
                }



            </div>
        </div>
    );
};

export default Stats;