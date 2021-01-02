import React from "react";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Bill from '../model/Bill';


class DataList extends React.Component<{bill: Bill},{}> {

    render() { 
        return (
              <>
                <div className="list">

                    {/* List of data we analyze for the bill (dates, monetary amounts, companies, etc ) */}
                    <p>Bill Information</p>

                    <ul className="list-group">
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Companies <span className="badge bg-primary rounded-pill">{this.props.info.companies.length}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Courts <span className="badge bg-primary rounded-pill">{this.props.info.courts.length}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            CUSIP <span className="badge bg-primary rounded-pill">{this.props.info.cusip.length}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Dates
                            <span className="badge bg-primary rounded-pill">{this.props.info.dates.length}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Monetary Amounts
                            <span className="badge bg-primary rounded-pill">{this.props.info.monetary.length}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Percentages
                            <span className="badge bg-primary rounded-pill">{this.props.info.percentageslength}</span>
                        </li>
                        <li className="list-group-item d-flex justify-content-between align-items-center">
                            Ratios <span className="badge bg-primary rounded-pill">{this.props.info.ratios.length}</span>
                        </li>
                    </ul>
                </div>

            </>

        );
    }
}

export default DataList;