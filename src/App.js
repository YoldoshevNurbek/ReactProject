import React, { useState } from "react";
import './app.css'
import BuyCard from "./BuyCard/BuyCard";
import Shopping from "./card/shopCard";
import Card2 from "./card2/card2";
import Card3 from "./card3/card3";
import Dropdowns from "./Dropdown/Dropdown";
import Footer from "./footer/footer.";
import Slide from "./main/main";
import Nav from "./nav/navbar";
import News from "./News/new";

function App() {
  const [props, setProps] = useState([
    {title:"Card title", link:"More info", text:"This is a wider card with supporting text below asnvksjv sfbkjbsf  kjsfkjfkj fhskjfhkjsdhf fhskdjfhksjdfkjfbvbsk bfkjfbkjsbjkdfkj kfksjfhksjfhskjfbvk fksj ", muted:"Last updated 3 mins ago"},
  ])
  return (
    <div className="app">
      <Nav/>
      <Slide/>
      <div className="shopCard">
      <div className="miniCard">
      {props.map(post =>(
        <Shopping post={post}/>
      ))}
      {props.map(post =>(
        <Shopping post={post}/>
      ))}
      {props.map(post =>(
        <Shopping post={post}/>
      ))}
      </div>
      </div >
      <Card2 post={{title:"Lorem ipsum dolor", info:"We make extra room in the budget without compromising quality by selling direct. No middle man, and no additional construction ."}}/>
     <div className="container">
       <div className="cards">
       <Card3 post={{price:"Price: 50$", week:"5 days ago.", cardText:"We make extra room in the budget without compromising quality by selling direct. No middle man, and no additional construction ."}}/>
       </div>
       <div className="cards">
       <Card3 post={{price:"Price: 50$", week:"5 days ago.", cardText:"We make extra room in the budget without compromising quality by selling direct. No middle man, and no additional construction ."}}/>
       </div>
       <div className="cards">
       <Card3 post={{price:"Price: 50$", week:"5 days ago.", cardText:"We make extra room in the budget without compromising quality by selling direct. No middle man, and no additional construction ."}}/>
       </div>
     </div>
     <BuyCard/>
     <News/>
     <Dropdowns/>
     <Footer/>
    </div>
  );
}

export default App;
