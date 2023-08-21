import "./four.css";
import user from "../../assets/images/user.svg";
import userbox from "../../assets/images/userbox.svg";
const Four = () => {
    return (
        <div className="container  ">
            <div className="row mt-5">

                <div className="col-md-1 ">

                </div>
                <div className="col-md-4 mt-">
                    <div className="">
                        <div>

                            <div className=" user">

                                <img src={user} width={300} alt="" />
                            </div>
                            <div className=" userbox ">
                                <img src={userbox} className="box" width={140} alt="" />
                            </div>
                        </div>
                    </div>


                </div>
                <div className="col-md-7 mt-5">
                    <span className="parag ">Who We Are</span>
                    <h1 className="para2">Have A Project In Mind? Let’s Get To Work.</h1>
                    <p className="p1">Sed ut perspiciatis unde omnis iste natus sit voluptatem <br /> accusantium doloremque  laudantium totam rem apereaque <br />abillo inventore veritatis quasi architecto beatae</p>
                    <p className="p2">Business Planning, Strategy</p>
                    <p className="p2">2. Financial Projections And Analysis</p>
                    <p className="p2">3.International Business Opportunities</p>
                </div>
            </div>
        </div >

    )
}
export default Four;