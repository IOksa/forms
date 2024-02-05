'use client'
import { useRef, useEffect } from 'react';
import { register } from 'swiper/element/bundle';
import css from "./PhotoSwiper.module.css";


register();

const PhotoSwiper = ({images}) => {
  const swiperElRef1 = useRef(null);

  useEffect(() => {
    const swiperContainer = swiperElRef1.current;
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
    slidesPerView: 2,
    spaceBetween: 20,
    breakpoints: {
      1:{
        slidesPerView: 1,
        spaceBetween: 10
      
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 20
      },
 
    },
    pagination: {
      clickable: true,
    },
    navigation: true,
    scrollbar: true,
    loop:true,
    // autoplay: true
  };

  // now we need to assign all parameters to Swiper element
  Object.assign(swiperContainer, swiperParams);

  // and now initialize it
  swiperContainer.initialize();


  }, []);

   

  return (
    <swiper-container
      ref={swiperElRef1}
      init="false"
    >
        {images?.length>0 && images.map((image, index) => (
          <swiper-slide 
          key={index} 
          // className={css.swiperSlide}
          >
            <img 
              src={image.src}  
              alt={image.alt}          
              height={500}
              className={css.image}/>
          </swiper-slide>
          ))}
            
      </swiper-container>
      
  );
};

export default PhotoSwiper;