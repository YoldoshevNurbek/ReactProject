import React from 'react'
import './footer.css'
import FooterJson from '../JSON/footerLink.json'
import FooterLogo from '../img/Frame.png'
export default function Footer() {
    return(
        <>
        <footer>
        <div className="FooterContainer">
        <div className="search">
            <a href="#!" className="footerLogo"><img src={FooterLogo} alt="png"/></a>
            <a href="#!" className="SerchIcon"><i className="fa fa-search"></i></a>
            <input type="text" placeholder="Поиск по услугам"/>
        </div>
        <div className="FooterLink">
            <div className="LinkOne">
                <div className="LinkNum">
                    <a href="tel:+998" className="Number">99 909 75 33</a>
                    <a href="mailto:" className="mail">nurbekyoldoshev021@gmail.com</a>
                </div>
                <div className="region">
                   <p className="adress">Toshkent viloyati Bo'ka Tumani</p>
                   <p className="watch">Ish vaqtim 09:00 dan 18:00</p>
                </div>
                <div className="LinkIcons">
                <a href="#!"><i class="fab fa-facebook"></i></a>
                <a href="#!"><i class="fab fa-instagram"></i></a>
                <a href="#!"><i class="fab fa-telegram-plane"></i></a>
                <a href="#!"><i class="fab fa-youtube"></i></a>
                <a href="#!"><i class="fas fa-at"></i></a>
                </div>
            </div>
        </div>
        </div>
        </footer>   
        </>
    )
}

