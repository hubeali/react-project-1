import './seven.css'
import background from '../../assets/images/background.svg';

const Seven =() =>{
   return (
    <div className='position-relative'>
        <img src={background}  className='img-fluid'  alt="" />

<div className=" container">
<div className="row">
    <div className="col-md-6">
<h1 className='get position-absolute top-50 text-white get'>Get Free Consultations! We’re <br />Ready to Work Together</h1>
    </div>
    <div className="col-md-6">
<button className='get-btn position-absolute top-50 '>Get Free Consultations</button>
</div>
</div>
    </div>

</div>
    )
}
export default Seven;