import "./Carousel.css"
import Slider from "react-slick"

function Carousel(props) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 700,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };

    return (
        <div className="carousel">
            <Slider {...settings}>
                { props.children }
            </Slider>
        </div>
    )
}

export default Carousel