import React from 'react';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

function PlusButton({path}) {
    return (
        <Button style={{
            height: '80px',
            width: '80px',
            borderRadius: '50%',
            border: '1px solid black',
            position: 'absolute',
            backgroundColor: 'white',
            marginRight: '2%',
            marginBottom: '2%',
            bottom: '0',
            right: '0'
        }}>
            <Link to={path} style={{ textDecoration: 'none'}}>
                <Typography variant='h2' color="black">
                    +
                </Typography>
            </Link>
        </Button >
    )
}

export default PlusButton