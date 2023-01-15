import React from "react";
import TopicsCard from "./TopicsCard";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function TopicsGrid(props) {
  return (
    <Grid container spacing={{ xs: 3, md: 5 }}>
      {props.topics.map((topic) => (
        <Grid key={topic.title} item xs={6}>
          <Link to="/topics/sports">
            <TopicsCard topic={topic}/>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
}

export default TopicsGrid;
