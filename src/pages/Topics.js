import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import TopicsGrid from "../components/Assets/TopicsGrid";

function Topics() {
  const [topics, setTopics] = useState([]);

  const getTopics = () => {
    fetch("data/topics.json", {
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
        setTopics(myJson);
      });
  };

  useEffect(() => {
    getTopics();
  }, []);

  return (
    <div style={{ paddingLeft: "4%", paddingRight: "3%", paddingTop: "2%" }}>
      <Typography variant="h4" align="left" pb={0}>
        Topics
      </Typography>
      <Typography variant="h6" align="left" pb={2} color="#969696">
        Browse through and choose asset category.
      </Typography>

      <TopicsGrid topics={topics} />
    </div>
  );
}

export default Topics;
