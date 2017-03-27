import 'aframe';
import React from 'react';
import SingleSprite from './SingleSprite'
import { getSkyAngle } from '../utils'


export default class VRScene extends React.Component {

  render () {
    const bgAngle = getSkyAngle(this.props.background)
    return (

      <a-scene embedded>

        {/*SKY*/}
        <a-sky src="#sky" rotation={bgAngle} />

        <a-assets>
          {/* MODELS */}
          <a-asset-item id="surprise" src="/objects/surprise.obj"></a-asset-item>
          <a-asset-item id="joy" src="/objects/joy.obj"></a-asset-item>
          <a-asset-item id="sadness" src="/objects/sadness.obj"></a-asset-item>
          <a-asset-item id="anger" src="/objects/anger.obj"></a-asset-item>
          <a-asset-item id="fear" src="/objects/fear.obj"></a-asset-item>
          {/*SKY/ENV*/}
          <img id="sky" src={`/env-images/${this.props.background}.jpg`} />
          {/** TEXTURES **/}
          <img id="plastic" src="/textures/plastic.jpg" />
        </a-assets>

        { this.props.children && this.props.children }

        {/** LIGHTS **/}

        {/*purplish light*/}
        <a-entity light="color: #ffaaff; intensity: 3" position="5 5 5"></a-entity>

        {/*ambient light*/}
        <a-entity light="color: white; type: ambient;"></a-entity>
        <a-entity position="0 -3 7" camera wasd-controls="fly: true; acceleration: 150" look-controls></a-entity>

      </a-scene>
    );
  }
}


/*
LIGHT EXAMPLES

<a-entity light ="color:#AFA; intensity: 5" position="0 -2 -7" ></a-entity>
<a-entity light="type: ambient; color: #fff"></a-entity>
<a-entity light="type: directional; color: #FFF; intensity: 0" position="-0.5 1 1"></a-entity>*/
/*<a-entity light="color: white; intensity: 0.5" position="-5 5 15"></a-entity>
<a-entity light="color: white; type: ambient;"></a-entity>

<a-entity light="type: hemisphere; color: #33C; groundColor: #3C3; intensity: 2"></a-entity>*/