import { Layout } from 'widgets/Layout';
import { Autoplay, Mousewheel, Navigation, Pagination, Parallax } from 'swiper';
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
import { SwiperRef } from 'swiper/react/swiper-react';
import { MainSlideBlock } from 'widgets/MainSlideBlock';
import { Subtitle } from 'shared/ui/Subtitle';
import { mobile } from 'shared/libs';
import { PaginationOptions } from 'swiper/types';
import { Container } from 'shared/ui/Container/Container';
import { NextButton } from 'shared/ui/NextButton';
import { HorizontalSlide } from 'widgets/HorizontalSlide/HorizontalSlide';

export const Main = () => {
    const [slideScroll, setSlideScroll] = useState<number>(
        document.documentElement.clientHeight / 2
    );

    const verticalSwiperRef = useRef<SwiperRef>();
    const isMobile = mobile();

    // TODO вынести в отдельный компонент
    const mobilePagination: PaginationOptions = {
        clickable: true,
        renderBullet(index, classN) {
            const date = slidesData[0][index]
                ? slidesData[0][index].slideTitle
                : '';
            return `<span class="${classN} mobile-pagination">${date}</span>`;
        },
    };

    const onNextSlide = () => {
        verticalSwiperRef.current?.swiper.slideNext();
    };

    // FIXME any type
    const handleSlideScroll = (event: any) => {
        const { currentTarget } = event;
        const scroll = currentTarget.scrollTop;
        const heightSlideEl = currentTarget.getBoundingClientRect().height;
        setSlideScroll((heightSlideEl - scroll) / 2);
    };

    const onEnableVerticalSlideChange = () => {
        setTimeout(() => {
            verticalSwiperRef.current?.swiper.mousewheel.enable();
        }, 0);
    };

    const onDisableVerticalSlideChange = () => {
        verticalSwiperRef.current?.swiper.mousewheel.disable();
    };

    // FIXME any type
    const onHorizontalScroll = (swiper: any, event: any) => {
        const isFirstSlide = swiper.slides.length === swiper.activeIndex + 1;
        const isLastSlide = swiper.activeIndex === 0;
        const nextScroll = event.wheelDelta < 0;
        const prevScroll = event.wheelDelta > 0;
        if (prevScroll && !isFirstSlide) {
            onDisableVerticalSlideChange();
        }
        if (nextScroll && !isLastSlide) {
            onDisableVerticalSlideChange();
        }
    };

    return (
        <Layout>
            <Swiper
                onSwiper={(swiper) => {
                    verticalSwiperRef.current = { swiper };
                }}
                direction="vertical"
                spaceBetween={50}
                className="vertical-slider"
                mousewheel={!isMobile ? { thresholdTime: 300 } : false}
                allowTouchMove={false}
                navigation={{
                    enabled: true,
                }}
                modules={[Pagination, Mousewheel, Navigation]}
                onToEdge={onEnableVerticalSlideChange}
            >
                <SwiperSlide>
                    <div className="preview-block">
                        <PreviewBlock altImg="Цифра 33" imgSrc={YearOldIcon} />
                        <NextButton onClick={onNextSlide} />
                    </div>
                    <span className="parallax-bg parallax-text">
                        33&nbsp;года&nbsp;33&nbsp;года
                    </span>
                </SwiperSlide>
                <SwiperSlide>
                    {/* TODO попробовать вынести горизонтальный слайдер в отдельный компонент */}
                    <Swiper
                        spaceBetween={50}
                        pagination={
                            !isMobile ? { clickable: true } : mobilePagination
                        }
                        mousewheel={
                            !isMobile ? { releaseOnEdges: true } : false
                        }
                        parallax
                        modules={[Mousewheel, Pagination, Parallax, Autoplay]}
                        className="nested-horizontal-slider"
                        onToEdge={onEnableVerticalSlideChange}
                        onScroll={onHorizontalScroll}
                    >
                        <span
                            className="parallax-bg parallax-text"
                            data-swiper-parallax="-20%"
                        >
                            33&nbsp;года&nbsp;33&nbsp;года
                        </span>
                        <SwiperSlide>
                            <Container>
                                <MainSlideBlock
                                    title={slidesData[0][0].slideTitle}
                                >
                                    <Subtitle className="preview-text" size="l">
                                        {slidesData[0][0].leftText.text}
                                    </Subtitle>
                                    {isMobile ? (
                                        <NextButton onClick={onNextSlide} />
                                    ) : null}
                                </MainSlideBlock>
                            </Container>
                        </SwiperSlide>
                        {slidesData[0].map((item, idx) => {
                            return idx !== 0 ? (
                                <SwiperSlide
                                    onScroll={handleSlideScroll}
                                    key={item.rightText.title}
                                >
                                    <HorizontalSlide
                                        slideScroll={slideScroll}
                                        handleNextSlide={onNextSlide}
                                        slideData={item}
                                    />
                                </SwiperSlide>
                            ) : null;
                        })}
                        {!isMobile ? (
                            <NextButton onClick={onNextSlide} />
                        ) : null}
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    {/* TODO попробовать вынести горизонтальный слайдер в отдельный компонент */}
                    <Swiper
                        spaceBetween={50}
                        pagination={
                            !isMobile ? { clickable: true } : mobilePagination
                        }
                        mousewheel={
                            !isMobile ? { releaseOnEdges: true } : false
                        }
                        parallax
                        modules={[Mousewheel, Pagination, Parallax, Autoplay]}
                        className="nested-horizontal-slider"
                        onToEdge={onEnableVerticalSlideChange}
                        onScroll={onHorizontalScroll}
                    >
                        <span
                            className="parallax-bg parallax-text"
                            data-swiper-parallax="-20%"
                        >
                            33&nbsp;года&nbsp;33&nbsp;года
                        </span>
                        {slidesData[1].map((item) => {
                            return (
                                <SwiperSlide
                                    key={item.rightText.title}
                                    onScroll={handleSlideScroll}
                                >
                                    <HorizontalSlide
                                        slideScroll={slideScroll}
                                        handleNextSlide={onNextSlide}
                                        slideData={item}
                                    />
                                </SwiperSlide>
                            );
                        })}
                        {!isMobile ? (
                            <NextButton onClick={onNextSlide} />
                        ) : null}
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    {/* TODO попробовать вынести горизонтальный слайдер в отдельный компонент */}
                    <Swiper
                        spaceBetween={50}
                        pagination={
                            !isMobile ? { clickable: true } : mobilePagination
                        }
                        mousewheel={
                            !isMobile ? { releaseOnEdges: true } : false
                        }
                        parallax
                        modules={[Mousewheel, Pagination, Parallax, Autoplay]}
                        className="nested-horizontal-slider"
                        onToEdge={onEnableVerticalSlideChange}
                        onScroll={onHorizontalScroll}
                    >
                        <span
                            className="parallax-bg parallax-text"
                            data-swiper-parallax="-20%"
                        >
                            33&nbsp;года&nbsp;33&nbsp;года
                        </span>
                        {slidesData[2].map((item) => {
                            return (
                                <SwiperSlide
                                    key={item.rightText.title}
                                    onScroll={handleSlideScroll}
                                >
                                    <HorizontalSlide
                                        slideScroll={slideScroll}
                                        handleNextSlide={onNextSlide}
                                        slideData={item}
                                    />
                                </SwiperSlide>
                            );
                        })}
                        {!isMobile ? (
                            <NextButton onClick={onNextSlide} />
                        ) : null}
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <FinalSlide />
                </SwiperSlide>
            </Swiper>
        </Layout>
    );
};
