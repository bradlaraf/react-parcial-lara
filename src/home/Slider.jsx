import './Slider.css'
import slider1 from './../assets/images/slider1.jpg'
import slider2 from './../assets/images/slider2.jpg'
import slider3 from './../assets/images/slider3.jpg'
import slider4 from './../assets/images/slider4.jpg'
function Slider() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slider1} className="d-block w-100" alt="img"/>
            </div>
            <div className="carousel-item">
              <img src={slider2} className="d-block w-100" alt="img"/>
            </div>
            <div className="carousel-item">
              <img src={slider3} className="d-block w-100" alt="img"/>
            </div>
            <div className="carousel-item">
              <img src={slider4} className="d-block w-100" alt="img"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
    </div>
  )
}

export default Slider