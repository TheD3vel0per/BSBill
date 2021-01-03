import React from "react";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBFooter,
}
    from "mdbreact";
import './Footer.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Footer: React.FC<{}> = () => {
    return (
        <>
            <footer
                className="footer navbar-fixed-bottom">
                <MDBFooter color="green" className="font-small pt-4 mt-4">
                    <div className="footer-copyright text-center py-3" style={{ color: 'white' }}>
                        <MDBContainer fluid>
                            &copy; {new Date().getFullYear()} Copyright: <a href="https://BSBills.online" style={{ color: 'white' }}> BSBills.online</a>
                | <Link to="/privacy" style={{ color: 'white' }}>Privacy Policy</Link>
                        </MDBContainer>
                    </div>
                </MDBFooter>
            </footer>
        </>
    );
};

export default Footer;