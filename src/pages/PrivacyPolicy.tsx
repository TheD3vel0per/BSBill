import React from 'react';
import Header from '../components/Header';
import { Container } from 'react-bootstrap';

class PrivacyPolicy extends React.Component {
    render() {
        return (
            <>
                <Header></Header>
                <Container>
                    <h1>BSBills Privacy Policy</h1>
                    <p>Last Updated: January 2nd 2021</p>
                    <p>The BSBills Privacy Policy is designed to help you understand the information we collect and the different ways we may use or share it.</p>
                    <p>This policy applies to your use of BSBills. By BSBills,” we mean the BSBills website, browser extension, mobile app, and any other of our products and services that directly link to this policy. To learn more about privacy at BSBills, please keep reading below.</p>
                    <h3>What Information We Collect</h3>
                    <p>Information we collect often depends on the exact nature of our relationship with you and how you choose to use BSBills, which is either as a guest or registered user with an account. We have broken these descriptions down into categories to make them more clear:</p>
                    <h3>We collect bill information.</h3>
                    <p>We collect information relating to submitted bill link. For example, we collect your bill name, and information relating to the bill. </p>
                    <h3>How We Collect Information</h3>
                    <p>Like many other companies, there are different ways that we collect information, which we’ve outlined below:</p>
                    <p>We collect information directly from you. You might provide us information in several ways. For example, we collect information when you submit a link.</p>
                    <p>When We Share Information on BSBills.</p>
                    <h3>Sharing with vendors.</h3>
                    <p>We currently do not give any user information out. No account related information is stored.</p>
                    <p>We will share information if we think we have to in order to comply with the law or to protect ourselves. For example, we will share information to respond to a court order or subpoena or if a U.S. or non-U.S. law enforcement agency, government agency, or investigatory body requests it. We may also share information we collect when we investigate potential fraud, abuse, or other similar violations of BSBills rules and codes of conduct.</p>
                    <p>We may share information with any successor to all or part of our business. If all or part of our business is sold, we’re part of a merger or acquisition, or there is a financing or bankruptcy, we may share information as part of that transaction.</p>
                    <p>We may also share information for other reasons we may describe to you or as permitted under law.</p>
                    <p>Sale of information. We only use the personal information we collect to help provide, support, and improve BSBills as described in this policy, and we do not “sell” this information to third parties as that term is defined by applicable laws.</p>
                    <h3>Licenses</h3>
                    <p>The context of this site is held through a hackathon project on a free domain. A free SSL certificate is provided by Google Cloud. Please use discretion if/when using BSBills.</p>
                    <h3>Children’s Privacy</h3>
                    <p>BSBills is intended to be appropriate for general audiences and is not directed to children under the age of 13. We do not intentionally collect personal information from children under 13, and if we learn that we have unintentionally collected any such information, we will promptly take steps to delete it and terminate the child. If you are under the age of 13, please do not use BSBills or share your personal information with us.</p>
                    <h3>How We Protect Information</h3>
                    <p>We maintain appropriate administrative, technical, and physical safeguards to protect your personal information from accidental, unlawful, or unauthorized destruction, loss, alteration, access, disclosure, or use and other unlawful forms of processing. You should keep your user credentials and password confidential and secure so that your information is protected.</p>
                    <p>We work hard to protect your data, but the Internet is not 100% secure. We encourage you to use caution online. This includes not sharing or reusing your passwords.</p>
                    <h3>Transfers of Information</h3>
                    <p>BSBills is based in Vancouver BC, which means the information we collect may be processed and stored within the province of British Columbia. Our service is hosted on the Google Cloud platforms US multiregion, therefore your data will be stored and processed in the United States of America. We keep personal information as long as it is necessary or relevant for the practices described in this policy and as otherwise required by law.</p>
                    <h3>Third-Party Sites</h3>
                    <p>We may link to third-party sites or apps. BSBills may also include third-party content that collects information. We do not control these third parties. This policy does not apply to the privacy practices of these third-party websites or apps. Please read the privacy policies of other websites carefully. We are not responsible for the practices of these third-party sites or apps.</p>
                    <p>© BSBills {(new Date()).getFullYear()} • All Rights Reserved</p>
                </Container>
            </>
        )
    }
}

export default PrivacyPolicy;