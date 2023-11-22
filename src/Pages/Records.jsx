import "core-js/stable";
import "regenerator-runtime/runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function Records() {
  const getCookie = (name) => {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length === 2) return parts.pop().split(";").shift();
  };

  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "az" });

  const { transcript, browserSupportsSpeechRecognition, resetTranscript } =
    useSpeechRecognition();

  const handleSave = () => {
    fetch("/api/transcript/create/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": getCookie("csrftoken"),
      },
      body: JSON.stringify({ text: transcript }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Transcript saved successfully:", data);
        showToast("Transcript saved successfully!", "success");
      })
      .catch((error) => {
        console.error("Error saving transcript:", error);
        showToast("Error saving transcript: " + error.message, "error");
      });

    resetTranscript();
  };

  const showToast = (message, type) => {
    toast[type](message, {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000,
      hideProgressBar: false,
      closeButton: false,
      style: {
        height: "90px",
        fontSize: "20px",
      },
    });
  };

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      showToast(
        "Speech recognition is not supported in your browser.",
        "error"
      );
    }
  }, [browserSupportsSpeechRecognition]);

  return (
    <section className="section-records">
      <div className="container  center-text">
        <h2 className="heading-primary">Speech to Text Converter</h2>

        <p className="transcript-subheading">
          Converts speech from the microphone to text and saves it available to
          archive.
        </p>
      </div>
      <div className="container">
        <div className=" grid transcript-content">
          <p className="transcript">{transcript}</p>

          <div className="grid grid--3-cols">
            <button className="btn btn--form" onClick={startListening}>
              Start Recording
            </button>
            <button
              className="btn btn--form"
              onClick={SpeechRecognition.stopListening}
            >
              Stop Recording
            </button>
            <button className="btn btn--form" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Records;
