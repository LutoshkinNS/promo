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
import { MouseEvent, ReactNode, Ref, useRef, useState } from 'react';
import { MainSlideBlock } from 'widgets/MainSlideBlock';
import { Subtitle } from 'shared/ui/Subtitle';
import { ThreeColumns } from 'widgets/ThreeColumns';
import { TitleWithTextBlock } from 'widgets/TitleWithTextBlock';
import s from './HorizontalSlider.module.css';

export interface HorizontalSliderProps {
    className?: string;
    children?: ReactNode;
    data: SlideData[];
    parentVerticalSwiperRef: SwiperRef | undefined;
}

export const HorizontalSlider = (props: HorizontalSliderProps) => {
    const { className, children, data, parentVerticalSwiperRef } = props;
    const isMobile = mobile();

    const mobilePagination: PaginationOptions = {
        clickable: true,
        renderBullet(index, classN) {
            const date = data[index] ? data[index].slideTitle : '';
            return `<span class="${classN} mobile-pagination">${date}</span>`;
        },
    };

    // const swiperRef = useRef<SwiperRef>();
    // console.log(swiperRef);

    // const handleMouseEnter = (e: MouseEvent<HTMLDivElement>) => {
    //     console.log('handleMouseEnter', e.target);
    //     swiperRef.current?.swiper.autoplay.stop();
    // };
    //
    // const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    //     console.log('handleMouseLeave', e.target);
    //     swiperRef.current?.swiper.autoplay.start();
    // };

    return (
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
                    parentVerticalSwiperRef?.swiper.mousewheel.enable();
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
                    parentVerticalSwiperRef?.swiper.mousewheel.disable();
                }
                if (nextScroll && !isLastSlide) {
                    console.log('hor onScroll dis');
                    parentVerticalSwiperRef?.swiper.mousewheel.disable();
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
                    title={data[0].slideTitle}
                    // onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
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
