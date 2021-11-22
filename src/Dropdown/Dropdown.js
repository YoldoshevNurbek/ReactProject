import React from "react";
import './Dropdown.css';
import Drops from "../JSON/Dropdawn.json"
function Dropdowns (){
return(
    <>
    <div className="dropBig">
        {Drops.map((post)=>{
            return(
            <div className="drop">
                <div className="reply">
                <span className="dropSpan">{post.reply}</span>
                <i class="fas fa-question"></i>      
                </div>
                <p className="DropTitle">{post.title}</p>
                <div className="nextImg">
                    <img src={post.img} alt="png" className="next"/>
                    <a href="#!" className="nextLink">{post.info1}</a>
                </div>
                <div className="nextImg">
                    <img src={post.img} alt="png"/>
                    <a href="#!" className="nextLink">{post.info2}</a>
                </div>
                <div className="nextImg">
                    <img src={post.img} alt="png"/>
                    <a href="#!" className="nextLink">{post.info3}</a>
                </div>
            </div>
            )
        })}
        </div>
        </>
    )
}
export default Dropdowns