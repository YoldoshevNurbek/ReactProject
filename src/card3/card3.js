import React from "react";
import './card3.css'
import img from '../img/mans.png'
import UIBTN from "../UI/UIBTN";
import WhiteBtn from "../UI/BTN";

function Card3 (props){
    return (
        <>
        <div className="container">
            <div className="component">
                <div className="componentCard">
                    <div className="cardtImg">
                        <img src={img} alt="png" className="mans"/>
                    </div>
                    <div className="cardText">
                        <div className="card-span">
                        <span  className="span-price"><strong>{props.post.price}</strong></span>
                        <span  className="span-week"><strong>{props.post.week}</strong></span>
                        </div>
                        <p className="card-text">{props.post.cardText}</p>
                        <div className="btns">
                        <UIBTN className="one">Kупить</UIBTN>
                        <WhiteBtn>Подробнее</WhiteBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card3