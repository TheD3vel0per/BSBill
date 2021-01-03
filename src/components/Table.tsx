import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Button from 'react-bootstrap/Button';
import { Subscription } from 'rxjs';
import BillService from "../services/BillService";
import Bill from '../model/Bill';
import { mergeAll, filter, take } from 'rxjs/operators';
import Modal from "../components/Modal";
import { Link } from 'react-router-dom';

class Table extends React.Component<{ query: string }, { bills: Array<Bill> }>{

    constructor(props: any) {
        super(props);
        this.state = {
            bills: []
        }
    }


    billsSub$: Subscription = new Subscription();

    async componentDidMount() {
        // @ts-ignore
        const billService: BillService = window['bsbills']['billService'] as BillService;
        billService.init();

        this.billsSub$ = billService.bills$.subscribe((data: any) => {
            this.setState({
                bills: data
            });
        })
    }

    componentWillUnmount() {
        this.billsSub$.unsubscribe();
    }


    render() {
        const billList = this.state.bills.filter((bill) => {
            return bill.billName.toLowerCase().includes(this.props.query.toLowerCase());
        }).map((bill, i) => {

            const link = "/document/" + bill._id;
            return (
                <>
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{bill.billName}</td>
                        <td><Button variant="primary" href={link}>View</Button></td>
                    </tr>


                </>
            )
        });

        return (
            <MDBTable>
                <MDBTableHead bordered color="success-color" textWhite>
                    <tr>
                        <th>#</th>
                        <th>Bill Name</th>
                        <th>View</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {billList}
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <Modal />
                    </div>
                </MDBTableBody>
            </MDBTable >
        );
    }

}

export default Table;


