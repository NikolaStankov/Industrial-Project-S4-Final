import React, { useState, useEffect } from "react";
import AssetsGrid from "../components/Assets/AssetsGrid";
import AddAssetsDesktop from "../components/Assets/AddAssetsDesktop";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { useMediaQuery } from '@mui/material';
import PlusButton from '../components/PlusButton';
import { Typography } from '@mui/material';

function TopicsSport() {
  const [assets, setAssets] = useState([]);

  const getAssets = () => {
    fetch("../data/assets.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
        setAssets(myJson);
      });
  };

  useEffect(() => {
    getAssets();
  }, []);

  return (
    <div
      style={{ paddingLeft: "4%", paddingRight: "3%", paddingTop: "2%", height: `calc(100vh - 105px)` }}
    >
      <Box
        sx={{
          height: useMediaQuery('(min-width:1200px)') ? '60%' : '100%',
          overflow: "hidden",
          overflowY: "scroll",
        }}
      >
        <Typography variant="h4" align="left" pb={0}>
          Assets
        </Typography>
        <Typography variant="h6" align="left" pb={2} color="#969696">
          Browse through and choose asset you want.
        </Typography>
        <AssetsGrid assets={assets} />
      </Box>
      <Box
        sx={{
          height: useMediaQuery('(min-width:1200px)') ? '40%' : '0%',
          display: useMediaQuery('(min-width:1200px)') ? 'block' : 'none'
        }}
      >
        <AddAssetsDesktop />
      </Box>

      <div
        style={{
          display: useMediaQuery('(min-width:1200px)') ? 'none' : 'block'
        }}
      >
        <PlusButton path="/topics/sports/add/mobile" />
      </div>

    </div>
  );
}

export default TopicsSport;
