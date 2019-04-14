/*

import React, { Component } from "react";
import { Line, Radar } from "react-chartjs-2";
import {
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Col,
    Row,
    Table
  } from "reactstrap";
//import { CustomTooltips } from "@coreui/coreui-plugin-chartjs-custom-tooltips";

const line = {
  labels: [
    "August",
    "September",
    "October",
    "November",
    "December",
    "January",
    "February",
    "March",
    "April",
    "May"
  ],
  datasets: [
    {
      label: "Average Grade Performance",
      fill: true,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [81, 79, 90, 89, 92, 75, 98, 88, 94, 87]
    }
  ]
};

const radar = {
  labels: [
    "Science",
    "Mathematics",
    "Arts",
    "English",
    "Engineering",
    "Social Studies",
    "Foreign Language"
  ],
  datasets: [
    {
      label: "First Semester",
      backgroundColor: "rgba(179,181,198,0.2)",
      borderColor: "rgba(179,181,198,1)",
      pointBackgroundColor: "rgba(179,181,198,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      data: [85, 80, 0, 86, 92, 90, 0]
    },
    {
      label: "Second Semester",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointHoverBackgroundColor: "#fff",
      pointHoverBorderColor: "rgba(255,99,132,1)",
      data: [79, 75, 0, 84, 92, 90, 0]
    }
  ]
};

const options = {
  tooltips: {
    enabled: false,
    custom: CustomTooltips
  },
  maintainAspectRatio: false
};

class Analysis extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <h1 className="white">Grade Performance</h1>
                <div className="card-header-actions" />
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Line className="blue" data={line} options={options} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <Card>
              <CardHeader>
                <h1 className="white">Grade Distribution</h1>
                <div className="card-header-actions" />
              </CardHeader>
              <CardBody>
                <div className="chart-wrapper">
                  <Radar className="blue" data={radar} />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Analysis
*/
