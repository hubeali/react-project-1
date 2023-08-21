import "./two.css";
import cup from "../../assets/images/cup.svg";
import doots from "../../assets/images/doots.svg";
import laptop from "../../assets/images/laptop.svg";


const Two = () => {
    return (

        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-3 position-relative">
                    <div className="position-dots position-relative">
                        <img src={doots} alt="" />
                    </div>
                    <div className="position-cup">
                        <img src={cup} alt="" />
                    </div>
                </div>

                <div className="col-md-3 laptop-p">
                    <img src={laptop} alt="" />
                </div>
                <div className="col-md-6">
                    <span className="para ">About</span>
                    <h1 className="para2">Influencer Marketing <br /> for Your Business</h1>
                    <p className="para3">With over 25 years of experience, we have crafted thousands <br />of Strategic discovery process that enables
                        us to peel back <br />the Layers which enable us to understand, connect, represent <br /> and Dominate your market.</p>
                    <button className="phone">Phone Number: +002698 22 33</button>
                </div>
            </div>
        </div >




    );
}

export default Two;