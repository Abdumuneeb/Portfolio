import React from 'react';
import style from './Navbar.module.css';

const Navbar = () => {
    return (
        <div>
            <div className={style.section}>
                <div className ="container">
                     <div className={style.navbarWapper}>
                           <div className ={style.logoWrapper}>
                                <img src="/images/Portfolio.png" alt="Logo-img"/>
                           </div> 
                           <div className={style.listWrapper}>      
                                <ul>
                                    <li>  About</li>
                                    <li>Portfolio</li>
                                    <li> Contact</li>
                                    <button> Get Started</button> 
                                </ul>
                           </div>
                     </div>   
                </div>  
            </div>
        </div>
    )
}

export default Navbar
