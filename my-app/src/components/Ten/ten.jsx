import line from '../../assets/images/line.svg';
import './ten.css'

const Ten = () => {
    return (

        <div className='container con-color'>

            <div className='row py-5'>

                <div className='col-md-6'>
                    <div className=' ms-5'> 

                    <h2 className='ms-5 f' >Subscribe to Our Newsletter For <br /> Weekly Article Update.</h2>
                    </div>
                    <div className='ms-5'>

                    <p className='ms-5 ff'>Passages of lorem ipsum available, but the majority have suffered <br /> alteration, by injected words.</p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <img src={line} alt="" />
                    <button className='color-btn'>Get Started</button>
                </div>
            </div>
        </div>




    )
}

export default Ten;