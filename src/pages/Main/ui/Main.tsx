import clsx from 'clsx';
import { Layout } from 'widgets/Layout';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { PreviewBlock } from 'widgets/PreviewBlock';
import YearOldIcon from 'shared/assets/img/year-old-icon.png';
import './Main.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/parallax';
import { useState } from 'react';
import { slidesData } from 'shared/config/slidesData';
import { FinalSlide } from 'widgets/FinalSlide';
import { HorizontalSlider } from 'widgets/Slider';

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
                allowTouchMove={false}
                modules={[Navigation]}
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
                    <HorizontalSlider data={slidesData[0]} />
                </SwiperSlide>
                <SwiperSlide>
                    {/* <HorizontalSlider data={slidesData[1]} /> */}
                </SwiperSlide>
                <SwiperSlide>
                    {/* <HorizontalSlider data={slidesData[2]} /> */}
                </SwiperSlide>
                <SwiperSlide>
                    <FinalSlide />
                </SwiperSlide>
            </Swiper>
        </Layout>
    );
};
