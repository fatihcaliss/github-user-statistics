import { FC } from "react"
import { IData } from "../Charts"

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import PieChart from "fusioncharts/fusioncharts.charts";
ReactFC.fcRoot(FusionCharts, PieChart);


interface IPieProps {
    data: IData[]
}

const Doughnut: FC<IPieProps> = ({ data }) => {

    const chartConfigs = {
        type: "doughnut3d",
        width: "100%",
        height: "400",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Stars Per Language",
                captionFontColor: "#102a42",
                captionFontSize: 20,
                baseFontSize: 16,
                baseFontColor: "#3289da",
                smartLineColor: "#3289da",
                paletteColors:
                    "#2caeba, #5D62B5, #ecae10, #F2726F,  #35e91d, #6E80CA ,#8d6e63,",
                use3DLighting: 1,
                useDataPlotColorForLabels: 1,
                decimals: 0,
                pieRadius: "50%",
                animation: 1,
                pieYScale: 70,
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
        <div className=' rounded-md  mb-6 w-[90%] md:w-5/12 '>
            <ReactFC {...chartConfigs} />
        </div>
    )
}

export default Doughnut