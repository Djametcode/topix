/* eslint-disable react/jsx-key */
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
      isSearch: false,
      SearchResult: [],
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

      const updatedArcive = this.state.arciveNoteData.filter(
        (item) => item.id !== notesId
      );

      this.setState({
        notesData: updateNotes,
        arciveNoteData: updatedArcive,
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

    this.unArciveNote = (notesId) => {
      const notesIndex = this.state.arciveNoteData.findIndex(
        (item) => item.id === notesId
      );

      const notesUnarcived = this.state.arciveNoteData.filter(
        (item) => item !== this.state.arciveNoteData[notesIndex]
      );

      this.setState({
        arciveNoteData: notesUnarcived,
      });

      this.setState((prev) => ({
        notesData: [...prev.notesData, this.state.arciveNoteData[notesIndex]],
      }));
    };

    this.setIsSearch = (value) => {
      console.log(this.state.SearchResult);
      this.setState({
        isSearch: value,
      });
    };

    this.setSearchResult = (dataFromSearch) => {
      this.setState({
        SearchResult: dataFromSearch,
      });
    };
  }
  render() {
    return (
      <div>
        <HeaderComponent
          setSearchResult={this.setSearchResult}
          setIsSearch={this.setIsSearch}
          notes={this.state.notesData}
          arcive={this.state.arciveNoteData}
        />
        {this.state.isSearch ? null : (
          <NotesAdder
            updateNotes={this.addNotes}
            notesData={this.state.notesData}
          />
        )}
        <MainComponents
          isSearch={this.state.isSearch}
          SearchResult={this.state.SearchResult}
          arciveNoteHandler={this.arciveNotesHandler}
          unArchiveNoteHandler={this.unArciveNote}
          deleteNotes={this.deleteNotes}
          notesData={this.state.notesData}
          arcivedNote={this.state.arciveNoteData}
        />
      </div>
    );
  }
}

export default App;
