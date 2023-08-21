import "./card.css";
import reddot from "../../assets/images/reddot.svg";
const Card =() => {
   return (

    <div>
<div className="">
 <img src={reddot} className="reddot-box position-absolute  start-0 top-100 mt-5" alt="" />

</div>
<div className="container mt-5 ">
    <div className="row ">


    <div className="col-md-2">
          
</div>
        <div className="col-md-12 cont mb-5 mt-5">

<h4 className="care mt-4">CARE FEATURES</h4>
<h1 className="awesome">Awesome Service With Our Tools</h1>
        </div>
    </div>
</div>

    </div>




    );
}

export default Card;

