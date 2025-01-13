import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import { Button } from '@/components/ui/button'

const timeSeries = [
    {
        keyword: "DIGITAL_CURRENCY_DAILY",
        key: "Time Series (Daily)",
        lable: "1 Day",
        value: 1,
    },
    {
        keyword: "DIGITAL_CURRENCY_WEEKLY",
        key: "Weekly Time Series",
        lable: "1 Week",
        value: 7,
    },
    {
        keyword: "DIGITAL_CURRENCY_MONTHLY",
        key: "Monthly Time Series",
        lable: "1 Month",
        value: 30,
    },

]

const StockChart = () => {
    const [activeLable, setActiveLable] = useState("1 Day")


    const series = [
        {
            data: [
                [1734206621479, 101318.673555881],
                [1734210223787, 100790.188917725],
                [1734213600887, 101064.556766236],
                [1734217707628, 101064.125818063],
                [1734220916694, 101393.199691988],
                [1734224495391, 101427.839450039],
                [1734228285674, 102138.995450392],
                [1734231772695, 101795.305090423],
                [1734235235723, 101731.010671734],
                [1734239021633, 102332.046069301],
                [1734242620321, 102106.369275995],
                [1734246227737, 101760.170584006],
                [1734249820467, 101737.626314148],
                [1734253359631, 101974.942577407],
                [1734256947200, 102238.999656395],
                [1734260491027, 102273.936976958],
                [1734264234629, 102670.0342486],
                [1734267825136, 102825.187908435],
                [1734271219271, 102856.055445345],
                [1734275031045, 102958.850421184],
                [1734278697551, 102687.431024365],
                [1734282224812, 103035.697247687],
                [1734285826379, 103119.404655081],
                [1734289229199, 103127.793096602],
                [1734293097702, 103273.692914512],
                [1734296593159, 103114.826628733],
                [1734300221565, 102832.69010005],
                [1734303824440, 103299.662936703],
                [1734307423798, 104721.50151809],
                [1734311041948, 105466.7795555],
                [1734314623107, 105494.265145899],
                [1734318231423, 104539.437119143],
                [1734321823678, 104556.321656684],
                [1734325426250, 104599.117539463],
                [1734329028831, 104980.618316876],
                [1734332618383, 105064.801275794],
                [1734336053577, 104987.116720055],
                [1734339838752, 104485.507226107],
                [1734343419732, 104785.883969179],
                [1734346982109, 104649.441446507],
                [1734350632690, 103668.769242355],
                [1734354237126, 103569.921562194],
                [1734357683754, 103873.160957763],
                [1734361432162, 105437.555110168],
                [1734364873678, 106351.019274295],
                [1734368635984, 106794.305169963],
                [1734372510933, 106918.825614381],
                [1734375712844, 106993.981361168],
                [1734379433322, 106657.001698474],
                [1734383034986, 105987.74083932],
                [1734386492367, 106138.439173292],
                [1734390223182, 105810.631292026],
                [1734393837860, 106090.348247644],
                [1734397316836, 105934.653926642],

            ]
        }
    ];


    const options = {
        chart: {
            id: "area-datetime",
            type: "area",
            height: 350,
            zoom: {
                autoScaleYaxis: true
            },
        },
        dataLabels: {
            enabled: false
        },
        xaxis: {
            type: "datetime", // Corrected here
            tickAmount: 6
        },
        colors: ["#758AA2"],
        markers: {
            colors: ["#fff"],
            strokeColor: "#fff",
            size: 0,
            strokeWidth: 1,
            style: "hollow"
        },
        tooltip: {
            theme: "dark"
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.7,
                opacityTo: 0.9,
                stops: [0, 100]
            }
        },
        grid: {
            borderColor: "#47535E",
            strokeDashArray: 4,
            show: true
        }
    };


    const handleActiveLable = (value) => {
        console.log(value)
        setActiveLable(value)
    }
    return (
        <div>
            <div className='space-x-3'>
                {timeSeries.map((el) => <Button
                    variant={activeLable == el.lable ? "" : "outline"}
                    onClick={() => handleActiveLable(el.lable)} key={el.lable}>
                    {el.lable}

                </Button>)}

            </div>
            <div id="chart-timelines">
                <ReactApexChart
                    options={options}
                    series={series}
                    height={450}
                    type='area'
                />
            </div>
        </div>
    )
}

export default StockChart