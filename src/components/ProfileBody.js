import React from 'react';
import ProfileImg from './ProfileImg';
import ProfileName from './ProfileName';
import { changeDarkMode } from '../utils/utils';

function ProfileBody() {
  return (
    <div id='profile-body'>
      <ProfileImg />
      <ProfileName />
      <button id="dark-light-mode" onClick={() => { changeDarkMode() }}><i className="fa fa-moon" aria-hidden="true"></i></button>
      <p>Hello. I'm Sarah. I'm a 2004-born student, enjoying my gap year while self-studying coding.
        I live on Bintaro, Tangerang Selatan.
      </p>
      <br />
      <p>My <b>experiences</b> would include when I joined a 3-months internship where I make website for my client using
        Joomla 4.0.
      </p>
      <br />
      <p>I wasn't very active at school, I didn't join many contests or events. I'm more of your study-nerd.
        So, my proudest <b>achievements</b> would be when I finished the capstone project to get the certification on
        CS50's Web Programming with Python and JavaScript.
      </p>
    </div>
  )
}

export default ProfileBody
