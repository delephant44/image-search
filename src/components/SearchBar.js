import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      term: event.target.value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleFormSubmit} className="ui form">
          <label>Image Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={this.handleChange}
          ></input>
        </form>
      </div>
    );
  }
}

export default SearchBar;
