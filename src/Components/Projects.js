import React, { Components } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import nasa_museum from '../images/nasa_museum.png';
import book_log from '../images/BookLog_dec2021.png';
import witch_software from '../images/BOS_screenshot_dec21.png';
import pseal_portfolio from '../images/PSeal_Portfolio.png';
import '../App.css';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Projects() {

    return (
        <Box>
            <Grid container spacing={2}  >
                <Grid item xs={12} md={12} lg={12}>
                    <br />
                    <br />
                    <h1 className="nav">Project Showcase</h1>
                </Grid>

                <Grid item md={2} lg={2}></Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <br />
                    <br />

                    <Card sx={{ maxWidth: 340, marginLeft: '50px', marginRight: '0px' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={nasa_museum}
                            alt="Nasa Museum"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Nasa 3D Museum
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Made with Three.js (JavaScript library to animate WebGL), as a capstone project for university.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><a href="https://youtu.be/Ktj12KmzWU8">YouTube</a>&nbsp;&#8226;&nbsp;
                                Github (coming soon)</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <br />
                    <br />

                    <Card sx={{ maxWidth: 340, marginLeft: '50px', marginRight: '0px' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={book_log}
                            alt="Book Log"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Book Log
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Made with React, PostGres, and MaterialUI. User can add books to the grid,
                                create/read/update/delete from the book list. Tested with MirageJS, an api mocking library.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small"><a href="https://youtu.be/C_mqwJ7T0K0">YouTube</a>&nbsp;&#8226;&nbsp;
                                <a href="https://github.com/pSealDev/seal_booklog">Github</a></Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item md={2} lg={2}></Grid>

                <Grid item xs={0} md={2} lg={2}></Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <br />
                    <br />

                    <Card sx={{ maxWidth: 340, marginLeft: '50px', marginRight: '0px' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={pseal_portfolio}
                            alt="Priscilla Seal Portfolio"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Portfolio Website
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                My portolio. Made with React, MaterialUI, React-Bootstrap, React-Three-Fiber, FramerMotion, and Three.js. Responsive.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">
                                <a href="https://github.com/pSealDev/portfolio">
                                    Github (coming soon)
                                </a>
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <br />
                    <br />

                    <Card sx={{ maxWidth: 340, marginLeft: '50px', marginRight: '0px' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={witch_software}
                            alt="Witch Software"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Witch Software
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Fun halloween project. Made with React, MongoDB, and MaterialUI.
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Github (coming soon)</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={0} md={2} lg={2}></Grid>
                <Grid item xs={0} md={6} lg={6}>Book Log</Grid>
            </Grid>
        </Box >

    );
}

export default Projects