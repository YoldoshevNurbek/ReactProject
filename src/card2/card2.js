import React from "react";
import './card2.css'
import img from "../img/img1.jpg"
 function Card2 (props){
     return( 
         <div className="component">
             <div className="content">
                 <div className="ContentImg">
                     <img src={img} alt="jpg" className="card-img" />
                 </div>
                 <div className="ContentInfo">
                     <h3>{props.post.title}</h3>
                     <p className="infoProject">
                     {props.post.info}
                     </p>
                 </div>
             </div>
         </div>
     )
 }
 export default Card2