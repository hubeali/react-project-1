import redd from "../../assets/images/redd.svg";
import "./eight.css"


const Eight = () => {
    return (
        <div className="">
            <img src={redd} className="position-absolute end-0 mt-5" alt="" />
            <div className="container mt-5 mb-5">
                <div className=" row text-center ">
                    <div className="col-md-12 mt-5">
                        <p className="meet ">  Meet Our Team</p>
                        <h1 className="ex">Experience Team Members
                        </h1>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default Eight;