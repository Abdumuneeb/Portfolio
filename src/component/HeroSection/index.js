import React from 'react';
import style from './HeroSection.module.css';

const HeroSection = () => {
    return (
        <div>
            <div className={style.section}>
                <div className ={style.container}>
                <div className={style.flexWrapper}>
                    <div className={style.wrapper}>
                        
                            <div className={style.contetnWrapper}>
                                <h4> Hello, I am </h4>
                                <h1> Mark Reccardo</h1>
                                <h3> A young  <span>UI/UX </span> designer with crazy for mobile & web design.</h3>
                            </div>
                            <div className ={style.iconWrap}>
                                <h5> Find Me On</h5>
                                <div className={style.flexWrap}>
                                    <img src="/images/behance.png" alt="logos"/>
                                    <img src="/images/dribbble.png" alt="logos"/>
                                    <img src="/images/insta.png" alt="logos"/>
                                    <img src="/images/pinterest.png" alt="logos"/>
                                    <img src="/images/linkedin.png" alt="logos"/>
                                  
                                </div>
                                <button className ={style.actionBtn}> Hire Me  </button> 
                                <button className ={style.actionBtn}> Portfolio  </button>
                            </div>
                        </div>

                        <div className={style.HeroImageWrap}>
                            <img src="/images/Herobg.png" alt="hero_bg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
