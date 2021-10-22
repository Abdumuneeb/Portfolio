import React from 'react';
import CapabilityCard from '../CapabalityCard';
import style from './Capabilities.module.css';

const Cabalities = () => {
    return (
      <div>
        <div className={style.contentWrap}>
          <h1> My Capabilities </h1>
          <span className={style.redLine}>
                
                </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et t enim ad minim veniam, quis
            nostrud exercitation.
          </p>
        </div>
        <div className={style.Wrapper}>
          <div className={style.cardWrapper}>
            <CapabilityCard
              imgSrc="/images/cap-img.png"
              textHeading="Web Design"
              textPara="Get awesome design services from inkyy.com "
            />
          </div>
          <div className={style.cardWrapper}>
            <CapabilityCard
              imgSrc="/images/cap-img.png"
              textHeading="Web Design"
              textPara="Get awesome design services from inkyy.com "
            />
          </div>
          <div className={style.cardWrapper}>
            <CapabilityCard
              imgSrc="/images/cap-img.png"
              textHeading="Web Design"
              textPara="Get awesome design services from inkyy.com "
            />
          </div>
          <div className={style.cardWrapper}>
            <CapabilityCard
              imgSrc="/images/cap-img.png"
              textHeading="Web Design"
              textPara="Get awesome design services from inkyy.com "
            />
          </div>
          <div className={style.cardWrapper}>
            <CapabilityCard
              imgSrc="/images/cap-img.png"
              textHeading="Web Design"
              textPara="Get awesome design services from inkyy.com "
            />
          </div>
          <div className={style.cardWrapper}>
            <CapabilityCard
              imgSrc="/images/cap-img.png"
              textHeading="Web Design"
              textPara="Get awesome design services from inkyy.com "
            />
          </div>
        </div>
      </div>
    );
}

export default Cabalities;
