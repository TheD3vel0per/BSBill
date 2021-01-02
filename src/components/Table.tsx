import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Button from 'react-bootstrap/Button';
import { Subscription } from 'rxjs';
import BillService from "../services/BillService";
import Bill from '../model/Bill';

class Table extends React.Component<{}, {bills: Array<Bill> }>{
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


    render() {
        const billList = this.state.bills.map((bill, i) => {
            return (
                <tr>
                    <td>{i + 1}</td>
                    <td>{bill.billNumber}</td>
                    <td>{bill.billName}</td>
                    <td><Button variant="primary">View</Button></td>
                </tr>
            )
        });

        return (
            <MDBTable>
                <MDBTableHead bordered color="success-color" textWhite>
                    <tr>
                        <th>#</th>
                        <th>Bill Number</th>
                        <th>Bill Name</th>
                        <th>View</th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    {billList}
                </MDBTableBody>
            </MDBTable>
        );
    }
}

export default Table;