import "./header.css";
import logo from  "../../assets/images/logo.svg";

const Header =() => {

   return (
   
<nav class="container navbar navbar-expand-lg p-2  text-dark bg-opacity-10">
    <div class="container-fluid ">
  
   <h1><img src={logo} alt="" /></h1>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">

        <ul class="navbar-nav mb-2 mb-lg-0 mx-auto ">
        <li class="nav-item home">
          Home
          </li>
          <li class="nav-item">
         About
          </li>
          <li class="nav-item">
            Service
          </li>
          <li class="nav-item">
       Resource
          </li>
          <li class="nav-item">
       Projects
          </li>
        </ul>
        <button className="btn-cl py-2 px-3 ">Contact us today</button>
      </div>
</div>
     
  </nav>

    )
}
export default Header;