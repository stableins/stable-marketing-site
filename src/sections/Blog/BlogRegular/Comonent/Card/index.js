import React from "react"
import { SuperTag } from "~components"
import Card from "./style"
export default function BlogCard({
  text,
  title,
  Like,
  date,
  user,
  commentCount,
  badge,
  image,
  url,
  ...rest
}) {
  return (
    <Card>
      <Card.Image>
        <img src={image} alt="Blog" />
      </Card.Image>
      <Card.OvaerlayBlock>
        <Card.Top mb="20px">
          <Card.Badge backgroundColor="#ff5722">{badge}</Card.Badge>
          <Card.Date to="/blog/blog-details">{date}</Card.Date>
        </Card.Top>
        <Card.Title to={url}>
          <SuperTag value={title} />
        </Card.Title>
        <Card.Bottom>
          <Card.User to="/">
            <i className="far fa-user"></i> <SuperTag value={user} />
          </Card.User>
          <Card.Like to="/blog/blog-details">
            <i className="far fa-heart"></i> {Like}
          </Card.Like>
          <Card.Comment to="/blog/blog-details">
            <i className="far fa-comments"></i> {commentCount}
          </Card.Comment>
        </Card.Bottom>
      </Card.OvaerlayBlock>
    </Card>
  )
}
