import clsx from "clsx";
import { Layout } from "widgets/Layout";
import { Mousewheel, Navigation, Pagination, Parallax } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { PreviewBlock } from "widgets/PreviewBlock";
import YearOldIcon from "shared/assets/img/year-old-icon.png";
import "./Main.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/parallax";
import { MainSlideBlock } from "widgets/MainSlideBlock";
import { Subtitle } from "shared/ui/Subtitle";
import { TitleWithTextBlock } from "widgets/TitleWithTextBlock";
import { ThreeColumns } from "widgets/ThreeColumns";
import { useState } from "react";
import { slidesData } from "shared/config/slidesData";
import { FinalSlide } from "widgets/FinalSlide";

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

    const handleOnHorizontalScroll = (swiper: any) => {
        checkLastSlide(swiper);
    };

    return (
        <Layout>
            <Swiper
                direction="vertical"
                navigation={
                    !lastVerticalSlide
                        ? {
                              enabled: true,
                          }
                        : false
                }
                // mousewheel
                // allowSlideNext={allowVerticalNext}
                // allowSlidePrev={allowVerticalPrev}
                modules={[Mousewheel, Navigation]}
                className="main-swiper-vertical"
                onSlideChange={handleOnVerticalScroll}
            >
                <SwiperSlide className="slide">
                    <PreviewBlock altImg="Цифра 33" imgSrc={YearOldIcon} />
                    <span className="parallax-bg parallax-text">
                        33&nbsp;года&nbsp;33&nbsp;года
                    </span>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        parallax
                        direction="horizontal"
                        spaceBetween={50}
                        slidesPerView={1}
                        pagination={{
                            clickable: true,
                        }}
                        mousewheel
                        modules={[Mousewheel, Pagination, Parallax]}
                        className="horizontal-slider"
                        onSlideChange={handleOnHorizontalScroll}
                    >
                        <span
                            className="parallax-bg parallax-text"
                            data-swiper-parallax="-20%"
                        >
                            33&nbsp;года&nbsp;33&nbsp;года
                        </span>
                        <SwiperSlide>
                            <MainSlideBlock title="1990">
                                <Subtitle className="preview-text" size="l">
                                    С каждый новым годом развиваемся не только
                                    мы, а еще индустрия мобильных телефонов.
                                    Вспомним вместе с чего все начиналось?
                                </Subtitle>
                            </MainSlideBlock>
                        </SwiperSlide>
                        {slidesData[0].map((item) => (
                            <SwiperSlide key={item.rightText.title}>
                                <MainSlideBlock title={item.slideTitle}>
                                    <ThreeColumns
                                        img={
                                            <img
                                                src={item.imgSrc}
                                                alt={item.rightText.title}
                                            />
                                        }
                                    >
                                        <TitleWithTextBlock
                                            align="right"
                                            title={item.leftText.title}
                                            text={item.leftText.text}
                                        />
                                        <TitleWithTextBlock
                                            title={item.rightText.title}
                                            text={item.rightText.text}
                                        />
                                    </ThreeColumns>
                                </MainSlideBlock>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        parallax
                        direction="horizontal"
                        spaceBetween={50}
                        pagination={{
                            clickable: true,
                        }}
                        mousewheel
                        modules={[Mousewheel, Pagination]}
                        className="mySwiper2 swiper-v"
                    >
                        <span
                            className="parallax-bg parallax-text"
                            data-swiper-parallax="-20%"
                        >
                            33&nbsp;года&nbsp;33&nbsp;года
                        </span>
                        {slidesData[1].map((item) => (
                            <SwiperSlide key={item.rightText.title}>
                                <MainSlideBlock title={item.slideTitle}>
                                    <ThreeColumns
                                        img={
                                            <img
                                                src={item.imgSrc}
                                                alt={item.rightText.title}
                                            />
                                        }
                                    >
                                        <TitleWithTextBlock
                                            align="right"
                                            title={item.leftText.title}
                                            text={item.leftText.text}
                                        />
                                        <TitleWithTextBlock
                                            title={item.rightText.title}
                                            text={item.rightText.text}
                                        />
                                    </ThreeColumns>
                                </MainSlideBlock>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <Swiper
                        parallax
                        direction="horizontal"
                        spaceBetween={50}
                        pagination={{
                            clickable: true,
                        }}
                        mousewheel
                        modules={[Mousewheel, Pagination]}
                        className="mySwiper2 swiper-v"
                    >
                        <span
                            className="parallax-bg parallax-text"
                            data-swiper-parallax="-20%"
                        >
                            33&nbsp;года&nbsp;33&nbsp;года
                        </span>
                        {slidesData[2].map((item) => (
                            <SwiperSlide key={item.rightText.title}>
                                <MainSlideBlock title={item.slideTitle}>
                                    <ThreeColumns
                                        img={
                                            <img
                                                src={item.imgSrc}
                                                alt={item.rightText.title}
                                            />
                                        }
                                    >
                                        <TitleWithTextBlock
                                            align="right"
                                            title={item.leftText.title}
                                            text={item.leftText.text}
                                        />
                                        <TitleWithTextBlock
                                            title={item.rightText.title}
                                            text={item.rightText.text}
                                        />
                                    </ThreeColumns>
                                </MainSlideBlock>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </SwiperSlide>
                <SwiperSlide>
                    <FinalSlide />
                </SwiperSlide>
            </Swiper>
        </Layout>
    );
};
