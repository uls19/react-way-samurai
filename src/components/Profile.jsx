import React from 'react';
import classes from './Profile.module.css'
const Profile = () => {
  return (
    <div className={classes.content}>
      <img src='https://wallpapershome.ru/images/wallpapers/kartinki-pro-lyubov-7680x4320-kartinki-pro-lyubov-21486.jpg' />

      <div>
        <img className={classes.content__image} src='https://cdn141.picsart.com/5a27a9c2-aeba-42c6-9501-94b9fd687567/394556909018201.jpg?type=webp&to=crop&r=256' />
      </div>
      <div>
        My posts
        <div>
          New posts
        </div>
      </div>
      <div className={classes.posts} >
        <div className={classes.item}>
          Post1
        </div>
        <div className={classes.item}>
          Post2
        </div>
      </div>
    </div>
  )
}
export default Profile;