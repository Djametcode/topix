/* eslint-disable react/prop-types */
import { showFormattedDate } from "../utils";

export default function ArcivedNotesComponent(props) {
  const { id, title, createdAt, body } = props;
  const formattedTime = showFormattedDate(createdAt);
  console.log(props.unArchiveNoteHandler);
  return (
    <div id="arcive-detail">
      <h1>{title}</h1>
      <p>{formattedTime}</p>
      <p>{body}</p>
      <div id="arcive-footer">
        <button onClick={() => props.deleteNotes(id)} id="delete-arcive">
          Hapus
        </button>
        <button
          onClick={() => props.unArchiveNoteHandler(id)}
          id="cancle-arcive"
        >
          Batal Arsipkan
        </button>
      </div>
    </div>
  );
}
