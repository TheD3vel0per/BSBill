import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const DataList: React.FC<{}> = () => {

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