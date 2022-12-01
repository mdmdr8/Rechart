import { useState } from "react";
import { Button } from "reactstrap";
import axios from 'axios';

import SubwaySheet from "./SubwaySheet";
import SubwayAreaChart from "./SubwayAreaChart";
// import SubwayBarChart from "./SubwayBarChart";
// import SubwayLineChart from "./SubwayLineChart";
// import SubwayComposedChart from "./SubwayComposedChart";

function SubwayApi() {
    const [viewChart, setViewChart] = useState(false);
    const [row, setRow] = useState([]);
    const apiRequest = () => {
        axios.get("http://openapi.seoul.go.kr:8088/526d7048706f787931333346615a7865/json/CardSubwayStatsNew/1/10/20221015")
            .then(response => {
                console.log(response.data.CardSubwayStatsNew.row)
                setRow(response.data.CardSubwayStatsNew.row);
                setViewChart(true);
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <>
            <Button onClick={apiRequest}>데이터 가져오기</Button>

            {viewChart && (
                <>
                    <SubwaySheet row={row} /><br />
                    {/* <SubwayLineChart row={row} /> */}
                    <SubwayAreaChart row={row} />
                    {/* <SubwayBarChart row={row} />
                    <SubwayComposedChart row={row} /> */}

                </>
            )}
        </>
    );
}
export default SubwayApi;