import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { Subscription } from 'rxjs';
import BillService from "../services/BillService";



const DataList: React.FC<{}> = () => {

    const [bills, setBills] = React.useState();

    let billsSub$: Subscription = new Subscription();

    React.useEffect(() => {
        // @ts-ignore
        const billService: BillService = window['bsbills']['billService'] as BillService;

        billsSub$ = billService.bills$.subscribe((data: React.SetStateAction<undefined>) => {
            setBills(data);
            console.log(data);
        })
    });

    const bill_foo = {

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



    const dateLength = bill_foo.extractedInfo["dates"].length
    const moneyLength = bill_foo.extractedInfo["money"].length
    const percentagesLength = bill_foo.extractedInfo["percentages"].length
    const ratioLength = bill_foo.extractedInfo["ratios"].length

    return (

        <>
            <ul className="list-group">
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Dates <span className="badge bg-primary rounded-pill">{dateLength}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Monetary Amounts<span className="badge bg-primary rounded-pill">{moneyLength}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center">
                    Percentages<span className="badge bg-primary rounded-pill">{percentagesLength}</span>
                </li>
            </ul>
        </>

    );

};

export default DataList;