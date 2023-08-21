import "./three.css";
import group from "../../assets/images/group.svg"
import grouptwo from "../../assets/images/grouptwo.PNG"
const Three = () => {
    return (
        <div className="container-bg">

            <div className="container">

                <div className="row text-center">

                    <div className="col-md-12">

                        <p className="pakistan-service text-center ">Our Services</p>
                        <h1 className="text-white text-center">Amazing Business Services</h1>
                        <div>

                            <img src={group} alt="" className="me-4 mt-5 img-fluid"  width={300} />

                            <img src={grouptwo} alt="" className="mt-5 img-fluid"  width={300} />

                        </div>
                    </div>

                </div>

            </div>

        </div>

    )
}
export default Three;
