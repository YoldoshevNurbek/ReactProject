import React from "react";
import './new.css'
import Newses from "../JSON/IMG.json";
function News (){
    return (
        <>
            <section className="News">
                {Newses.map((post)=>{
                    return(
                    <div  className="NevwImg">
                        <img src={post.img} alt="png"/>
                        <p className="NewTitle">{post.title}</p>
                        <p className="NewDescr">{post.descr}</p>
                    </div>
                    )
                })}
            </section>
        </>
    )
}
export default News;