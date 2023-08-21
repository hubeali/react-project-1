import "./hero.css";
import man from '../../assets/images/man.svg';
import dots from '../../assets/images/dots.svg';
import dts from '../../assets/images/dts.svg';
                   
const Hero = () => {
    return (
        <div className="bg-color ">
            <img src={dots} alt="" className="position-absolute end-0 mt-4 img-fluid " />
            <div className="container">
                <div className="row">

                    <div className="col-md-6 mt-5">
                        <h1 className="our "> Our <span className="con-color">consultation</span>  is <br /> always in sync <br /> with your strategy</h1>

                        <p className="text-white mt-4 scel">Scelerisque dignissim in leo at magna donec mi metus ipsum <br /> luctus nam elit sociis luctus et aliquam libero.</p>

                        <button className="text-white bgc">Our Services</button>
                     <div className="position-absolute  mt-3 start-0 ms-2"><img src={dts} alt=""  /></div>
                    </div>

                    <div className="col-md-6 mt-5">
                        <img src={man} alt="" className="img-fluid" width={500} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;