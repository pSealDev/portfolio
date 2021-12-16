import React from "react";

import { MeshLambertMaterial } from "three";
import { BoxBufferGeometry } from "three";

 function Boxy() {
    return(
        <mesh>
            <BoxBufferGeometry attach="geometry" />
            <MeshLambertMaterial attach="material" color="hotpink" />
        </mesh>
    )
}

export default Boxy


