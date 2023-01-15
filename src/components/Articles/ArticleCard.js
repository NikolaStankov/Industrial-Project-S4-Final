import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid, Box } from "@mui/material";
import {useMediaQuery} from '@mui/material';

export default function ArticleCard(props) {
  return (
    <Card sx={{ maxWidth: "100%", maxHeight: useMediaQuery('(max-width:900px)') ? '200px' : '300px' }}>
      <CardActionArea>
        <Grid container>
          <Grid item xs={7}>
            <CardContent sx={{ textAlign: "left" }}>
              <Typography gutterBottom variant="h5" component="div">
                {props.article.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {props.article.body}
              </Typography>
            </CardContent>
          </Grid>
          <Grid item xs={5}>
            <CardMedia
              component="img"
              height= {useMediaQuery('(max-width:900px)') ? '200px' : '300px'}
              src={require(`../../images/${props.article.image}`)}
              alt={props.article.image}
              sx={{ borderRadius: "40px 0px 0px 40px" }}
            />
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
}
