import React from 'react';
import { Grid, Typography } from '@mui/material';
import dragIcon from '../../images/drag-drop.png';
import DescriptionIcon from '@mui/icons-material/Description';
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import VideocamIcon from "@mui/icons-material/Videocam";
import MicIcon from "@mui/icons-material/Mic";
import { ReactComponent as DragDropIcon } from "../../images/drag-drop.svg";
import { Link } from 'react-router-dom';

function AddAssetsDesktop() {
    return (
        <div>
            <Typography variant='h5' align='left' pt={1} pb={1}>
                Add Assets
            </Typography>

            <Grid container columnSpacing={4} >
                <Grid container alignItems="center" justify="center" item xs={6} sx={{ backgroundColor: "#E3F5FF", backgroundClip: 'content-box', paddingLeft: '3%' }}>
                    <Grid item>
                        <DragDropIcon style={{ width: '25%', height: '25%', paddingTop: '2%', paddingBottom: '2%' }} />
                    </Grid>
                </Grid>
                <Grid container direction="row" alignItems="center" justify="center" item xs={6} columnSpacing={2} style={{ backgroundColor: "#E5ECF6", backgroundClip: 'content-box' }}>
                    <Grid item xs={3}>
                        <Link to="/topics/sports/add/report" style={{ color: 'black' }}>
                            <DescriptionIcon sx={{ width: '80%', height: '80%' }} />
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to="/topics/sports/add/image" style={{ color: 'black' }}>
                            <CameraAltIcon sx={{ width: '80%', height: '80%' }} />
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to="/topics/sports/add/audio" style={{ color: 'black' }}>
                            <MicIcon sx={{ width: '80%', height: '80%' }} />
                        </Link>
                    </Grid>
                    <Grid item xs={3}>
                        <Link to="/topics/sports/add/video" style={{ color: 'black' }}>
                            <VideocamIcon sx={{ width: '80%', height: '80%' }} />
                        </Link>
                    </Grid>

                </Grid>
            </Grid>
        </div>
    )
}

export default AddAssetsDesktop;