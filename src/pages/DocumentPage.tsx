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
import DataList from "../components/DataList";
import { mergeAll, filter, take } from 'rxjs/operators';
import Bill from '../model/Bill';

class DocumentPage extends React.Component {
    bill: Bill;

    constructor(props: any) {
        super(props);
        this.bill = new Bill();
    }

    async componentDidMount() {
        // @ts-ignore
        const billService: BillService = window['bsbills']['billService'] as BillService;
        billService.init();

        const id = "N.C 69";

        const bill = await billService
            .bills$
            .pipe<Bill>(
                mergeAll(),
                filter((b: Bill) => b.billNumber == id),
                take(1)
            )
            .toPromise();

        this.bill = bill;
    }

    render() {


        // Temporary link to navigate. Replace with dynamic bill url
        const tempLink = "https://www.congress.gov/congressional-record/2019/2/7/house-section/article/h1398-5?q=%7B%22search%22%3A%5B%22immigration%22%5D%7D&s=1&r=1"

        const displaySummary = "For this bill we have extracted: "

        // TEST DATA, to be replaced with data from mongoDB
        // const bill = {

        //     "billName": "Improving Medical Diagnosis Act",

        //     "billNumber": "HR5014",

        //     "billUrl": "",

        //     "info": {
        //         "companies": ["Company-Name LLC"],
        //         "courts": ["Supreme Court of New York"],
        //         "dates": ["2020-03-05", "2017-10-01"],
        //         "money": ["100", "500", "30000000"],
        //         "percentages": ["50%"],
        //         "ratios": ["one to three", "5:4"],
        //         "regulations": ['123 CFR 456']
        //     }
        // }

        const dateLength = this.bill.info["dates"].length
        const moneyLength = this.bill.info["money"].length
        const percentagesLength = this.bill.info["percentages"].length
        const ratioLength = this.bill.info["ratios"].length

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

                                {/* List of info to select from */}
                                <DataList 
                                    bill={this.bill}
                                />

                                <div className="dashboard">
                                    <DisplaySummaryCard />
                                </div>

                            </div>

                            <div>


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
    }
};

export default DocumentPage;
