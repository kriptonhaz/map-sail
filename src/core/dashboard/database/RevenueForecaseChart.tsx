import { neutral, primary } from "@/themes/ts/colors"
import { Box } from "@mui/material"
import React from "react"
import Chart from "react-apexcharts"

const chartData: any = {
  series: [
    {
      name: "Forecast",
      data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
    },
    {
      name: "Revenue",
      data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
    },
  ],
  options: {
    chart: {
      type: "bar",
      height: 350,
    },
    colors: [neutral[300], primary[400]],
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct"],
    },
    yaxis: {
      labels: {
        formatter: (value: number) => {
          return `RP ${value}M`
        },
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val: any) {
          return "$ " + val + " thousands"
        },
      },
    },
  },
}
const RevenueForecaseChart: React.FC = () => {
  return (
    <Box>
      <Chart options={chartData.options} series={chartData.series} type="bar" />
    </Box>
  )
}

export default RevenueForecaseChart
