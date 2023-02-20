import clsx from 'clsx';
import {
    Autoplay,
    Mousewheel,
    Pagination,
    Parallax,
    SwiperOptions,
} from 'swiper';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { mobile } from 'shared/libs';
import { PaginationOptions } from 'swiper/types';
import { SlideData } from 'shared/config/slidesData';
import { MouseEvent, ReactNode, useRef, useState } from 'react';
import { MainSlideBlock } from 'widgets/MainSlideBlock';
import { Subtitle } from 'shared/ui/Subtitle';
import { ThreeColumns } from 'widgets/ThreeColumns';
import { TitleWithTextBlock } from 'widgets/TitleWithTextBlock';
import s from './HorizontalSlider.module.css';

export interface HorizontalSliderProps {
    className?: string;
    children?: ReactNode;
    data: SlideData[];
}

export const HorizontalSlider = (props: HorizontalSliderProps) => {
    const { className, children, data } = props;
    const [lastVerticalSlide, setLastVerticalSlide] = useState<boolean>(false);
    const [allowVerticalNext, setAllowVerticalNext] = useState(true);
    const [allowVerticalPrev, setAllowVerticalPrev] = useState(true);
    const [isMouseEnterSlide, setMouseEnterSlide] = useState(false);
    const isMobile = mobile();

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
            const date = data[index] ? data[index].slideTitle : '';
            return `<span class="${classN} mobile-pagination">${date}</span>`;
        },
    };

    const swiperRef = useRef<SwiperRef>();
    console.log(swiperRef);

    const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
        console.log('handleMouseEnter', e.target);
        swiperRef.current?.swiper.autoplay.stop();
    };

    const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
        console.log('handleMouseLeave', e.target);
        swiperRef.current?.swiper.autoplay.start();
    };

    return (
        <Swiper
            onSwiper={(swiper) => {
                swiperRef.current = { swiper };
            }}
            // autoHeight
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
            autoplay={
                isMouseEnterSlide
                    ? false
                    : {
                          delay: 3000,
                          disableOnInteraction: true,
                      }
            }
            onAfterInit={(swiper) => {
                swiper.autoplay.stop();
            }}
            mousewheel
            modules={[Mousewheel, Pagination, Parallax, Autoplay]}
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
                <MainSlideBlock
                    data-class="main"
                    title={data[0].slideTitle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <Subtitle className="preview-text" size="l">
                        {data[0].leftText.text}
                    </Subtitle>
                </MainSlideBlock>
            </SwiperSlide>
            {data.map((item, idx) => {
                return idx !== 0 ? (
                    <SwiperSlide key={item.rightText.title}>
                        <MainSlideBlock
                            data-class="main"
                            title={item.slideTitle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
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
                                    align={!isMobile ? 'right' : 'center'}
                                    title={item.leftText.title}
                                    text={item.leftText.text}
                                />
                                <TitleWithTextBlock
                                    align={!isMobile ? 'left' : 'center'}
                                    title={item.rightText.title}
                                    text={item.rightText.text}
                                />
                            </ThreeColumns>
                        </MainSlideBlock>
                    </SwiperSlide>
                ) : null;
            })}
        </Swiper>
    );
};
