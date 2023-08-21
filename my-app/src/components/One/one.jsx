import "./one.css";
import blub from "../../assets/images/blub.svg";
import cloud from "../../assets/images/cloud.svg";
import ux from "../../assets/images/ux.svg";

const One = () => {
    return (
<div>

        <div className="container mt-5 mb-5">
            <div className="row text-center">

                <div className="col-md-4">

                    <img src={blub} alt=""width={60} className="img-fluid "/>
                 
                    <h3 className="app">App Development</h3>
                    <p className="pp">Helping families live intelligently <br /> means we’re always working to <br /> bring our customers.</p>
                </div>

                <div className="col-md-4">
                    <img src={cloud} alt="" width={60} className="img-fluid" />
<h3 className="app">Cloud Storage</h3>
<p className="pp">Helping families live intelligently <br /> means we’re always working to <br />bring our customers.</p>
                </div>

                <div className="col-md-4">
                    <img src={ux} alt="" width={60} className="imgfluid" />
                    <h3 className="app">UX Planning</h3>
                    <p className="pp">Helping families live intelligently <br /> means we’re always working to <br /> bring our customers.</p>
                </div>
            </div>
        </div>




</div>
    );
}

export default One;