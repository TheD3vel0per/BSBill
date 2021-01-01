import React from "react";
import {MDBBtn, MDBCol, MDBIcon } from "mdbreact";
import Button from 'react-bootstrap/Button';
import "./SearchBar.css";
const SearchBar = () => {
  return (
    <MDBCol md="6">
      <form className="form-inline mt-4 mb-4">
        <MDBIcon icon="search" />
        <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" />
        <Button  className="btn btn-success" size="sm"
            onClick={() => {
            }}>
            Search
        </Button>
      </form>
    </MDBCol>
  );
}

export default SearchBar;