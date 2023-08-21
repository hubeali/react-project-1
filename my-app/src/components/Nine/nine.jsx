import h from "../../assets/images/h.svg";
import i from "../../assets/images/i.svg";
import j from "../../assets/images/j.svg";
import redd from "../../assets/images/redd.svg";
import "./nine.css"


const Nine = () => {
    return (

<div>

        <div className="container mt-5 mb-5">
            <div className=" row ">
                <div className="col-md-4">

<img src={h} className="p-3" width={370} alt="" />
<h5>Robert C. Simmons</h5>
< p className="mirani">Business Consultant</ p>
                </div>
                <div className="col-md-4">


                <img src={i} className="p-3" width={370} alt="" />
<h5>Christopher L. Wagner</h5>
< p className="mirani">Senior Manager</ p>

                </div>
                <div className="col-md-4">


                <img src={j} className="p-3" width={370} alt="" />
<h5>Lawrence C. Dickerson</h5>
< p className="mirani">Financial Consultant</ p>

                </div>
            </div>
        </div>
<img src={redd} className="img-dot" alt="" />
        </div>
    )
}
export default Nine;