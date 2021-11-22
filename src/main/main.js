import React, { useState } from "react"
import { Container } from "react-bootstrap"
import img from "../img/img1.jpg"
import WhiteBtn from "../UI/BTN"
import UIBTN from "../UI/UIBTN"
import './main.css'
function Slide(){
  const [count, setCount] = useState(0)
  const [togglerBtn, setToggler] = useState(true)
  function minus (){
    setCount (minus => minus - 1)
  }
  function plus () {
    setCount (plus => plus + 1)
  }
     return(
        <>
        <main>
          <Container className="container">
            <div className="contentImg">
                <img src={img} alt="jpg"/>
              </div>
              <div className="contentInfo">
              <h1>Man Shop</h1>
              {togglerBtn ? <p className="lorem">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, ab dolore nisi quasi aspernatur itaque nulla accusamus ullam ex obcaecati vel eius tenetur vitae asperiores earum dolor aut temporibus beatae!</p> : <p className="lorem">От торговых операций, обеспеченных реальными активами.
              Доля в прибыли инвестора закрепляется в договоре в соответствии с условиями, которые зависят от суммы и срока инвестиционного вклада. Вслучае отрицательного финансового результата, убытки распределяются между инвесторами пропорционально доле каждого инвестора (вкладчика)
              в общем капитале компании.</p>}
              
              <div className="d-flex "><WhiteBtn 
              id="btn" 
              className="btn btn-dark"
              >Contact</WhiteBtn>
              <UIBTN id="btn" 
              onClick={()=> setToggler (!togglerBtn) }
              className="btn btn-dark">Ma'lumot olish</UIBTN>
              </div>

              <div className="btns">
                <button onClick={minus} className="btn btn-primary">-</button>
                <p>{count}</p>
                <button onClick={plus} className="btn btn-primary">+</button>
              </div>
              
              </div>
            </Container>
        </main>
        </>
    )
}
export default Slide;