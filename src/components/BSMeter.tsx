import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import firebase from 'firebase/app';
import Bill from '../model/Bill';
import Button from 'react-bootstrap/Button';

class BSMeter extends React.Component<{ bill: Bill }, {}> {
    constructor(props: any) {
        super(props)

        this.incrementBs = this.incrementBs.bind(this);
        this.incrementNotBs = this.incrementNotBs.bind(this);
    }


    async incrementBs() {
        const db = firebase.firestore();
        const increment = firebase.firestore.FieldValue.increment(1);
        const billRef = db.collection("Bills").doc(this.props.bill._id);

        await billRef.update({
            'billVotes.bs': increment
        })
 
        window.location.reload();
    }

    async incrementNotBs() {
        const db = firebase.firestore();
        const increment = firebase.firestore.FieldValue.increment(1);
        const billRef = db.collection("Bills").doc(this.props.bill._id);

        await billRef.update({
            'billVotes.notbs': increment
        })
 
        window.location.reload();
    }


    render() {
        const billVotes = this.props.bill.billVotes;

        let percent;
        if (typeof (billVotes) != "undefined") {
            const bs: number = Number(billVotes.bs);
            const notbs: number = Number(billVotes.notbs);
            percent = (notbs + bs) != 0 ? bs / (notbs + bs) * 100 : 0;
        } else {
            percent = 0;
        }

        return (
            <>
                <div className="container-fluid-rating">

                    <Button variant="success" size="lg" onClick={this.incrementNotBs}> Not BS </Button>
                    <Button variant="danger" size="lg" onClick={this.incrementBs}> BS </Button>

                </div>
                <ProgressBar>
                    <ProgressBar animated variant="danger" now={percent} />
                    <ProgressBar animated variant="success" now={100 - percent} />
                </ProgressBar>
            </>
        )
    }
}

export default BSMeter;