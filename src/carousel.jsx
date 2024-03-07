//Import a specific bootstrap component rather than the entire library
import Carousel from 'react-bootstrap/Carousel';

export default function Carousel_Component({carousel_assets}) {
  //Component uses map to assemble a carousel based on the images of a plane object in the fighter_list array
  return (
    <Carousel id="below_page">
        {carousel_assets.images.map((image, imageIndex) => (
          <Carousel.Item key={imageIndex}>
            <img id="carousel_img" src={image} alt="" />
          </Carousel.Item>
        ))}
    </Carousel>
  );
}