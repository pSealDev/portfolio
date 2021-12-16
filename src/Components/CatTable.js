import React, { useRef, useState } from "react"
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { Environment, OrbitControls } from "@react-three/drei";

const CatTable = () => {
    const gltf = useLoader(GLTFLoader, 'morning_coffee/scene.gltf')
    const myMesh = React.useRef();


    useFrame(({ clock }) => {
        const a = clock.getElapsedTime() * 0.50;
        myMesh.current.rotation.y = a;
    });
    return (
        <>
            <ambientLight intensity={0.2} />
            <directionalLight />
            <primitive object={gltf.scene} scale={0.04, 0.04, 0.009} ref={myMesh} />
            <OrbitControls />
        </>

    )
}

export default CatTable; 
