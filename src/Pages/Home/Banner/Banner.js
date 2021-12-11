import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const homeBanner = {
    background: 'url(https://q4p3y7t4.rocketcdn.me/wp-content/uploads/2020/01/15.jpg?id=10550)',
    backgroundPosition: 'center',
    backgroundSize:'cover',
    backgroundRepeat: 'no-repeat',
    height: '400px'
}


const Banner = () => {
    return (
        <Box style={homeBanner} sx={{ flexGrow: 1, mt: -8, zIndex: 0, padding: '250px 0px 10px 30px ' }}>
            <Grid container spacing={2}>

                <Grid item xs={12} md={12} sx={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    textAlign: 'left',

                }}>
                    <Box>
                        <Typography variant="h3" style={{ color: '#424242', textTransform: 'uppercase', fontWeight: 'bold' }}>
                            BUY A NEW CAR <br /> OR USED CAR!
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: 'rgb(0 0 0 / 52%)' }}>Discover More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Banner;