import React, { Component, useRef, useState } from 'react'
import { Suspense } from 'react'
import me_pic from '../images/linkedin_png.png';
import nasa_museum from '../images/nasa_museum.png';
import book_log from '../images/BookLog_dec2021.png';
import witch_software from '../images/BOS_screenshot_dec21.png';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Boxy from './Boxy';
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import '../App.css';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import modelPath from "../public/morning_coffee/scene.gltf";
import { Environment, OrbitControls, Text } from "@react-three/drei";
import Button from '@mui/material/Button';
import CatTable from './CatTable'




const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



function MyRotatingBox() {
    const myMesh = React.useRef();
    const texture = useLoader(TextureLoader, { me_pic })

    useFrame(({ clock }) => {
        const a = clock.getElapsedTime();
        myMesh.current.rotation.x = a;
    });

    return (
        <mesh ref={myMesh}>
            <boxBufferGeometry />
            <meshPhongMaterial map={texture} />
        </mesh>
    );
}

function Scene() {
    const colorMap = useLoader(TextureLoader, 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg?crop=0.669xw:1.00xh;0.166xw,0&resize=640:*')
    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight />
            <mesh>
                <sphereGeometry args={[1, 32, 32]} />
                <meshStandardMaterial map={colorMap} />
            </mesh>
        </>
    )
}

function Scene2(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    const colorMap = useLoader(TextureLoader, props.texture)

    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={mesh}
            scale={active ? 3.5 : 3}
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}
        >
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial map={colorMap} />
            <ambientLight intensity={0.5} />
            <OrbitControls />

        </mesh>
    )
}
// const Model = () => {
//     const gltf = useLoader(GLTFLoader, 'morning_coffee/scene.gltf')
//     const myMesh = React.useRef();


//     useFrame(({ clock }) => {
//         const a = clock.getElapsedTime() * 0.50;
//         myMesh.current.rotation.y = a;
//     });
//     return (
//         <>
//             <ambientLight intensity={0.2} />
//             <directionalLight />
//             <primitive object={gltf.scene} scale={0.04, 0.04, 0.009} ref={myMesh} />
//             <OrbitControls />
//         </>

//     )
// }



function Home() {
    return (
        <div id="Home">
            <br />
            <br />
            <Box >
                <Grid container>
                    <Grid item xs={12} md={4} lg={4}></Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Canvas style={{ height: '300px' }} camera={{ fov: 75, position: [1, 2, 5] }}>
                            <Suspense fallback={null}>
                                <CatTable />
                            </Suspense>
                        </Canvas>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}></Grid>
                    <br />
                    <br />
                    <br />
                    <Grid item xs={12} md={12} lg={12} className="transparent">
                        <div className="intro_text_2">
                            <h1>Hey, I'm a React dev in California!</h1>
                        </div>
                        <br />
                        <br />
                    </Grid>



                </Grid>
                <Grid container>
                    <Grid item xs={12} md={12} lg={4} ></Grid>
                    <Grid item xs={12} md={12} lg={2} className="bio" style={{ textAlign: "center" }} >
                        <div>
                            <div>
                                <h2 style={{ fontSize: '3em' }}>Priscilla Seal</h2>
                                <p>React Focused, JavaScript Developer</p>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12} lg={2} style={{ textAlign: "center" }}>
                        <div class="polaroid">
                            <img id="me_pic_style" alt="me" src={me_pic} />
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4} lg={4} ></Grid>
                <br />
                <br />

                <Grid item xs={12} md={12} lg={12} className="transparent">
                    <div className="intro_text_2">
                        I am a software engineer and a full-stack developer in Southern California.
                         I am actively looking for a 
                        software engineering position that uses React and JavaScript, so let me know if you
                        have an opportunity for me!
                    </div>

                    <br />
                    <br />
                </Grid>
                <Grid item xs={12} md={12} lg={12} style={{ textAlign: 'center' }}>
                    <Button variant="contained">My Portfolio</Button>
                    <br />
                    <br />
                </Grid>

                <br />
                <br />
                <br />

                <Grid container spacing={2} >
                    <Grid item xs={12} md={12} lg={12} style={{ textAlign: 'center' }}>
                        <h1>Projects</h1>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        {/* <a target="_blank" href="https://youtu.be/Oe1v1BNAGrA"> */}

                        <Canvas>
                            <Text
                                scale={[10, 10, 10]}
                                color="black" // default
                                anchorX="top" // default
                                anchorY="middle" // default
                                position={[1.2, 0, 0]}
                            >
                                Nasa Museum
                            </Text>
                            <Suspense fallback={null}>
                                <Scene2 position={[-1.2, 0, 0]} texture={nasa_museum}/>
                                <OrbitControls />
                            </Suspense>
                        </Canvas>
                        {/* </a> */}
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Canvas>
                        <Text
                                scale={[10, 10, 10]}
                                color="black" // default
                                anchorX="top" // default
                                anchorY="middle" // default
                                position={[1.2, 0, 0]}
                            >
                                Book Log
                            </Text>
                            <Suspense fallback={null}>
                                <Scene2 position={[-1.2, 0, 0]} texture={book_log}/>
                            </Suspense>
                        </Canvas>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Canvas>
                        <Text
                                scale={[10, 10, 10]}
                                color="black" // default
                                anchorX="top" // default
                                anchorY="middle" // default
                                position={[1.2, 0, 0]}
                            >
                                Witch Software
                            </Text>
                            <Suspense fallback={null}>
                                <Scene2 position={[-1.2, 0, 0]} texture={witch_software} />
                            </Suspense>
                        </Canvas>
                    </Grid>
                </Grid>

                <br />
                <br />
                <br />

                {/* <Grid container style={{ textAlign: 'center' }}>

                    <Grid item xs={12} md={12} lg={12}>
                        <h1>Experience</h1>
                    </Grid>

                    <Grid item xs={12} md={4} lg={4}>
                        <h2>Modern Campus</h2>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <h2>Insureship</h2>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <h2>Contracting Work</h2>
                    </Grid>
                </Grid> */}
                <br />
                <br />
            </Box>
            {/* <div class="wrapper">
                <div class="item">
                    <div class="polaroid">
                         <img id="me_pic_style" alt="me" src={me_pic} /> 
                        <img alt="me" src={me_pic} />
                         <div class="caption">Me</div> 
                    </div>
                </div>
                <div id="intro_text">
                    <div>Hey guys, I'm Priscilla Seal and I'm very excited to share my coding journey with you.</div>
                    <div>I've just graduated from Regis University with a B.S. in Computer Science.
                    </div>
                    <div>I love all things JavaScript. I also just like programming and learning about different tech in general.
                    </div>
                </div>
            </div>

            <br />*/}


        </div >
    );
}

export default Home

