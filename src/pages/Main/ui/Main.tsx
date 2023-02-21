import clsx from 'clsx';
import { Layout } from 'widgets/Layout';
import {
    Autoplay,
    Controller,
    FreeMode,
    Mousewheel,
    Navigation,
    Pagination,
    Parallax,
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
import { MainSlideBlock } from 'widgets/MainSlideBlock';
import { Subtitle } from 'shared/ui/Subtitle';
import { ThreeColumns } from 'widgets/ThreeColumns';
import { TitleWithTextBlock } from 'widgets/TitleWithTextBlock';
import { mobile } from 'shared/libs';

export interface MainProps {
    className?: string;
}

export const Main = (props: MainProps) => {
    const { className } = props;
    const [allowVerticalNext, setAllowVerticalNext] = useState(true);

    const swiperRef = useRef<SwiperRef>();
    const isMobile = mobile();

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
                <SwiperSlide>
                    <PreviewBlock altImg="Цифра 33" imgSrc={YearOldIcon} />
                    <span className="parallax-bg parallax-text">
                        33&nbsp;года&nbsp;33&nbsp;года
                    </span>{' '}
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        spaceBetween={50}
                        pagination={{
                            clickable: true,
                        }}
                        mousewheel={{
                            releaseOnEdges: true,
                        }}
                        modules={[Mousewheel, Pagination, Parallax, Autoplay]}
                        className="horizontal-slider"
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
                        <span
                            className="parallax-bg parallax-text"
                            data-swiper-parallax="-20%"
                        >
                            33&nbsp;года&nbsp;33&nbsp;года
                        </span>
                        <SwiperSlide>
                            <MainSlideBlock
                                data-class="main"
                                title={slidesData[0][0].slideTitle}
                                // onMouseEnter={handleMouseEnter}
                                // onMouseLeave={handleMouseLeave}
                            >
                                <Subtitle className="preview-text" size="l">
                                    {slidesData[0][0].leftText.text}
                                </Subtitle>
                            </MainSlideBlock>
                        </SwiperSlide>
                        {slidesData[0].map((item, idx) => {
                            return idx !== 0 ? (
                                <SwiperSlide key={item.rightText.title}>
                                    <MainSlideBlock
                                        data-class="main"
                                        title={item.slideTitle}
                                        // onMouseEnter={handleMouseEnter}
                                        // onMouseLeave={handleMouseLeave}
                                    >
                                        <ThreeColumns
                                            img={
                                                <img
                                                    src={item.imgSrc}
                                                    alt={item.rightText.title}
                                                    className="imageSlide"
                                                />
                                            }
                                        >
                                            <TitleWithTextBlock
                                                align={
                                                    !isMobile
                                                        ? 'right'
                                                        : 'center'
                                                }
                                                title={item.leftText.title}
                                                text={item.leftText.text}
                                            />
                                            <TitleWithTextBlock
                                                align={
                                                    !isMobile
                                                        ? 'left'
                                                        : 'center'
                                                }
                                                title={item.rightText.title}
                                                text={item.rightText.text}
                                            />
                                        </ThreeColumns>
                                    </MainSlideBlock>
                                </SwiperSlide>
                            ) : null;
                        })}
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        spaceBetween={50}
                        pagination={{
                            clickable: true,
                        }}
                        mousewheel={{
                            releaseOnEdges: true,
                        }}
                        modules={[Mousewheel, Pagination, Parallax, Autoplay]}
                        className="horizontal-slider"
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
                        <span
                            className="parallax-bg parallax-text"
                            data-swiper-parallax="-20%"
                        >
                            33&nbsp;года&nbsp;33&nbsp;года
                        </span>
                        {slidesData[1].map((item, idx) => {
                            return (
                                <SwiperSlide key={item.rightText.title}>
                                    <MainSlideBlock
                                        data-class="main"
                                        title={item.slideTitle}
                                        // onMouseEnter={handleMouseEnter}
                                        // onMouseLeave={handleMouseLeave}
                                    >
                                        <ThreeColumns
                                            img={
                                                <img
                                                    src={item.imgSrc}
                                                    alt={item.rightText.title}
                                                    className="imageSlide"
                                                />
                                            }
                                        >
                                            <TitleWithTextBlock
                                                align={
                                                    !isMobile
                                                        ? 'right'
                                                        : 'center'
                                                }
                                                title={item.leftText.title}
                                                text={item.leftText.text}
                                            />
                                            <TitleWithTextBlock
                                                align={
                                                    !isMobile
                                                        ? 'left'
                                                        : 'center'
                                                }
                                                title={item.rightText.title}
                                                text={item.rightText.text}
                                            />
                                        </ThreeColumns>
                                    </MainSlideBlock>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        spaceBetween={50}
                        pagination={{
                            clickable: true,
                        }}
                        mousewheel={{
                            releaseOnEdges: true,
                        }}
                        modules={[Mousewheel, Pagination, Parallax, Autoplay]}
                        className="horizontal-slider"
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
                        <span
                            className="parallax-bg parallax-text"
                            data-swiper-parallax="-20%"
                        >
                            33&nbsp;года&nbsp;33&nbsp;года
                        </span>
                        {slidesData[2].map((item, idx) => {
                            return (
                                <SwiperSlide key={item.rightText.title}>
                                    <MainSlideBlock
                                        data-class="main"
                                        title={item.slideTitle}
                                        // onMouseEnter={handleMouseEnter}
                                        // onMouseLeave={handleMouseLeave}
                                    >
                                        <ThreeColumns
                                            img={
                                                <img
                                                    src={item.imgSrc}
                                                    alt={item.rightText.title}
                                                    className="imageSlide"
                                                />
                                            }
                                        >
                                            <TitleWithTextBlock
                                                align={
                                                    !isMobile
                                                        ? 'right'
                                                        : 'center'
                                                }
                                                title={item.leftText.title}
                                                text={item.leftText.text}
                                            />
                                            <TitleWithTextBlock
                                                align={
                                                    !isMobile
                                                        ? 'left'
                                                        : 'center'
                                                }
                                                title={item.rightText.title}
                                                text={item.rightText.text}
                                            />
                                        </ThreeColumns>
                                    </MainSlideBlock>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <FinalSlide />
                </SwiperSlide>
            </Swiper>
        </Layout>
    );
};
