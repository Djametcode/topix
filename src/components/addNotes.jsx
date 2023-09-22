/* eslint-disable react/prop-types */
import React from "react";

class NotesAdder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      body: "",
      titleLimit: 30,
      createdAt: new Date().toISOString(),
      arcived: false,
    };

    this.handleTitlechange = (event) => {
      const title = event.target.value;
      console.log(this.newNotes);

      this.setState((prev) => {
        const updateTitleLimit = prev.titleLimit - 1;

        if (updateTitleLimit >= 0) {
          return {
            title: title,
            titleLimit: updateTitleLimit,
          };
        } else {
          return;
        }
      });
    };

    this.handleBodyChange = (event) => {
      const body = event.target.value;

      this.setState({
        body: body,
      });
    };

    this.addNotesHandler = () => {
      const newNote = {
        id: this.props.notesData.length + 1 + Date.now(),
        title: this.state.title,
        body: this.state.body,
        createdAt: this.state.createdAt,
        arcived: this.state.arcived,
      };

      if (!newNote.title.trim() || !newNote.body.trim()) {
        alert("Tidak Boleh Kosong Slur :3");
        return;
      }
      console.log(newNote);

      this.props.updateNotes(newNote);

      this.setState({
        title: "",
        body: "",
      });
    };
  }
  render() {
    return (
      <div className="note-adder">
        <div id="note-adder-title">
          <h1>Tambah Catatan</h1>
        </div>
        <div id="input-form">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: "14px",
            }}
          >
            <label>Judul Catatan : </label>
            <label> {this.state.titleLimit} char left </label>
          </div>
          <input
            value={this.state.title}
            onChange={this.handleTitlechange.bind(this)}
            className="input-forms"
            id="title"
            type="text"
            placeholder="Notes Title"
          />
          <textarea
            value={this.state.body}
            className="input-forms"
            id="body"
            placeholder="catatan .."
            onChange={this.handleBodyChange.bind(this)}
          />
          <button
            onClick={this.addNotesHandler}
            className="input-forms"
            id="button-submit"
          >
            Buat catatan
          </button>
        </div>
      </div>
    );
  }
}

export default NotesAdder;
