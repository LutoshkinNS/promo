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
import { ThreeColumns } from 'widgets/ThreeColumns';
import { TitleWithTextBlock } from 'widgets/TitleWithTextBlock';
import { mobile } from 'shared/libs';
import { PaginationOptions } from 'swiper/types';
import { Container } from 'shared/ui/Container/Container';
import { NextButton } from 'shared/ui/NextButton';

export const Main = () => {
    const [slideScroll, setSlideScroll] = useState<number>(
        document.documentElement.clientHeight / 2
    );

    const swiperRef = useRef<SwiperRef>();
    const isMobile = mobile();

    const mobilePagination: PaginationOptions = {
        clickable: true,
        renderBullet(index, classN) {
            const date = slidesData[0][index]
                ? slidesData[0][index].slideTitle
                : '';
            return `<span class="${classN} mobile-pagination">${date}</span>`;
        },
    };

    const nextSlide = () => {
        swiperRef.current?.swiper.slideNext();
    };

    const handleSlideScroll = (event: any) => {
        const { currentTarget } = event;
        const scroll = currentTarget.scrollTop;
        const heightSlideEl = currentTarget.getBoundingClientRect().height;
        setSlideScroll((heightSlideEl - scroll) / 2);
    };

    return (
        <Layout>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = { swiper };
                }}
                direction="vertical"
                spaceBetween={50}
                className="vertical-slider"
                // pagination={{
                //     clickable: true,
                // }}
                mousewheel={
                    !isMobile
                        ? {
                              thresholdTime: 300,
                          }
                        : false
                }
                allowTouchMove={false}
                // freeMode={{
                //     enabled: false,
                //     sticky: true,
                // }}
                navigation={{
                    enabled: true,
                }}
                modules={[Pagination, Mousewheel, Navigation]}
                onToEdge={() => {
                    setTimeout(() => {
                        swiperRef.current?.swiper.mousewheel.enable();
                    }, 0);
                }}
            >
                <SwiperSlide>
                    <div className="preview-block">
                        <PreviewBlock altImg="Цифра 33" imgSrc={YearOldIcon} />
                        <NextButton onClick={nextSlide} />
                    </div>
                    <span className="parallax-bg parallax-text">
                        33&nbsp;года&nbsp;33&nbsp;года
                    </span>{' '}
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        spaceBetween={50}
                        pagination={
                            !isMobile
                                ? {
                                      clickable: true,
                                  }
                                : mobilePagination
                        }
                        mousewheel={
                            !isMobile
                                ? {
                                      releaseOnEdges: true,
                                  }
                                : false
                        }
                        parallax
                        modules={[Mousewheel, Pagination, Parallax, Autoplay]}
                        className="nested-horizontal-slider"
                        onToEdge={(swiper) => {
                            setTimeout(() => {
                                swiperRef.current?.swiper.mousewheel.enable();
                            }, 0);
                        }}
                        // TODO в отдельный метод
                        onScroll={(swiper, event: any) => {
                            const isFirstSlide =
                                swiper.slides.length === swiper.activeIndex + 1;
                            const isLastSlide = swiper.activeIndex === 0;
                            const nextScroll = event.wheelDelta < 0;
                            const prevScroll = event.wheelDelta > 0;
                            if (prevScroll && !isFirstSlide) {
                                swiperRef.current?.swiper.mousewheel.disable();
                            }
                            if (nextScroll && !isLastSlide) {
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
                            <Container>
                                <MainSlideBlock
                                    title={slidesData[0][0].slideTitle}
                                    // onMouseEnter={handleMouseEnter}
                                    // onMouseLeave={handleMouseLeave}
                                >
                                    <Subtitle className="preview-text" size="l">
                                        {slidesData[0][0].leftText.text}
                                    </Subtitle>
                                    {isMobile ? (
                                        <NextButton onClick={nextSlide} />
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
                                    <Container>
                                        <MainSlideBlock
                                            title={item.slideTitle}
                                            // onMouseEnter={handleMouseEnter}
                                            // onMouseLeave={handleMouseLeave}
                                        >
                                            <ThreeColumns
                                                img={
                                                    <img
                                                        src={item.imgSrc}
                                                        alt={
                                                            item.rightText.title
                                                        }
                                                        className="imageSlide"
                                                    />
                                                }
                                                slideScroll={
                                                    isMobile
                                                        ? slideScroll
                                                        : undefined
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
                                            {isMobile ? (
                                                <NextButton
                                                    onClick={nextSlide}
                                                />
                                            ) : null}
                                        </MainSlideBlock>
                                    </Container>
                                </SwiperSlide>
                            ) : null;
                        })}
                        {!isMobile ? <NextButton onClick={nextSlide} /> : null}
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        spaceBetween={50}
                        pagination={
                            !isMobile
                                ? {
                                      clickable: true,
                                  }
                                : mobilePagination
                        }
                        mousewheel={
                            !isMobile
                                ? {
                                      releaseOnEdges: true,
                                  }
                                : false
                        }
                        parallax
                        modules={[Mousewheel, Pagination, Parallax, Autoplay]}
                        className="nested-horizontal-slider"
                        onToEdge={(swiper) => {
                            setTimeout(() => {
                                swiperRef.current?.swiper.mousewheel.enable();
                            }, 0);
                        }}
                        // TODO в отдельный метод
                        onScroll={(swiper, event: any) => {
                            const isFirstSlide =
                                swiper.slides.length === swiper.activeIndex + 1;
                            const isLastSlide = swiper.activeIndex === 0;
                            const nextScroll = event.wheelDelta < 0;
                            const prevScroll = event.wheelDelta > 0;
                            if (prevScroll && !isFirstSlide) {
                                swiperRef.current?.swiper.mousewheel.disable();
                            }
                            if (nextScroll && !isLastSlide) {
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
                                <SwiperSlide
                                    key={item.rightText.title}
                                    onScroll={handleSlideScroll}
                                >
                                    <Container>
                                        <MainSlideBlock
                                            title={item.slideTitle}
                                            // onMouseEnter={handleMouseEnter}
                                            // onMouseLeave={handleMouseLeave}
                                        >
                                            <ThreeColumns
                                                img={
                                                    <img
                                                        src={item.imgSrc}
                                                        alt={
                                                            item.rightText.title
                                                        }
                                                        className="imageSlide"
                                                    />
                                                }
                                                slideScroll={
                                                    isMobile
                                                        ? slideScroll
                                                        : undefined
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
                                            {isMobile ? (
                                                <NextButton
                                                    onClick={nextSlide}
                                                />
                                            ) : null}
                                        </MainSlideBlock>
                                    </Container>
                                </SwiperSlide>
                            );
                        })}
                        {!isMobile ? <NextButton onClick={nextSlide} /> : null}
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        spaceBetween={50}
                        pagination={
                            !isMobile
                                ? {
                                      clickable: true,
                                  }
                                : mobilePagination
                        }
                        mousewheel={
                            !isMobile
                                ? {
                                      releaseOnEdges: true,
                                  }
                                : false
                        }
                        parallax
                        modules={[Mousewheel, Pagination, Parallax, Autoplay]}
                        className="nested-horizontal-slider"
                        onToEdge={(swiper) => {
                            setTimeout(() => {
                                swiperRef.current?.swiper.mousewheel.enable();
                            }, 0);
                        }}
                        // TODO в отдельный метод
                        onScroll={(swiper, event: any) => {
                            const isFirstSlide =
                                swiper.slides.length === swiper.activeIndex + 1;
                            const isLastSlide = swiper.activeIndex === 0;
                            const nextScroll = event.wheelDelta < 0;
                            const prevScroll = event.wheelDelta > 0;
                            if (prevScroll && !isFirstSlide) {
                                swiperRef.current?.swiper.mousewheel.disable();
                            }
                            if (nextScroll && !isLastSlide) {
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
                                <SwiperSlide
                                    key={item.rightText.title}
                                    onScroll={handleSlideScroll}
                                >
                                    <Container>
                                        <MainSlideBlock
                                            title={item.slideTitle}
                                            // onMouseEnter={handleMouseEnter}
                                            // onMouseLeave={handleMouseLeave}
                                        >
                                            <ThreeColumns
                                                img={
                                                    <img
                                                        src={item.imgSrc}
                                                        alt={
                                                            item.rightText.title
                                                        }
                                                        className="imageSlide"
                                                    />
                                                }
                                                slideScroll={
                                                    isMobile
                                                        ? slideScroll
                                                        : undefined
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
                                            {isMobile ? (
                                                <NextButton
                                                    onClick={nextSlide}
                                                />
                                            ) : null}
                                        </MainSlideBlock>
                                    </Container>
                                </SwiperSlide>
                            );
                        })}
                        {!isMobile ? <NextButton onClick={nextSlide} /> : null}
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <FinalSlide />
                </SwiperSlide>
            </Swiper>
        </Layout>
    );
};
