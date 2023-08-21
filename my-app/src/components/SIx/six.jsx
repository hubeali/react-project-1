import a from '../../assets/images/a.PNG';
import b from '../../assets/images/b.PNG';
import c from '../../assets/images/c.PNG';
import d from '../../assets/images/d.PNG';

const Six = () => {
    return (

        
<div className="container-fluid">

    <div className="row mb-5">
      
        <div className="col-md-3">
         <img src={a} width={300} className='p-1' height={385} alt="" />   
        </div>

        <div className="col-md-3">
        <img src={b} width={300} className='p-1' height={385} alt="" /> 
            </div>

            <div className="col-md-3">
            <img src={c} className='p-1' width={305} alt="" /> 
            </div>

            <div className="col-md-3">
            <img src={d} className='p-1' width={310} height={385} alt="" /> 
            </div>
    </div>
</div>



    )
}

export default Six;