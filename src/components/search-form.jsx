import React from 'react';

class SearchForm extends React.Component {
  constructor() {
    super();

    this.state = {
      searchText: '',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      searchText: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <input type="text" className="search-field" placeholder="Find a city..." onChange={this.handleInputChange} value={this.state.searchText} />
        <button onClick={() => this.props.handleSearchForm(this.state.searchText)}>Search</button>
        <br />
        <br />
      </div>
    );
  }
}

export default SearchForm;
