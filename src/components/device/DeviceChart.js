import React from 'react';

import { Row, Col } from 'reactstrap';

import { FormattedMessage, injectIntl } from 'react-intl';

import Chart from "react-apexcharts";

import FalconCardHeader from '../common/FalconCardHeader';

const DeviceChart = ({ data = [], time = [], title, intl }) => {

    const maxValue = data.reduce((pv, cv) => {
        if (pv < cv)
            return cv;
        return pv;
    }, 0);

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
                            return `${val}`;
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
        labels: [intl.formatMessage({
            id: title,
            defaultMessage: 'Not Defined',
        })]
    }
    const seriesRadial = [76]
    const seriesMixedChart = [
        {
            name: intl.formatMessage({
                id: title,
                defaultMessage: 'Not Defined',
            }),
            type: "line",
            data
        }
    ];
    const optionsMixedChart = {
        chart: {
            id: "basic-bar",
            toolbar: {
                show: false
            },

            zoom: {
                enabled: false
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
            value: () => { },
            tickAmount: 5,
            min: 0,
            max: maxValue
        }
    }

    return (
        <Col>
            <Row>
                <FormattedMessage key={title} defaultMessage="Not Defined" id={title}>
                    {placeholder => <FalconCardHeader title={placeholder} />}
                </FormattedMessage>
            </Row>
            <Row>
                <Col>
                    <Chart
                        options={optionsMixedChart}
                        series={seriesMixedChart}
                        type="line"
                        width="100%" />
                </Col>
                <Col>
                    <Chart
                        options={optionsRadial}
                        series={data.slice(-1)}
                        type="radialBar"
                        width="100%"
                    />
            </Col>
            </Row>
        </Col>
    );
};

export default injectIntl(DeviceChart);
