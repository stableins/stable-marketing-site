import React from 'react'
 import {StaticImage as Img} from "gatsby-plugin-image"
 import MapArea  from "./style"
export default function ContactMap(){
return(
<MapArea>
    <Img src="../../../../../assets/image/home-services/contact-map.png" alt="map-image" layout="fullWidth" placeholder="blurred"/>
    <MapArea.Card className="card-1">
        <p>4 G-ral. Traian Mosoiu Street, A Building, 2nd</p>
    </MapArea.Card>
    <MapArea.Card className="card-2">
        <p>Entrance, Flat 30, Cluj-Napoca, Romania</p>
    </MapArea.Card>
</MapArea>
)
}