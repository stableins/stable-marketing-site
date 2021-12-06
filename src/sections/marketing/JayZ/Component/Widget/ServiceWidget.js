import React from "react"
import { SuperTag } from "~components";
import Widget from "./style"
export default function ServiceWidget({icon,title,text, image,...rest}) {
  return (
    <>
      <Widget>
        <Widget.Body>
          <Widget.Title>Partners</Widget.Title>
          <Widget.Text>
            <div>ko</div>
          </Widget.Text>
        </Widget.Body>
      </Widget>
      <Widget>
        {/* <Widget.Icon>
        <img src={icon} alt="service icon" />
      </Widget.Icon> */}
        <Widget.Body>
          <Widget.Title>{title}</Widget.Title>
          <Widget.Text>
            <div>ko</div>
          </Widget.Text>
        </Widget.Body>
      </Widget>
    </>
  )
}
