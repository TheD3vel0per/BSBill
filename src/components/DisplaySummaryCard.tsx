import React from "react";
import Card from "react-bootstrap/Card";
import Bill from '../model/Bill';

class DisplaySummaryCard extends React.Component<{ bill: Bill, selected: string }> {

  render() {

    let info: any;

    if (typeof (this.props.bill.info) != "undefined") {
      info = this.props.bill.info;
    } else {
      info = (new Bill()).info;
    }

    console.log(info[this.props.selected]);

    const infoList = info[this.props.selected].map((e: string) => {
      return (
        <ul>
          <li>{e}</li>
        </ul>
      )
    })

    return (
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{this.props.selected} </Card.Title>
          <Card.Text>
            {infoList}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default DisplaySummaryCard;