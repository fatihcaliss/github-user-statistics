import { FC } from "react"
import { IData } from "../Charts"

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import PieChart from "fusioncharts/fusioncharts.charts";
ReactFC.fcRoot(FusionCharts, PieChart);


interface IPieProps {
    data: IData[]
}

const Pie: FC<IPieProps> = ({ data }) => {

    const chartConfigs = {
        type: "bar3d",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Most Popular",
                yaxisname: "Stars",
                xaxisname: "Repos",
                showvalues: "1",
                captionFontColor: "#102a42",
                captionFontSize: 20,
                baseFontSize: 16,
                paletteColors:
                    "#2caeba, #5D62B5, #ecae10, #F2726F,  #35e91d, #6E80CA ,#8d6e63,",
                showHoverEffect: 1,
                bgColor:"#79aed1,#1e577e",
                bgratio: "60,40",
                bgAlpha: "70,80",
                bgAngle: "90"
            },
            data,
        },
    };

    return (
        <div className=' rounded-md py-4 shadow-lg w-[90%] max-w-[60rem] m-auto'>
            <ReactFC {...chartConfigs} />
        </div>
    )
}

export default Pie