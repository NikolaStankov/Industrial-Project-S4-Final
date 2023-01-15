import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardMedia } from '@mui/material';
import nokia from '../../images/nokia.png';
import { Grid, Box } from '@mui/material';

function TopicsCard(props) {
  return (
    <Card sx={{ position: 'relative'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          src={require(`../../images/${props.topic.image}`)}
          alt="green iguana"
          sx={{height: '200px'}}
        />
        <Typography gutterBottom variant="h5" component="div" sx={{
          position: 'absolute',
          color: 'white',
          bottom: '2%',
          left: '5%'
        }}>
          {props.topic.title}
        </Typography>
      </CardActionArea>
    </Card>
  )
}

export default TopicsCard;