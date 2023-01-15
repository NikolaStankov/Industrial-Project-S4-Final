import React, { useState, useEffect } from "react";
import ArticlesGrid from "../components/Articles/ArticlesGrid";
import { Typography } from "@mui/material";

function Articles() {
  const [articles, setArticles] = useState([]);

  const getArticles = () => {
    fetch("data/articles.json", {
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
        setArticles(myJson);
      });
  };

  useEffect(() => {
    getArticles();
  }, []);

  return (
    <div style={{ paddingLeft: "4%", paddingRight: "3%", paddingTop: "2%" }}>
      <Typography variant="h4" align="left" pb={0}>
        Articles
      </Typography>
      <Typography variant="h6" align="left" pb={2} color="#969696">
        Browse through and choose asset category.
      </Typography>
      {articles && <ArticlesGrid articles={articles} />}
    </div>
  );
}

export default Articles;
