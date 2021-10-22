import React from 'react';
import style from './CapabilityCard.module.css';

const CapabilityCard = (props) => {
    return (
        <div>
            <div className={style.cardWrapper}>
                <img src={props.imgSrc} alt="Card_images"/>
                <h3> {props.textHeading} </h3>
                <p>{props.textPara} </p>
            </div>
        </div>
    )
}

export default CapabilityCard;
