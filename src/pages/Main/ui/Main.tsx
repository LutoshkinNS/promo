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
    const [allowVerticalNext, setAllowVerticalNext] = useState(true);

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
                mousewheel={{
                    thresholdTime: 300,
                }}
                freeMode={{
                    enabled: false,
                    sticky: true,
                }}
                modules={[Pagination, Mousewheel, FreeMode]}
                // onScroll={(swiper, event) => {
                //     console.log('vert', swiper, event);
                //     const isMatchNestedSwiper =
                //         swiper.slides[swiper.activeIndex].children[0] &&
                //         swiper.slides[swiper.activeIndex].children[0].matches(
                //             '.swiper'
                //         );
                //     if (isMatchNestedSwiper) {
                //         setTimeout(() => {
                //             console.log('vert dis');
                //             swiperRef.current?.swiper.mousewheel.disable();
                //         }, 0);
                //     }
                // }}
                onToEdge={() => {
                    console.log('vert Edge en');
                    setTimeout(() => {
                        swiperRef.current?.swiper.mousewheel.enable();
                    }, 0);
                }}
            >
                <SwiperSlide>Vertival Slide 1</SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        onToEdge={(swiper) => {
                            console.log('hor Edge en');
                            setTimeout(() => {
                                swiperRef.current?.swiper.mousewheel.enable();
                            }, 0);
                        }}
                        onScroll={(swiper, event: any) => {
                            console.log('hor', swiper, event);
                            const isFirstSlide =
                                swiper.slides.length === swiper.activeIndex + 1;
                            const isLastSlide = swiper.activeIndex === 0;
                            const nextScroll = event.wheelDelta < 0;
                            const prevScroll = event.wheelDelta > 0;
                            if (prevScroll && !isFirstSlide) {
                                console.log('hor onScroll dis');
                                swiperRef.current?.swiper.mousewheel.disable();
                            }
                            if (nextScroll && !isLastSlide) {
                                console.log('hor onScroll dis');
                                swiperRef.current?.swiper.mousewheel.disable();
                            }
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
                        }}
                        modules={[Pagination, Mousewheel]}
                        onToEdge={(swiper) => {
                            console.log('hor Edge en');
                            setTimeout(() => {
                                swiperRef.current?.swiper.mousewheel.enable();
                            }, 0);
                        }}
                        onScroll={(swiper, event: any) => {
                            console.log('hor', swiper, event);
                            const isFirstSlide =
                                swiper.slides.length === swiper.activeIndex + 1;
                            const isLastSlide = swiper.activeIndex === 0;
                            const nextScroll = event.wheelDelta < 0;
                            const prevScroll = event.wheelDelta > 0;
                            if (prevScroll && !isFirstSlide) {
                                console.log('hor onScroll dis');
                                swiperRef.current?.swiper.mousewheel.disable();
                            }
                            if (nextScroll && !isLastSlide) {
                                console.log('hor onScroll dis');
                                swiperRef.current?.swiper.mousewheel.disable();
                            }
                        }}
                    >
                        <SwiperSlide>Horizontal Slide 1</SwiperSlide>
                        <SwiperSlide>Horizontal Slide 2</SwiperSlide>
                        <SwiperSlide>Horizontal Slide 3</SwiperSlide>
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>Horizontal Slide end</SwiperSlide>
            </Swiper>
            {/* <Swiper */}
            {/*    direction="vertical" */}
            {/*    navigation={ */}
            {/*        !lastVerticalSlide */}
            {/*            ? { */}
            {/*                  enabled: true, */}
            {/*              } */}
            {/*            : false */}
            {/*    } */}
            {/*    allowTouchMove={false} */}
            {/*    modules={[Navigation]} */}
            {/*    className="main-swiper-vertical" */}
            {/*    onSlideChange={handleOnVerticalScroll} */}
            {/* > */}
            {/*    <SwiperSlide className="slide"> */}
            {/*        <PreviewBlock altImg="Цифра 33" imgSrc={YearOldIcon} /> */}
            {/*        <span className="parallax-bg parallax-text"> */}
            {/*            33&nbsp;года&nbsp;33&nbsp;года */}
            {/*        </span> */}
            {/*    </SwiperSlide> */}
            {/*    <SwiperSlide> */}
            {/*        <HorizontalSlider data={slidesData[0]} /> */}
            {/*    </SwiperSlide> */}
            {/*    <SwiperSlide> */}
            {/*        <HorizontalSlider data={slidesData[1]} /> */}
            {/*    </SwiperSlide> */}
            {/*    <SwiperSlide> */}
            {/*        <HorizontalSlider data={slidesData[2]} /> */}
            {/*    </SwiperSlide> */}
            {/*    <SwiperSlide> */}
            {/*        <FinalSlide /> */}
            {/*    </SwiperSlide> */}
            {/* </Swiper> */}
        </Layout>
    );
};
