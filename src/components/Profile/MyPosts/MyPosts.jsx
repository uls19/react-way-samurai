import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
  return (
    <div>
      <div className={classes.Feedback}>
        <input type="email" name="email" className={classes.mail} placeholder='Email' />
        <a className={classes.button__link} href='#'>Button</a>
      </div>
      <div className={classes.MyPosts}>
        <Post message='Hi, how are you?' />
        <Post message="it's my first post!" />
        <Post message='Это я добавил сам' />
        <Post message='Ещё одно сообщение' />
      </div>
    </div>

  )
}
export default MyPosts;