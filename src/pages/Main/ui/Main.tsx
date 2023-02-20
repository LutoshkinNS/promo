import clsx from 'clsx';
import { Layout } from 'widgets/Layout';
import {
    Mousewheel,
    Navigation,
    Pagination,
    Parallax,
    Scrollbar,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PreviewBlock } from 'widgets/PreviewBlock';
import YearOldIcon from 'shared/assets/img/year-old-icon.png';
import './Main.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import { MainSlideBlock } from 'widgets/MainSlideBlock';
import { Subtitle } from 'shared/ui/Subtitle';
import { TitleWithTextBlock } from 'widgets/TitleWithTextBlock';
import { ThreeColumns } from 'widgets/ThreeColumns';
import { useState } from 'react';
import { slidesData } from 'shared/config/slidesData';
import { FinalSlide } from 'widgets/FinalSlide';
import { mobile } from 'shared/libs';
import { PaginationOptions } from 'swiper/types';

export interface MainProps {
    className?: string;
}

export const Main = (props: MainProps) => {
    const { className } = props;
    const [lastVerticalSlide, setLastVerticalSlide] = useState<boolean>(false);
    const [allowVerticalNext, setAllowVerticalNext] = useState(true);
    const [allowVerticalPrev, setAllowVerticalPrev] = useState(true);
    const isMobile = mobile();
    console.log(isMobile);

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

    const mobilePagination: PaginationOptions = {
        clickable: true,
        renderBullet(index, classN) {
            const date = slidesData[0][index]
                ? slidesData[0][index].slideTitle
                : '';
            return `<span class="${classN} mobile-pagination">${date}</span>`;
        },
    };

    return (
        <Layout>
            {/* <Swiper */}
            {/*    direction="vertical" */}
            {/*    navigation={ */}
            {/*        !lastVerticalSlide */}
            {/*            ? { */}
            {/*                  enabled: true, */}
            {/*              } */}
            {/*            : false */}
            {/*    } */}
            {/*    // mousewheel */}
            {/*    // allowSlideNext={allowVerticalNext} */}
            {/*    // allowSlidePrev={allowVerticalPrev} */}
            {/*    scrollbar */}
            {/*    modules={[Mousewheel, Navigation, Scrollbar]} */}
            {/*    className="main-swiper-vertical" */}
            {/*    onSlideChange={handleOnVerticalScroll} */}
            {/* > */}
            {/* <SwiperSlide className="slide"> */}
            <PreviewBlock altImg="Цифра 33" imgSrc={YearOldIcon} />
            <span className="parallax-bg parallax-text">
                33&nbsp;года&nbsp;33&nbsp;года
            </span>
            {/* </SwiperSlide> */}
            {/* <SwiperSlide> */}
            <Swiper
                parallax
                direction="horizontal"
                spaceBetween={50}
                slidesPerView={1}
                pagination={
                    !isMobile
                        ? {
                              clickable: true,
                          }
                        : mobilePagination
                }
                mousewheel={{ releaseOnEdges: true }}
                scrollbar
                modules={[Mousewheel, Pagination, Parallax, Scrollbar]}
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
                    <MainSlideBlock title={slidesData[0][0].slideTitle}>
                        <Subtitle className="preview-text" size="l">
                            {slidesData[0][0].leftText.text}
                        </Subtitle>
                    </MainSlideBlock>
                </SwiperSlide>
                {slidesData[0].map((item, idx) => {
                    return idx !== 0 ? (
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
                    ) : null;
                })}
            </Swiper>
            {/* </SwiperSlide> */}
            {/* <SwiperSlide> */}
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
            {/* </SwiperSlide> */}
            {/* <SwiperSlide> */}
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
            {/* </SwiperSlide> */}
            {/* <SwiperSlide> */}
            <FinalSlide />
            {/* </SwiperSlide> */}
            {/* </Swiper> */}
        </Layout>
    );
};
