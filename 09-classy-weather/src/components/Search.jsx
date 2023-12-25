import React from "react";

class Search extends React.Component {
  render() {
    return (
      <input
        type="text"
        value={this.props.location}
        onChange={(e) => {
          this.props.onChangeLocation(e);
        }}
        placeholder="Search from location..."
      />
    );
  }
}

export default Search;
