import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';

class BSMeter extends React.Component<{billVotes: any}, {}> {

    render() {

        let percent;
        if (typeof(this.props.billVotes) != "undefined") {
            const notBs = this.props.billVotes.notBs
            const bs = this.props.billVotes.bs;

            percent = (notBs + bs) != 0 ? bs / (notBs + bs) * 100 : 0;
        } else {
            
        }
        

        return (
            <ProgressBar animated variant="danger"/>
        )
    }
}

export default BSMeter;