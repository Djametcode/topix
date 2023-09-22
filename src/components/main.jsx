/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import ArcivedNotesComponent from "./arcivedNotes";
import NotesDetail from "./notesDetail";

export default function MainComponents(props) {
  console.log(props.SearchResult);
  return (
    <div className="main-container">
      {props.isSearch ? (
        <div id="search-result">
          {props.SearchResult.length === 0 ? (
            <div id="not-found-notes">
              <div>
                <h1>Catatan Tidak Ditemukan</h1>
                <p>Jika diarsipkan silahkan batal arsipkan terlebih dahulu</p>
              </div>
            </div>
          ) : (
            props.SearchResult.map((item) => (
              <NotesDetail {...item} key={item.id} />
            ))
          )}
        </div>
      ) : (
        <>
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
                  <ArcivedNotesComponent
                    deleteNotes={props.deleteNotes}
                    unArchiveNoteHandler={props.unArchiveNoteHandler}
                    {...item}
                    key={item.id}
                  />
                ))
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
