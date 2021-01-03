import React from "react";
import { MDBBtn, MDBCol, MDBIcon } from "mdbreact";
import Button from 'react-bootstrap/Button';
import "./SearchBar.css";
import BillService from '../services/BillService';

class SearchBar extends React.Component<{updateQuery: any}, {query: string}>{

  constructor(props: any) {
    super(props);
    this.state = {
      query: ""
    }

    this.searchBarChanged = this.searchBarChanged.bind(this);
    this.clickSearch = this.clickSearch.bind(this);
  }

  searchBarChanged(event: any) {

    const value: string = event.target.value;

    this.setState({
      query: value
    });

    this.props.updateQuery(value)
  }

  clickSearch() {
    this.props.updateQuery(this.state.query);
  }

  render() {
    return (
      <MDBCol md="6">
        <form className="form-inline active-cyan-3 active-cyan-4">
          <MDBIcon icon="search" />
          <input 
          className="form-control form-control-sm mr-3 w-75"
          name="search"
            placeholder="Enter project name"
            aria-label="search"
            onChange={this.searchBarChanged}
            value={this.state.query}
            id="search" />

          <Button className="btn btn-success" size="sm"
            onClick={this.clickSearch}>
            Search
        </Button>
        </form>
      </MDBCol>
    );
  }
}

export default SearchBar;