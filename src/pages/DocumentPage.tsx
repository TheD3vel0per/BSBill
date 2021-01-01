import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Header from "../components/Header";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import './DocumentPage.css';
import Typing from 'react-typing-animation';
import DisplaySummaryCard from "../components/DisplaySummaryCard";

const DocumentPage: React.FC<{}> = () => {

    // Temporary link to navigate. Replace with dynamic bill url
    const tempLink = "https://www.congress.gov/congressional-record/2019/2/7/house-section/article/h1398-5?q=%7B%22search%22%3A%5B%22immigration%22%5D%7D&s=1&r=1"

    const displaySummary = "For this bill we have extracted: "

    // TEST DATA, to be replaced with data from mongoDB
    const bill = {

        "billName": "Improving Medical Diagnosis Act",

        "billNumber": "HR5014",

        "billUrl": "",

        "extractedInfo": {
            "dates": ["2020-03-05", "2017-10-01"],
            "money": [100, 500, 30000000],
            "percentages": ["50%"],
            "ratios": []
        }
    }

    const dateLength = bill.extractedInfo["dates"].length
    const moneyLength = bill.extractedInfo["money"].length
    const percentagesLength = bill.extractedInfo["percentages"].length
    const ratioLength = bill.extractedInfo["ratios"].length

    return (
        <>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </head>

            <body>
                <Header />

                <div className="main">
                    <Typing>
                        {/* Bill Title. Links to the bill if user wants to explore it in detail.
                    Have to use anchor tag bc react Link only uses absolte paths*/}
                        <h2 className="display-4"><a href={tempLink} target="_blank"> Title of Bill</a>
                        </h2>

                    </Typing>

                    {/* Page (text) content. */}
                    <p>{displaySummary}</p>

                    {/* Div to hold the data list and dashboard for bill*/}
                    <div className="container-fluid">

                        <div className="parent">
                            <div className="list">

                                {/* List of data we analyze for the bill (dates, monetary amounts, companies, etc ) */}
                                <p>Bill Information</p>
                                <ul className="list-group">
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Dates
                                    <span className="badge bg-primary rounded-pill">{dateLength}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Monetary Amounts
                                    <span className="badge bg-primary rounded-pill">{moneyLength}</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center">
                                        Percentages
                                    <span className="badge bg-primary rounded-pill">{percentagesLength}</span>
                                    </li>
                                </ul>
                            </div>


                            <div className="dashboard">
                                <DisplaySummaryCard />
                            </div>

                        </div>

                        <div>
                            {/*     
                        <Form.Group controlId="formBasicRangeCustom">
                            <Form.Label>Input for BS Meter</Form.Label>
                            <Form.Control type="range" custom />
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center"
                                }}>
                                <Button> Rate BS </Button>

                            </div>

                        </Form.Group>
                        */ }

                            <div className="container-fluid-rating">

                                <Button> Not BS </Button>
                                <Button> BS </Button>

                            </div>


                            <ProgressBar animated variant="danger" now={45} />
                        </div>

                    </div>
                </div>
            </body>
        </>
    );
};

export default DocumentPage;