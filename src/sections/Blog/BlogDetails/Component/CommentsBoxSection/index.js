import React from 'react'
import { Link, SuperTag } from '~components'
import { Images } from '~data'
import  Widgets  from '../Widgets'
import CommentsBox  from './style'
export default function CommentsBoxSection({UserName, ...rest}){
  return(
    <CommentsBox>
      <CommentsBox.Title>Comments</CommentsBox.Title>
      <CommentsBox.Comments as="ul">
      {/* Single Comments */}
      <CommentsBox.MetaSingle>
        <Widgets 
            UserImage={Images.CommentsSections.commentsUserImg1 } UserName="Brandon Howard"
        />
        <CommentsBox.Sub>
          <Widgets 
            UserImage={Images.CommentsSections.commentsUserImg2 }
            UserName="Jennifer Ashley"
          />
        </CommentsBox.Sub>
      </CommentsBox.MetaSingle>
      {/*/ .Single Comments */}
      {/* Single Comments */}
      <CommentsBox.MetaSingle>
        <Widgets 
          UserImage={Images.CommentsSections.commentsUserImg3 }
          UserName="Mark Ruffins"
        />
      </CommentsBox.MetaSingle>
      {/*/ .Single Comments */}
      </CommentsBox.Comments>
    </CommentsBox>
)
}