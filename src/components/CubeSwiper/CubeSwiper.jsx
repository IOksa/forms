import { register } from 'swiper/element/bundle';
import css from "./CubeSwiper.module.css";

register();

const CubeSwiper = ({images}) => {
    console.log("images=", images)
  return (

    <div className={css.swiperWrapper}>
{      <swiper-container
            class="mySwiper"
            pagination="true"
            effect="cube"
            grab-cursor="true"
            cube-effect-shadow="true"
            cube-effect-slide-shadows="true"
            cube-effect-shadow-offset="20"
            cube-effect-shadow-scale="0.94"
            // autoplay="true"
          
        >
            {images?.length>0 && images.map((image, index) => (
                <swiper-slide key={index}>
                    <img 
                    src={image.src}  
                    alt={image.alt}          
                    height={300}
                    className={css.image}
                    />
                </swiper-slide>
            ))}
            
         </swiper-container>}
      </div>

  );
};

export default CubeSwiper;