import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import Button from 'react-bootstrap/Button';

const Table = () => {
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
                <tr>
                    <td>1</td>
                    <td>HR5014</td>
                    <td>Improving Medical Diagnosis Act</td>
                    <td><Button variant="primary">View</Button></td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>S.3567</td>
                    <td>Helping healthcare workers afford child care</td>
                    <td><Button variant="primary">View</Button></td>
                </tr>
            </MDBTableBody>
        </MDBTable>
    );
}

export default Table;