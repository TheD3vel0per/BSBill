import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import './HomePage.css';
import Table from "../components/Table";

// This page renders the home page along with all its components
class HomePage extends React.Component<{}, { query: string }> {

    constructor(props: any) {
        super(props);
        this.state = {
            query: "",
        }
        this.updateQuery = this.updateQuery.bind(this);
    }


    updateQuery(query: string) {
        this.setState({
            query: query,
        })
    }

    render() {
        return (
            <>
                <div className="app">
                    <Header />
                    <div>
                        <img src="./images/billbs.png" className="bsbill-logo center" />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                            <SearchBar
                                updateQuery={this.updateQuery}
                            />
                        </div>
                        <Table query={this.state.query} />
                    </div>

                </div>
            </>
        );
    }
};

export default HomePage;