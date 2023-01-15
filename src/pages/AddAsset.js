import { Container, Box, Chip } from "@mui/material";
import { useEffect, useState } from "react";
import Report from "../components/Hardware/Report";
import AudioRecorder from "../components/Hardware/AudioRecorder";
import Image from "../components/Hardware/Image";
import Video from "../components/Hardware/Video";

//Location API calls
import axios from "axios";

// 2500 requests - api limit
const API_KEY = "b0e9628642474f2f83c3467f3b3218bc";

const AddAsset = () => {
  const [assetType, setAssetType] = useState("Voice input");

  const [lat, setLat] = useState("");
  const [long, setLong] = useState("");
  const [locationState, setLocationState] = useState([]);
  const [city, setCity] = useState("");

  const renderContent = () => {
    switch (assetType) {
      case "Voice input":
        return <Report location={city} />;
      case "Image":
        return <Image location={city} />;
      case "Video":
        return <Video location={city} />;
      case "Audio":
        return <AudioRecorder location={city} />;
    }
  };

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLat(position.coords.latitude);
        setLong(position.coords.longitude);
      },
      error,
      { enableHighAccuracy: true, maximumAge: 0 }
    );
  };

  useEffect(() => {
    console.log("I am inside permissions");

    navigator.permissions
      .query({
        name: "geolocation",
      })
      .then((result) => {
        setLocationState(result.state);
      });
      getLocation();
  }, []);

  useEffect(() => {
    axios
      .get(
        `https://api.opencagedata.com/geocode/v1/json?q=${lat}+${long}&key=${API_KEY}`
      )
      .then((response) => {
        setCity(response.data.results[0].components.city);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [lat, long]);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          padding: 0,
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
            width: "90%",
            height: 40,
            backgroundColor: "#cfe5fa",
            marginTop: "4px",
            marginBottom: 0,
            marginInline: 0,
            borderRadius: "8px",
          }}
        >
          <Chip
            id="chip-report"
            label="Voice input"
            variant="outlined"
            onClick={() => {
              setAssetType("Voice input");
            }}
            sx={{
              background: "white",
              color: "black",
            }}
          />
          <Chip
            label="Image"
            variant="outlined"
            onClick={() => setAssetType("Image")}
            sx={{
              background: "white",
              color: "black",
            }}
          />
          <Chip
            label="Video"
            variant="outlined"
            onClick={() => setAssetType("Video")}
            sx={{
              background: "white",
              color: "black",
            }}
          />
          <Chip
            label="Audio"
            variant="outlined"
            onClick={() => setAssetType("Audio")}
            sx={{
              background: "white",
              color: "black",
            }}
          />
        </Box>
      </Container>
      {renderContent()}
    </>
  );
};

export default AddAsset;
