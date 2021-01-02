import React from "react";
import Card from "react-bootstrap/Card";
import Bill from '../model/Bill';

class DisplaySummaryCard extends React.Component<{ bill: Bill, selected: string }> {

  render() {

    let bill;
    if (typeof (this.props.bill) != "undefined") {
      bill = this.props.bill;
    } else {
      bill = new Bill();
    }
    
    console.log("test")
    console.log(bill.info);
    // @ts-ignore
    //console.log(bill.info[this.props.selected == undefined ? "companies" : this.props.selected]);

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.props.selected} Found </Card.Title>
          <Card.Text>
            this.props.bill.info[selected]
            </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default DisplaySummaryCard;