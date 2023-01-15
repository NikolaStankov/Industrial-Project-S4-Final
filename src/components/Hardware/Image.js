import React, { useEffect, useRef, useState } from "react";
import Webcam from "react-webcam";
import { Container, Box, IconButton, Button } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import AddAPhotoIcon from "@mui/icons-material/AddAPhoto";
import UploadIcon from "@mui/icons-material/Upload";
import SaveIcon from "@mui/icons-material/Save";

const Image = () => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);
  const [isImageTaken, setIsImageTaken] = useState(false);

  const takeImage = () => {
    let image = webcamRef.current.getScreenshot();
    setImage(image);
    setIsImageTaken(true);
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
        {isImageTaken ? (
          <>
            {" "}
            <h3>You took the following photo:</h3>
            <img src={image} height={300} width={400} />
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
                startIcon={<AddAPhotoIcon />}
                onClick={() => setIsImageTaken(false)}
              >
                Take another
              </Button>
              <Button variant="contained" startIcon={<SaveIcon />}>
                Save current
              </Button>
            </Box>
          </>
        ) : (
          <>
            {" "}
            <Webcam ref={webcamRef} height={300} />
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
              <Button
                variant="contained"
                startIcon={<AddAPhotoIcon />}
                onClick={() => takeImage()}
              >
                Take photo
              </Button>
            </Box>
          </>
        )}
      </Container>
    </>
  );
};

export default Image;
