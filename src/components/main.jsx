/* eslint-disable react/prop-types */
import ArcivedNotesComponent from "./arcivedNotes";
import NotesDetail from "./notesDetail";

export default function MainComponents(props) {
  console.log(props.arcivedNote);
  return (
    <div className="main-container">
      <div id="title-main">
        <h1>Catatan aktif : </h1>
      </div>
      <div id="notes-detail-wrapper">
        {props.notesData.length === 0 ? (
          <div id="no-notes">
            <h1>Tidak ada catatan </h1>
          </div>
        ) : (
          props.notesData.map((item) => (
            <NotesDetail
              arciveNoteHandler={props.arciveNoteHandler}
              deleteNotes={props.deleteNotes}
              {...item}
              key={item.id}
            />
          ))
        )}
      </div>
      <div id="arcived-note-container">
        <div id="arsip-note">
          <h1>Arsip : </h1>
        </div>
        <div id="arcived-note">
          {props.arcivedNote.length === 0 ? (
            <div id="no-notes">
              <h1>Tidak ada Arsip </h1>
            </div>
          ) : (
            props.arcivedNote.map((item) => (
              <ArcivedNotesComponent {...item} key={item.id} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
