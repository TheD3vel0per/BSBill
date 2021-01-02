import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import './HomePage.css';
import Table from "../components/Table";
import Modal from "../components/Modal";
// This page renders the home page along with all its components
const HomePage: React.FC<{}> = () => {
    return (
        <>
            <div className="app">
                <Header />
                <div>
                    <img src="./images/billbs.png" className="center" />
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                        <SearchBar />
                        <Modal />
                    </div>
                    <Table />
                </div>

            </div>
        </>
    );
};

export default HomePage;