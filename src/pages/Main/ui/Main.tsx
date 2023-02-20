import clsx from 'clsx';
import { Layout } from 'widgets/Layout';
import {
    Controller,
    FreeMode,
    Mousewheel,
    Navigation,
    Pagination,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PreviewBlock } from 'widgets/PreviewBlock';
import YearOldIcon from 'shared/assets/img/year-old-icon.png';
import './Main.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import { useRef, useState } from 'react';
import { slidesData } from 'shared/config/slidesData';
import { FinalSlide } from 'widgets/FinalSlide';
import { HorizontalSlider } from 'widgets/Slider';
import { SwiperRef } from 'swiper/react/swiper-react';

export interface MainProps {
    className?: string;
}

export const Main = (props: MainProps) => {
    const { className } = props;
    const [lastVerticalSlide, setLastVerticalSlide] = useState<boolean>(false);
    const [allowVerticalNext, setAllowVerticalNext] = useState(true);
    const [allowVerticalPrev, setAllowVerticalPrev] = useState(true);

    const checkLastSlide = (swiper: any, callback?: any) => {
        const { activeIndex } = swiper;
        const slidesLength = swiper.slides.length - 1;
        if (activeIndex === slidesLength) {
            setAllowVerticalPrev(false);
        } else if (activeIndex === 1) {
            setAllowVerticalNext(false);
        } else {
            setAllowVerticalNext(true);
            setAllowVerticalPrev(true);
        }
    };

    const handleOnVerticalScroll = (swiper: any) => {
        checkLastSlide(swiper, setLastVerticalSlide);
    };

    const swiperRef = useRef<SwiperRef>();

    return (
        <Layout>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = { swiper };
                }}
                className="mySwiper2 swiper-v"
                direction="vertical"
                spaceBetween={50}
                pagination={{
                    clickable: true,
                }}
                mousewheel
                freeMode={{
                    enabled: false,
                    sticky: true,
                }}
                modules={[Pagination, Mousewheel, FreeMode]}
                onSlideChange={(swiper) => {
                    console.log(swiper);
                    if (
                        swiper.slides.length !== swiper.activeIndex + 1 ||
                        swiper.activeIndex === 1
                    ) {
                        setTimeout(() => {
                            console.log('vert dis');
                            swiperRef.current?.swiper.mousewheel.disable();
                        }, 100);
                    }
                }}
                onToEdge={(swiper) => {
                    console.log('hor en');
                    setTimeout(() => {
                        swiperRef.current?.swiper.mousewheel.enable();
                    }, 100);
                }}
            >
                <SwiperSlide>Vertival Slide 1</SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        onToEdge={(swiper) => {
                            console.log('hor en');
                            setTimeout(() => {
                                swiperRef.current?.swiper.mousewheel.enable();
                            }, 100);
                        }}
                        className="mySwiper swiper-h"
                        spaceBetween={50}
                        pagination={{
                            clickable: true,
                        }}
                        mousewheel={{
                            releaseOnEdges: true,
                        }}
                        modules={[Pagination, Mousewheel]}
                    >
                        <SwiperSlide>Horizontal Slide 1</SwiperSlide>
                        <SwiperSlide style={{ overflow: 'auto' }}>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>
                            <h1>Horizontal Slide 2</h1>d
                        </SwiperSlide>
                        <SwiperSlide>Horizontal Slide 3</SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        className="mySwiper swiper-h"
                        spaceBetween={50}
                        pagination={{
                            clickable: true,
                        }}
                        mousewheel={{
                            releaseOnEdges: true,
                            // forceToAxis: true,
                        }}
                        modules={[Pagination, Mousewheel]}
                        onToEdge={(swiper) => {
                            console.log('hor en');
                            setTimeout(() => {
                                swiperRef.current?.swiper.mousewheel.enable();
                            }, 100);
                        }}
                    >
                        <SwiperSlide>Horizontal Slide 1</SwiperSlide>
                        <SwiperSlide>Horizontal Slide 2</SwiperSlide>
                        <SwiperSlide>Horizontal Slide 3</SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>Horizontal Slide end</SwiperSlide>
            </Swiper>
            {/*<Swiper*/}
            {/*    direction="vertical"*/}
            {/*    navigation={*/}
            {/*        !lastVerticalSlide*/}
            {/*            ? {*/}
            {/*                  enabled: true,*/}
            {/*              }*/}
            {/*            : false*/}
            {/*    }*/}
            {/*    // mousewheel*/}
            {/*    // allowSlideNext={allowVerticalNext}*/}
            {/*    // allowSlidePrev={allowVerticalPrev}*/}
            {/*    allowTouchMove={false}*/}
            {/*    modules={[Navigation]}*/}
            {/*    className="main-swiper-vertical"*/}
            {/*    onSlideChange={handleOnVerticalScroll}*/}
            {/*>*/}
            {/*    <SwiperSlide className="slide">*/}
            {/*        <PreviewBlock altImg="Цифра 33" imgSrc={YearOldIcon} />*/}
            {/*        <span className="parallax-bg parallax-text">*/}
            {/*            33&nbsp;года&nbsp;33&nbsp;года*/}
            {/*        </span>*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide>*/}
            {/*        <HorizontalSlider data={slidesData[0]} />*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide>*/}
            {/*        <HorizontalSlider data={slidesData[1]} />*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide>*/}
            {/*        <HorizontalSlider data={slidesData[2]} />*/}
            {/*    </SwiperSlide>*/}
            {/*    <SwiperSlide>*/}
            {/*        <FinalSlide />*/}
            {/*    </SwiperSlide>*/}
            {/*</Swiper>*/}
        </Layout>
    );
};
