import React from 'react';
import HeroSection from '../../component/HeroSection';
import style from './Home.module.css';
import AboutMe from '../../component/AboutMe';
import Navbar from '../../component/Navbar';
import Footer from '../../component/Footer';
import ContactUs from '../../component/Contact-us';
import ClientSection from '../../component/ClientSection';
import Cabalities from '../../component/Capabilities';
import Portfolio from '../../component/Portfolio';

const Home = () => {
    return (
        <div>
            <div className={style.section}>
                <div className ={style.wrapper}>
                    <div className ={style.squareBg}>
                         <img src="/images/bg-deco.png" alt="square-Decoration"/>
                    </div>
                    <div className={style.circleBg}>
                        <img src="/images/bg-circle.png" alt="circle-bg"/>
                    </div>
                    <div className ={style.rightSquareBg}>
                         <img src="/images/right-square.png" alt="square-Decoration"/>
                    </div>
                    <Navbar/> 
                    <HeroSection/>
                    <AboutMe/>
                    <Portfolio/>
                    <Cabalities/>
                    <ClientSection/>
                    <ContactUs/>
                    <Footer/>
                    
                </div>
            </div>
        </div>
    )
}

export default Home;
