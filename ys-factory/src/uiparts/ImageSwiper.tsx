import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Navigation, Pagination } from 'swiper/modules';

import echonorLogo from "../images/echonor/echonor_logo.png";
import home from "../images/echonor/home.png"
import menu from "../images/echonor/menu.png"
import alert from "../images/echonor/alert.png"
import bookmarks from "../images/echonor/bookmarks.png"
import post from "../images/echonor/post.png"

import { Box, Container } from '@mui/material';
import { ReactNode } from 'react';

const ImageSwiper = () => {
    const imageSize = "30%";
    const imageStyle = {
        width: imageSize,
        height: imageSize,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'};

    const images: string[] = [
        echonorLogo,
        home,
        post,
        menu,
        alert,
        bookmarks,
    ]

    return (
        <Box sx={{
            width: '100%', 
            height: 'auto', 
            maxWidth: '100%', 
            display: 'block', 
            marginLeft: 'auto', 
            marginRight: 'auto' 
          }}>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper"
                navigation={true}
            >
                <Container sx={{display: 'flex', justifyContent: "center", textAlign: "center"}}>
                    {images.map((image) => (
                        <SwiperSlide>
                            <img src={image} style={imageStyle} />
                        </SwiperSlide>
                    ))};
                </Container>
                
            </Swiper>
        </Box>
    )
}

export default ImageSwiper;
