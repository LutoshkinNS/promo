import clsx from 'clsx';
import { MainSlideBlock } from 'widgets/MainSlideBlock';
import { ThreeColumns } from 'widgets/ThreeColumns';
import { TitleWithTextBlock } from 'widgets/TitleWithTextBlock';
import { Container } from 'shared/ui/Container/Container';
import { SlideData } from 'shared/config/slidesData';
import { mobile } from 'shared/libs';
import { NextButton } from 'shared/ui/NextButton';
import s from './HorizontalSlide.module.css';

export interface HorizontalSlideProps {
    slideData: SlideData;
    slideScroll?: { [key: string]: number };
    handleNextSlide: () => void;
}

export const HorizontalSlide = (props: HorizontalSlideProps) => {
    const { slideData, slideScroll, handleNextSlide } = props;
    const isMobile = mobile();

    const getImgScroll = () => {
        if (slideScroll) {
            if (slideScroll[slideData.rightText.title]) {
                return slideScroll[slideData.rightText.title];
            }
            return slideScroll.initialValue;
        }
        return undefined;
    };

    return (
        <Container>
            <MainSlideBlock title={slideData.slideTitle}>
                <ThreeColumns
                    img={
                        <img
                            src={slideData.imgSrc}
                            alt={slideData.rightText.title}
                            className="imageSlide"
                        />
                    }
                    slideScroll={getImgScroll()}
                >
                    <TitleWithTextBlock
                        align={!isMobile ? 'right' : 'center'}
                        title={slideData.leftText.title}
                        text={slideData.leftText.text}
                    />
                    <TitleWithTextBlock
                        align={!isMobile ? 'left' : 'center'}
                        title={slideData.rightText.title}
                        text={slideData.rightText.text}
                    />
                </ThreeColumns>
                {isMobile ? <NextButton onClick={handleNextSlide} /> : null}
            </MainSlideBlock>
        </Container>
    );
};
