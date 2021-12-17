import React, { Components } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import nasa_museum from '../images/nasa_museum.png';
import book_log from '../images/BookLog_dec2021.png';
import witch_software from '../images/BOS_screenshot_dec21.png';
import pseal_portfolio from '../images/PSeal_Portfolio.png';
import pseal_linkedin from '../images/linkedin_screenshot.png';
import '../App.css';
import Button from '@mui/material/Button';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function Contact() {
    return (
        <Box>
            <Grid container  >

                <Grid item xs={12} md={12} lg={12}>
                    <br />
                    <br />
                    <h1 className="nav">Contact Me</h1>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                    <br />
                    <br />
                    <h1 className="nav">I'm on linkedin</h1>
                </Grid>

            </Grid>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >

                <Grid item xs={12} md={12} lg={12} style={{ textAlign: 'center' }}>
                    <br />
                    <br />
                    <Card sx={{ maxWidth: 340 }} >
                        <CardMedia
                            component="img"
                            height="140"
                            image={pseal_linkedin}
                            alt="Priscilla Seal Linkedin"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Priscilla Seal Linkedin
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Message or add me on linkedin
                            </Typography>
                        </CardContent>
                        <CardActions style={{justifyContent: 'center'}}>
                            <a href="https://www.linkedin.com/in/priscillaseal/">
                                <Button variant="contained">Take me to Priscilla's linkedin</Button>
                                </a>
                        </CardActions>
                    </Card>

                </Grid>

            </Grid>
        </Box >
    );
}