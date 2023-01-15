import React from "react";
import Card from "@mui/material/Card";
import { CardActionArea, CardMedia } from "@mui/material";

function AssetsCard(props) {
  console.log("Individual asset: ", props.asset);
  return (
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          src={require(`../../images/${props.asset.image}`)}
          alt={props.asset.image}
        />
      </CardActionArea>
    </Card>
  );
}

export default AssetsCard;
