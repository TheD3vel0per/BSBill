import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Bill from '../model/Bill';


class DataList extends React.Component<{ bill: Bill, update: any}, {}> {

    updateDashboard(option: string) {
        this.props.update(option);
    }

    render() {

        let info: any;

        if (typeof (this.props.bill.info) != "undefined") {
            info = this.props.bill.info;
        } else {
            info = (new Bill()).info;
        }

        return (
            <>
                <div className="list">


                    <p style={{ 
                        fontSize: '150%' 
                    }}>Bill Information</p>

                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Button size ="sm" variant="success" onClick={() => this.updateDashboard("companies")}> Companies </Button>
                            <span className="badge bg-primary rounded-pill">{info.companies.length}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Button size ="sm" variant="success" onClick={() => this.updateDashboard("courts")}> Courts </Button>
                            <span className="badge bg-primary rounded-pill">{info.courts.length}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Button size ="sm" variant="success" onClick={() => this.updateDashboard("cusip")}>CUSIP </Button>
                            <span className="badge bg-primary rounded-pill">{info.cusip.length}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Button size ="sm" variant="success" onClick={() => this.updateDashboard("dates")}>Dates</Button>
                            <span className="badge bg-primary rounded-pill">{info.dates.length}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Button size ="sm" variant="success" onClick={() => this.updateDashboard("money")}>Monetary Amounts</Button>
                            <span className="badge bg-primary rounded-pill">{info.money.length}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Button size ="sm" variant="success" onClick={() => this.updateDashboard("percentages")}> Percentages </Button>
                            <span className="badge bg-primary rounded-pill">{info.percentages.length}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            <Button size ="sm" variant="success" onClick={() => this.updateDashboard("ratios")}> Ratios </Button>
                            <span className="badge bg-primary rounded-pill">{info.ratios.length}</span>
                        </li>
                    </ul>
                </div>

            </>

        );
    }
}

export default DataList;