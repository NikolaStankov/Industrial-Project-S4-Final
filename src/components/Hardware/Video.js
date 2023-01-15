import React, { useRef, useState, useCallback, useEffect } from "react";
import Webcam from "react-webcam";
import { Container, Box, IconButton, Button, Hidden } from "@mui/material";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";
import PreviewIcon from "@mui/icons-material/Preview";
import SaveIcon from "@mui/icons-material/Save";

const Video = (props) => {
  const webcamRef = useRef(null);
  const mediaRecorderRef = useRef(null);
  const [capturing, setCapturing] = useState(false);
  const [recordedChunks, setRecordedChunks] = useState([]);

  var video = document.getElementById("display-video");

  // callback for handling the start of video capture
  const handleStartCaptureClick = useCallback(() => {
    setCapturing(true);
    mediaRecorderRef.current = new MediaRecorder(webcamRef.current.stream, {
      mimeType: "video/webm",
    });
    mediaRecorderRef.current.addEventListener(
      "dataavailable",
      handleDataAvailable
    );
    mediaRecorderRef.current.start();
  }, [webcamRef, setCapturing, mediaRecorderRef]);

  // callback for handling data provided by webcam
  const handleDataAvailable = useCallback(
    ({ data }) => {
      if (data.size > 0) {
        setRecordedChunks((prev) => prev.concat(data));
      }
    },
    [setRecordedChunks]
  );

  // handles stopping of web recording
  const handleStopCaptureClick = useCallback(() => {
    mediaRecorderRef.current.stop();
    setCapturing(false);
  }, [mediaRecorderRef, webcamRef, setCapturing]);

  // handling download of the video
  const handleDownload = useCallback(() => {
    // create blob and url for download and displaying on page
    if (recordedChunks.length) {
      const blob = new Blob(recordedChunks, {
        type: "video/webm",
      });
      const url = URL.createObjectURL(blob);

      // update display source for video element
      video.src = url;

      // removes reference to the object but also removes it from preview
      // window.URL.revokeObjectURL(url);
      setRecordedChunks([]);
    }
  }, [recordedChunks]);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: 0,
          marginTop: "20px",
        }}
      >
        <Webcam ref={webcamRef} width="100%" height={300} />
        {capturing ? (
          <Button
            variant="contained"
            startIcon={<VideocamOffIcon />}
            sx={{
              width: "220px",
              marginBlock: "16px",
            }}
            onClick={() => handleStopCaptureClick()}
          >
            Stop capturing
          </Button>
        ) : (
          <Button
            variant="contained"
            startIcon={<VideocamIcon />}
            sx={{
              width: "220px",
              marginBlock: "16px",
            }}
            onClick={() => handleStartCaptureClick()}
          >
            Start capturing
          </Button>
        )}
        <video id="display-video" width="80%" height="200" controls />
        {recordedChunks.length > 0 && (
          <Box
            sx={{
              width: "80%",
              backgroundColor: "white",
              marginBlock: "12px",
              marginInline: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Button
              variant="contained"
              startIcon={<PreviewIcon />}
              onClick={handleDownload}
            >
              Load Preview
            </Button>
            <Button variant="contained" startIcon={<SaveIcon />}>
              Save current
            </Button>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Video;
