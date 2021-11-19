import React from 'react'
import { Images } from '~data'
import Shape from "./style"
export default function InnerShape(){
return(
<Shape>
    <img src={Images.pageTitleShape} alt="shape"/>
</Shape>
)
}