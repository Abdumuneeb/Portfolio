import React from 'react';
import style from './ContactUs.module.css';

const ContactUs = () => {
    return (
      <div>
        <div className={style.section}>
        <span className={style.redLine}>
        </span>
          <div className={style.container}>
            <div className={style.wrapper}>
            
              <div className={style.contentWrap}>
                <h1> Let’s Make Something Great Together </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et t enim ad minim
                  veniam, quis nostrud exercitation.
                </p>
              </div>
              <div className={style.formWrapper}>
                    <form>
                        <div className={style.inputWrap}>
                            <input type="text" placeholder= "Name"/> 
                            <input type="text" placeholder= "Email"/>
                        </div>
                        <div className={style.inputWrap}>
                            <input type="text" placeholder= "Phone#"/> 
                            <input type="Number" placeholder= "Budget"/> 
                        </div>
                        <div className={style.inputWrap}>
                            <textarea placeholder="Message">
                            </textarea> 
                        </div>
                       <div className={style.inputWrap}>
                       <button className ={style.actionBtn}> Hire Me  </button> 
                       </div>
                     
                    </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ContactUs;
