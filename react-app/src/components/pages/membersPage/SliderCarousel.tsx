import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 

}

const images = [
  "assets/img/companies/amazon.png",
  "assets/img/companies/becker.png",
  "assets/img/companies/google.png",
  "assets/img/companies/apple.png",
  "assets/img/companies/janestreet.png",
  "assets/img/companies/jnj.png",
  "assets/img/companies/jpmorgan.png",
  "assets/img/companies/justicetext.png",
  "assets/img/companies/blackstone.png",
  "assets/img/companies/microsoft.png",
  "assets/img/companies/nextdoor.png",
  "assets/img/companies/pwc.png",
  "assets/img/companies/stripe.png",
  "assets/img/companies/codeyourdreams.png",
  "assets/img/companies/compileher.png",
  "assets/img/companies/creditsuisse.png",
  "assets/img/companies/dell.png",
  "assets/img/companies/doordash.png",
  "assets/img/companies/meta.png",
  "assets/img/companies/weallcode.png",
  "assets/img/companies/tesla.png",
  "assets/img/companies/verizon.png"
];

const SliderCarousel: React.FC = () => {
  return (
    <div>
      <Slider {...sliderSettings}>
        {images.map((src, index) => (
            <div key={index} >
            <img className="img-fluid"  style={{paddingRight: "20px"}} src={src} alt={`Slide ${index + 1}`} />
            </div>
         
        ))}
      </Slider>
    </div>
  );
};

export default SliderCarousel;
