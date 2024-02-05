import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import css from "./CoverflowSwiper.module.css";

register();

const CoverflowSwiper = ({images}) => {
    const swiperElRef3 = useRef(null);

    useEffect(() => {
      const swiperContainer = swiperElRef3.current;
      // listen for Swiper events using addEventListener
      swiperContainer.addEventListener('swiperprogress1', (e) => {
        const [swiper1, progress1] = e.detail;
        console.log(progress1);
      });
  
      swiperContainer.addEventListener('swiperslidechange1', (e) => {
        console.log('slide1 changed');
      });
  
     // swiper parameters
     const swiperParams = {
       
      pagination: {
        clickable: true,
      },
      navigation: true,
      scrollbar: true,
      loop:true,
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect:{
        rotate: 50,
        stretch:0,
        depth:100,
        modifier:1,
        slideShadows: true,
        },

      // autoplay: true,

    };
  
    // now we need to assign all parameters to Swiper element
    Object.assign(swiperContainer, swiperParams);
  
    // and now initialize it
    swiperContainer.initialize();
  
  
    }, []);

  return (
    <div className={css.swiperWrapper}>
{      <swiper-container
            ref={swiperElRef3}
            init="false"
            class="mySwiper"
            // pagination="true"
            // effect="coverflow"
            // grab-cursor="true"
            // centered-slides="true"
            // slides-per-view="auto"
            // coverflow-effect-rotate="50"
            // coverflow-effect-stretch="0"
            // coverflow-effect-depth="100"
            //coverflow-effect-modifier="1"
            //coverflow-effect-slide-shadows="true">
        >
            {images?.length>0 && images.map((image, index) => (
                <swiper-slide key={index}>
                    <img 
                    src={image.src}  
                    alt={image.alt}          
                    height={500}
                    className={css.image}
                    />
                </swiper-slide>
            ))}
            
         </swiper-container>}
      </div>

  );
};

export default CoverflowSwiper;