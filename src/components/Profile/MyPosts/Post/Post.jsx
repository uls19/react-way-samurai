import React from 'react';
import classes from './Post.module.css';
const Post = (props) => {
  return (
        <div className={classes.item}>
          <img src='https://winter.group.shef.ac.uk/orbitron/orbitron-logo.png' />
          {props.message};
        </div>
       
  )
}
export default Post;