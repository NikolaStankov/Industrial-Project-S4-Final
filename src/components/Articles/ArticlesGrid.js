import { Grid } from "@mui/material";
import React from "react";
import ArticleCard from "./ArticleCard";

function ArticlesGrid(props) {
  return (
    <Grid container spacing={{ xs: 3, md: 5 }}>
      {props.articles.map((article) => (
        <Grid key={article.title} item>
          <ArticleCard article={article} />
        </Grid>
      ))}
    </Grid>
  );
}

export default ArticlesGrid;
