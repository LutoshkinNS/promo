import clsx from 'clsx';
import { SwiperOptions } from 'swiper';
import s from './NextButton.module.css';

export interface NextButtonProps {
    className?: string;
    swiper: SwiperOptions;
}

export const NextButton = (props: NextButtonProps) => {
    const { className } = props;

    return (
        <div className={clsx(s.NextButton, className)}>
            <button
                aria-label="next slide"
                type="button"
                className="slider-next-btn"
                onClick={() => {
                    swiperRef.current?.swiper.slideNext();
                }}
            />
        </div>
    );
};
