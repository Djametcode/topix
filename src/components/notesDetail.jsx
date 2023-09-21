/* eslint-disable react/prop-types */
import { showFormattedDate } from "../utils";

export default function NotesDetail(props) {
  const { id, title, createdAt, body } = props;
  const formattedTime = showFormattedDate(createdAt);
  return (
    <div className="notes-detail">
      <h1>{title}</h1>
      <p>{formattedTime}</p>
      <p>{body}</p>
      <div className="notes-footer">
        <button onClick={() => props.deleteNotes(id)} id="delete">
          Hapus
        </button>
        <button onClick={() => props.arciveNoteHandler(id)} id="arcive">
          Arsipkan
        </button>
      </div>
    </div>
  );
}
