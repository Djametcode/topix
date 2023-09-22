/* eslint-disable react/prop-types */
import React from "react";
import "../index.css";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: "",
    };

    this.handleInputChange = (event) => {
      const text = event.target.value;

      this.props.setIsSearch(true);

      this.setState({
        searchText: text,
      });

      if (this.state.searchText.trim() || this.state.searchText == "") {
        this.props.setSearchResult(this.props.notes);
      }

      const searchNotes = this.props.notes.filter((item) =>
        item.title
          .toLowerCase()
          .includes(this.state.searchText.trim().toLowerCase())
      );
      this.props.setSearchResult(searchNotes);
    };
    this.onClickInput = () => {
      this.props.setIsSearch(true);
      this.props.setSearchResult(this.props.notes);
    };
  }
  render() {
    return (
      <div className="header">
        <h1>Catatan Pribadi</h1>
        <div id="notes-search-container">
          <input
            onBlur={() => this.props.setIsSearch(false)}
            onClick={this.onClickInput}
            onChange={this.handleInputChange.bind(this)}
            className="input-search"
            type="text"
            placeholder="Cari catatan"
          />
        </div>
      </div>
    );
  }
}

export default HeaderComponent;
