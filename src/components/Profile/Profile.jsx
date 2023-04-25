import React from 'react';
import classes from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts';
const Profile = () => {
  return (
    <div className={classes.content}>
      <img src='https://www.donuzlav.com/photo/images/photki14.jpg' />

      <div>
        <img className={classes.content__image} src='https://cdn141.picsart.com/5a27a9c2-aeba-42c6-9501-94b9fd687567/394556909018201.jpg?type=webp&to=crop&r=256' />
      </div>
      <MyPosts />
    </div>
    
  )
}
export default Profile;