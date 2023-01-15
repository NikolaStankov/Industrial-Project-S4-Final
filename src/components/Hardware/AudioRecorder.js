import React, { useState } from "react";
import vmsg from "vmsg";
import {
  Container,
  Box,
  IconButton,
  TextField,
  InputAdornment,
  Button,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import UploadIcon from "@mui/icons-material/Upload";
import SaveIcon from "@mui/icons-material/Save";

const recorder = new vmsg.Recorder({
  wasmURL: "https://unpkg.com/vmsg@0.3.0/vmsg.wasm",
});

const AudioRecorder = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recording, setRecording] = useState(null);

  const handleRecord = async () => {
    setIsLoading(true);

    if (isRecording) {
      const blob = await recorder.stopRecording();
      setIsLoading(false);
      setIsRecording(false);
      setRecording(URL.createObjectURL(blob));
      console.log("Recording: ", recording);
    } else {
      try {
        await recorder.initAudio();
        await recorder.initWorker();
        recorder.startRecording();

        setIsLoading(false);
        setIsRecording(true);
      } catch (e) {
        console.log("ERROR OCCURED: ", e);
        setIsLoading(false);
      }
    }
  };

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
        <Box
          sx={{
            width: "80%",
            height: 300,
            backgroundColor: "white",
            marginBlock: "12px",
            marginInline: 0,
            borderRadius: "8px",
            border: "solid grey 1px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-evenly",
            boxShadow: "2px 2px rgba(139, 140, 140, 0.1)",
          }}
        >
          <IconButton
            color="primary"
            aria-label="upload picture"
            onClick={handleRecord}
            disabled={isLoading}
            sx={{
              width: "120px",
              height: "120px",
            }}
          >
            {isRecording ? (
              <MicIcon sx={{ width: "70px", height: "70px" }} />
            ) : (
              <MicOffIcon sx={{ width: "70px", height: "70px" }} />
            )}
          </IconButton>
          {recording && <audio src={recording} controls></audio>}
        </Box>
        <TextField
          id="outlined-location"
          label="Location"
          variant="outlined"
          value={props.location}
          sx={{
            width: "80%",
            borderRadius: "10px",
            boxShadow: "2px 2px rgba(139, 140, 140, 0.1)",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AddLocationAltIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />
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
          <Button variant="contained" startIcon={<UploadIcon />}>
            Upload
          </Button>
          <Button variant="contained" startIcon={<SaveIcon />}>
            Save current
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default AudioRecorder;
