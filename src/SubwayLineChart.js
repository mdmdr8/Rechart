import {LineChart,Line,XAxis,YAxis,CartesianGrid,Tooltip,Legend, ResponsiveContainer} 
    from 'recharts';

function SubwayLineChart({row}) {
    return(
        <LineChart width={1200} height={300} data={row}
            margin={{top:5, right:30, left:20, bottom:5}}
            style={{margin:"0 auto"}}>
            <CartesianGrid strokeDasharray="3 3"/>
            <XAxis dataKey={"SUB_STA_NM"} /><YAxis/>
            <Tooltip/>
            <Legend/>
            <Line type="monotone" dataKey={"RIDE_PASGR_NUM"} stroke="#8884d8" activeDot={{r:8}}/>
            <Line type="monotone" dataKey={"ALIGHT_PASGR_NUM"} stroke="#82ca9d"/>
        </LineChart>
    )
}

export default SubwayLineChart;