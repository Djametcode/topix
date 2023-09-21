import React from "react";
import HeaderComponent from "./components/header";
import "./index.css";
import MainComponents from "./components/main";
import NotesAdder from "./components/addNotes";
import { initialData, arcivedNote } from "./utils";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      notesData: initialData,
      arciveNoteData: arcivedNote,
    };

    this.addNotes = (notesData) => {
      this.setState((prev) => ({
        notesData: [...prev.notesData, notesData],
      }));
    };

    this.deleteNotes = (notesId) => {
      const updateNotes = this.state.notesData.filter(
        (item) => item.id !== notesId
      );

      this.setState({
        notesData: updateNotes,
      });
    };

    this.arciveNotesHandler = (notesId) => {
      const indexNotes = this.state.notesData.findIndex(
        (item) => item.id === notesId
      );

      const filterNotesData = this.state.notesData.filter(
        (item) => item !== this.state.notesData[indexNotes]
      );

      const selectedNotes = this.state.notesData
        .filter((item) => item === this.state.notesData[indexNotes])
        .map((items) => {
          return {
            id: items.id,
            title: items.title,
            body: items.body,
            createdAt: items.createdAt,
            arcived: !items.archived,
          };
        });

      this.setState({
        notesData: filterNotesData,
      });

      this.setState((prev) => {
        return {
          arciveNoteData: [...prev.arciveNoteData, selectedNotes[0]],
        };
      });
    };
  }
  render() {
    return (
      <div>
        <HeaderComponent
          notes={this.state.notesData}
          arcive={this.state.arciveNoteData}
        />
        <NotesAdder
          updateNotes={this.addNotes}
          notesData={this.state.notesData}
        />
        <MainComponents
          arciveNoteHandler={this.arciveNotesHandler}
          deleteNotes={this.deleteNotes}
          notesData={this.state.notesData}
          arcivedNote={this.state.arciveNoteData}
        />
      </div>
    );
  }
}

export default App;
