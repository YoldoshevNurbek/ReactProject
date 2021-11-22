import React from "react";
import WhiteBtn from "../UI/BTN";
import UIBTN from "../UI/UIBTN";
import './BuyCard.css';
import images from "../img/mans.png";
function BuyCard (props){
    return(
        <>
        <section className="BuyContainer">
            <div className="BuyInfo">
                <p className="question">У вас остались вопросы?
                <br /><span>Закажите консультацию специалиста</span></p>
                <p className="answer">Мы подробно ответим на все ваши вопросы и подберем наиболее удобный вариант вклада</p>
                <div className="button">
                <UIBTN>Заказать консультацию</UIBTN>
                <WhiteBtn className="chat">Онлайн чат</WhiteBtn>
                </div>
            </div>
            <div className="BuyImg">
                <div className="figure">
                    <div className="images">
                        <img src={images} alt="jpg"/>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default BuyCard;