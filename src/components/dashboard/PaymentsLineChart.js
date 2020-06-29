/* import React, { useState, useContext } from 'react';
import { Row, Col, Card, CardBody, CustomInput } from 'reactstrap';
import { Line } from 'react-chartjs-2';
import { hours, paymentByStatus } from '../../data/dashboard/payments';
import { rgbaColor, themeColors } from '../../helpers/utils';
import AppContext from '../../context/Context';
import Chart from "react-apexcharts"
const data = [
  {
    date: "00\/00\/2048",
    time: "01:00:01",
    wind: {
      speed: {
        avg: "00.0",
        min: "00.0",
        max: "00.0"

      },
      direction: {
        avg: "010",
        sdv: "000"

      }

    },
    temperature: {
      avg: "30.9",
      min: "032.8",
      max: "032.9"

    },
    humidity: {
      avg: "50",
      min: "01:00:001",
      max: "01:00:002"

    },
    baro: "01:00:003",
    pre: {
      lh: "01:00:004",
      l24: "01:00:005"
    }
  },
  {
    date: "00\/00\/2048",
    time: "01:01:00",
    wind: {
      speed: {
        avg: "00.0",
        min: "00.0",
        max: "00.0"

      },
      direction: {
        avg: "010",
        sdv: "000"

      }

    },
    temperature: {
      avg: "032.9",
      min: "032.8",
      max: "032.9"

    },
    humidity: {
      avg: "60",
      min: "01:00:001",
      max: "01:00:002"

    },
    baro: "01:00:003",
    pre: {
      lh: "01:00:004",
      l24: "01:00:005"
    }
  }
]

const PaymentsLineChart = () => {

  const { temperature, humidity, time } = data.reduce((pv, cv) => {
    pv.humidity.push(cv.humidity.avg);
    pv.temperature.push(cv.temperature.avg);
    pv.time.push(cv.time.substr(0, 5));
    return pv;

  }, { temperature: [], humidity: [], time: [] });

  const optionsRadial = {
    plotOptions: {
      radialBar: {
        startAngle: -135,
        endAngle: 225,
        hollow: {
          margin: 0,
          size: "70%",
          background: "#fff",
          image: undefined,
          imageOffsetX: 0,
          imageOffsetY: 0,
          position: "front",
          dropShadow: {
            enabled: true,
            top: 3,
            left: 0,
            blur: 4,
            opacity: 0.24
          }
        },
        track: {
          background: "#000",
          strokeWidth: "67%",
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
            opacity: 0.35
          }
        },

        dataLabels: {
          showOn: "always",
          name: {
            offsetY: -20,
            show: true,
            color: "#000",
            fontSize: "13px"
          },
          value: {
            formatter: function (val) {
              return `${val}%`;
            },
            color: "#000",
            fontSize: "30px",
            show: true
          }
        }
      }
    },
    fill: {
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: ["#ABE5A1"],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    stroke: {
      lineCap: "round"
    },
    labels: ["Percent"]
  }
  const seriesRadial = [76]
  const seriesMixedChart =(data)=> [
    {
      name: "series-1",
      type: "line",
      data
    }
  ];
  const optionsMixedChart = {
    chart: {
      id: "basic-bar",
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: "50%",
        endingShape: "arrow"
      }
    },
    stroke: {
      width: [4, 3, 2]
    },
    xaxis: {
      categories: time
    },
    markers: {
      size: 6,
      strokeWidth: 3,
      fillOpacity: 0,
      strokeOpacity: 0,
      hover: {
        size: 8
      }
    },
    yaxis: {
      tickAmount: 5,
      min: 0,
      max: 100
    }
  }
  return (
    <Card className="mb-3">
      <CardBody className="rounded-soft ">
        <Row className="text-white align-items-center no-gutters">
          <Col>

            <Chart
              options={optionsMixedChart}
              series={seriesMixedChart(temperature)}
              type="line"
              width="500"
            />

            <Chart
              options={optionsRadial}
              series={temperature.slice(-1)}
              type="radialBar"
              width="280"
            />
          </Col>

          <Col className="d-none d-sm-block">

            <Chart
              options={optionsMixedChart}
              series={seriesMixedChart(humidity)}
              type="line"
              width="500"
            />

            <Chart
              options={optionsRadial}
              series={humidity.slice(-1)}
              type="radialBar"
              width="280"
            />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PaymentsLineChart;
 */