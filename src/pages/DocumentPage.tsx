import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Header from "../components/Header";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import './DocumentPage.css';
import Typing from 'react-typing-animation';
import DisplaySummaryCard from "../components/DisplaySummaryCard";
import DataList from "../components/DataList";
import { mergeAll, filter, take } from 'rxjs/operators';
import Bill from '../model/Bill';
import { Subscription } from 'rxjs';
import BSMeter from "../components/BSMeter";
import BillService from "../services/BillService";

class DocumentPage extends React.Component<{match: any}, { bill: Bill, selected: string }> {
    billsSub$: Subscription = new Subscription();
    id: string;

    constructor(props: any) {
        super(props);
        this.state = {
            bill: new Bill(),
            selected: "companies"
        }
        this.id = this.props.match.params.id;
        this.updateSelected = this.updateSelected.bind(this);
        
    }

    async componentDidMount() {
        // @ts-ignore
        const billService: BillService = window['bsbills']['billService'] as BillService;
        billService.init();

        this.billsSub$ = billService.bills$.subscribe((data: any) => {
            this.setState({
                bill: data
            });
        })

        const bill = await billService
            .bills$
            .pipe<Bill>(
                mergeAll(),
                filter((b: Bill) => b._id == this.id),
                take(1)
            )
            .toPromise();

        this.setState({
            bill: bill,
        });

    }

    componentWillUnmount() {
        this.billsSub$.unsubscribe();
    }


    updateSelected(option: string) {
        this.setState({
            selected: option
        });

    }

    render() {

        let info: any;

        if (typeof (this.state.bill.billUrl) != "undefined") {
            info = this.state.bill.billUrl;
        } else {
            info = (new Bill()).billUrl;
        }

        

        
        // Temporary link to navigate. Replace with dynamic bill url
        // const tempLink = "https://www.congress.gov/congressional-record/2019/2/7/house-section/article/h1398-5?q=%7B%22search%22%3A%5B%22immigration%22%5D%7D&s=1&r=1"

        const displaySummary = "For this bill we have extracted: "

        const title = typeof (this.state.bill.billName) != "undefined" ? this.state.bill.billName : "Title of Bill";

        return (
            <>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
                </head>

                <body>
                    <Header />

                    <div className="main">

                        {/* Bill Title. Links to the bill if user wants to explore it in detail.
                            Have to use anchor tag bc react Link only uses absolte paths*/}
                        <h2 className="display-4"><a href={info} target="_blank">{title}</a>
                        </h2>



                        {/* Page (text) content. */}
                        <p>{displaySummary}</p>

                        {/* Div to hold the data list and dashboard for bill*/}
                        <div className="container-fluid">

                            <div className="parent">

                                {/* List of info to select from */}
                                <DataList
                                    bill={this.state.bill}
                                    update={this.updateSelected}
                                />

                                <div className="dashboard">
                                    <DisplaySummaryCard
                                        bill={this.state.bill}
                                        selected={this.state.selected}
                                    />
                                </div>

                            </div>

                            <div>
                                <BSMeter bill={this.state.bill}/>
                            </div>

                        </div>
                    </div>
                </body>
            </>
        );
    }
};

export default DocumentPage;
