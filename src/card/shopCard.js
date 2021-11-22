import {React} from "react";
import {Container} from "react-bootstrap";
import './Card.css';
import img from '../img/img1.jpg'
function Shopping (props){
    return(
        <section className="section">
        <Container>
  <div className="asd">
    <img src={img} alt="jpg" classname="img"/>
    <div>
      <p className="title">{props.post.title}</p>
            <a href="#!"className="link">{props.post.link}</a>
      <p>
        {props.post.text}
      </p>
    </div>
    <div>
    <small className="text-muted">{props.post.muted}</small>
    </div>
  </div>
        </Container>
        </section>
    )
}
export default Shopping
