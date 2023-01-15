import React, { useState, useEffect } from "react";
import {
  TextField,
  Container,
  Box,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import ArticleIcon from "@mui/icons-material/Article";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import UploadIcon from "@mui/icons-material/Upload";
import SaveIcon from "@mui/icons-material/Save";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;
const mic = new SpeechRecognition();

mic.continuous = true;
mic.interimResults = true;
mic.lang = "en-US";

const Report = (props) => {
  const [isListening, setIsListening] = useState(false);
  const [text, setText] = useState(null);

  useEffect(() => {
    handleListen();
  }, [isListening]);

  const handleListen = () => {
    if (isListening) {
      mic.start();
      mic.onend = () => {
        console.log("continue...");
        mic.start();
      };
    } else {
      mic.stop();
      mic.onend = () => {
        console.log("stopped mic on click");
      };
    }

    mic.onstart = () => {
      console.log("mic is on");
    };

    mic.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      console.log(transcript);
      setText(transcript);

      mic.onerror = (event) => {
        console.log(event.error);
      };
    };
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
            border: "solid grey 1px",
            borderRadius: "8px",
            overflow: "hidden",
            overflowY: "scroll",
            boxShadow: "2px 2px rgba(139, 140, 140, 0.1)",
          }}
        >
          <IconButton
            color="primary"
            aria-label="upload picture"
            onClick={() => setIsListening((prevState) => !prevState)}
            sx={{
              float: "right",
              width: "60px",
              height: "60px",
            }}
          >
            {isListening ? (
              <MicIcon sx={{ width: "30px", height: "30px" }} />
            ) : (
              <MicOffIcon sx={{ width: "30px", height: "30px" }} />
            )}
          </IconButton>
          <p style={{ margin: "8px" }} contentEditable="true">
            {text}
          </p>
        </Box>
        <TextField
          id="outlined-title"
          label="Title"
          variant="outlined"
          sx={{
            width: "80%",
            borderRadius: "10px",
            marginBottom: "12px",
            boxShadow: "2px 2px rgba(139, 140, 140, 0.1)",
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <ArticleIcon color="primary" />
              </InputAdornment>
            ),
          }}
        />
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

export default Report;
