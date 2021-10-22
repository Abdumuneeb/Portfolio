import React from 'react';
import { Link } from 'react-router-dom';
import style from './Footer.module.css';

const Footer = () => {
   const date = new Date()
   const year= date.getFullYear();
   console.log(year);


    return (
        <div>
            <div className={style.section}>
                <div className={style.container}>
                    <div className={style.footerWapper}>
                            <div className={style.contentWrapper}>
                                    <span className={style.redLine}>
                                    </span>
                                    <h1 className={style.porfolioHeading}>Portfolio </h1>
                                    <ul>
                                        <li> <Link to="/" className={style.footerLink}> About &nbsp; | </Link> </li>
                                        <li> <Link to="/" className={style.footerLink}>Portfolio &nbsp; |</Link> </li> 
                                        <li> <Link to="/" className={style.footerLink}> Contact </Link> </li>
                                    </ul>
                                    <p className={style.footerPara}> NY / +1 123456 7890 / <Link to="/"  className={style.footerLink}> hello@graphics.studio.com </Link> </p>
                                    <div className={style.flexWrap}>
                                      <Link to="/">  <img src="/images/behance.png" alt="logos"/></Link>
                                       <Link to="/"> <img src="/images/dribbble.png" alt="logos"/></Link>
                                       <Link to="/"> <img src="/images/insta.png" alt="logos"/></Link>
                                       <Link to="/"> <img src="/images/linkedin.png" alt="logos"/></Link>
                                       <Link to="/"> <img src="/images/pinterest.png" alt="logos"/></Link>
                                      
                                  
                                </div>
                            </div>
                    </div>
                </div>
                <hr className={style.footerHR}/>
                <div className={style.lowerFooter}>
                    <p className={style.footerPara}> Copyright © {year} Graphics Studio | All rights reserved</p>
                </div>
            </div>

            
            
        </div>
    )
}

export default Footer
