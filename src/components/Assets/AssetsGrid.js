import React from "react";
import { Grid } from "@mui/material";
import AssetsCard from "./AssetsCard";

function AssetsGrid(props) {
  console.log("Assets are: ", props.assets);
  return (
    <Grid container columns={{ xs: 12, md: 10 }} spacing={2}>
      {props.assets.map((asset) => (
        <Grid key={asset} item xs={4} md={1}>
          <AssetsCard asset={asset} />
        </Grid>
      ))}
    </Grid>
  );
}

export default AssetsGrid;
