/* eslint-disable react/prop-types */
import React from "react";
import "../index.css";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: this.props.notes,
      searchText: "",
    };

    this.handleInputChange = (event) => {
      const text = event.target.value;
      this.setState({
        searchText: text,
        isSearch: true,
      });

      const searchNotes = this.state.notes.filter(
        (item) =>
          item.title
            .toLowerCase()
            .includes(this.state.searchText.toLowerCase()) ||
          item.body.toLowerCase().includes(this.state.searchText.toLowerCase())
      );

      console.log(searchNotes);
    };
  }
  render() {
    return (
      <div className="header">
        <h1>Catatan Pribadi</h1>
        <div id="notes-search-container">
          <input
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
