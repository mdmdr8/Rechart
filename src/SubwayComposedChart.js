import { useState, useEffect } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function SubwayComposedChart({ row }) {
    const [data, setData] = useState([])

    useEffect(() => {
        setData(row.map(item => ({
            역이름: item.SUB_STA_NM,
            승차인원수: item.RIDE_PASGR_NUM,
            하차인원수: item.ALIGHT_PASGR_NUM,
            유동인구수: item.RIDE_PASGR_NUM + item.ALIGHT_PASGR_NUM
        })))
    }, []);

    return (
        <ComposedChart width={1200} height={300} data={data}
            margin={{ top: 5, right: 50, left: 20, bottom: 5 }} style={{ margin: "0 auto" }}>

            <CartesianGrid stroke="#003458" />
            <XAxis dataKey={"역이름"} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={"유동인구수"} fill="#82ca9d" />
            <Line type="monotone" dataKey={"승차인원수"} stroke="#ff7300" />
            <Line type="monotone" dataKey={"하차인원수"} stroke="#8884d8" />

        </ComposedChart>
    )

}

export default SubwayComposedChart;