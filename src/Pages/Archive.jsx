import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faPenToSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

function Archive() {
  const [transcripts, setTranscripts] = useState([]);
  const [selectedTranscript, setSelectedTranscript] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState("");

  useEffect(() => {
    fetch("/api/transcripts/")
      .then((response) => response.json())
      .then((data) => {
        setTranscripts(data);
      })
      .catch((error) => {
        console.error("Error fetching transcripts:", error);
      });
  }, []);

  const handleTranscriptClick = (transcript) => {
    setSelectedTranscript(transcript);
    setEditedText(transcript.text);
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveEdit = () => {
    fetch(`/api/transcripts/${selectedTranscript.id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: editedText }),
    })
      .then((response) => {
        if (response.ok) {
          const updatedTranscripts = transcripts.map((transcript) => {
            if (transcript.id === selectedTranscript.id) {
              return { ...transcript, text: editedText };
            }
            return transcript;
          });
          setTranscripts(updatedTranscripts);
          setIsEditing(false);
        } else {
          console.error("Error updating transcript");
        }
      })
      .catch((error) => {
        console.error("Error updating transcript:", error);
      });
  };

  const handleDelete = () => {
    fetch(`/api/transcripts/${selectedTranscript.id}/`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          setTranscripts((prevTranscripts) =>
            prevTranscripts.filter((t) => t.id !== selectedTranscript.id)
          );
          setSelectedTranscript(null);
        } else {
          console.error("Error deleting transcript");
        }
      })
      .catch((error) => {
        console.error("Error deleting transcript:", error);
      });
  };

  return (
    <section className="section-archive">
      <div className="container">
        <h1 className="heading-primary">Transcript Archive</h1>
        <ul className="list transcript-content">
          {transcripts.map((transcript) => (
            <li className="list-item transcript-frame" key={transcript.id}>
              <div
                className="transcript-header"
                onClick={() => handleTranscriptClick(transcript)}
              >
                <h3 className="subheading">
                  <FontAwesomeIcon
                    className="transcript-icon"
                    icon={faEllipsisVertical}
                  />

                  <span className="margin-right-sm"> Recording</span>
                  {transcript.id}
                </h3>

                {selectedTranscript === transcript && (
                  <div className="transcript-actions">
                    <FontAwesomeIcon
                      onClick={handleEditClick}
                      className="transcript-icon"
                      icon={faPenToSquare}
                    />

                    <FontAwesomeIcon
                      onClick={handleDelete}
                      className="transcript-icon"
                      icon={faTrashCan}
                    />
                  </div>
                )}
              </div>
              {selectedTranscript === transcript && (
                <div className="transcript-display">
                  {isEditing ? (
                    <div className="grid">
                      <textarea
                        className="transcript-text"
                        cols="30"
                        rows="8"
                        value={editedText}
                        onChange={(e) => {
                          const newText = e.target.value;
                          setEditedText(newText);
                        }}
                      />

                      <button
                        className=" btn btn--form column-one"
                        onClick={handleSaveEdit}
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <p>{selectedTranscript.text}</p>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Archive;
