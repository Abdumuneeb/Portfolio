import React from 'react';
import style from './AboutMe.module.css';

const AboutMe = () => {
    return (
      <div>
        <div className={style.section}>
          <div className={style.container}>
            <div className={style.wrapper}>
              <div className={style.contentWrapper}>
                <h1 className={style.abtHeading}>About Me </h1>
                <p className={style.aboutPara}>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat
                </p>
                <p className={style.aboutPara}>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur.
                </p>
                <button className={style.AboutMe}> Download CV </button>
              </div>
              <div className={style.imgWrapper}>
                  <img src="/images/about-img.png" alt="About Me"/>
              </div>
              <span className={style.redLine}>
                
              </span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutMe;
