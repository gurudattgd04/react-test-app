import { Component } from "react";

class SearchBox extends Component {
  render() {
    return (
      <input
        className={this.props.className}
        placeholder={this.props.placeholder}
        type="search"
        onChange={this.props.OnChangeHandler}
      />
    );
  }
}

export default SearchBox;
