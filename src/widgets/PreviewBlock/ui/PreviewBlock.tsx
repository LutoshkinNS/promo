import clsx from 'clsx';
import { Subtitle } from 'shared/ui/Subtitle';
import { Text } from 'shared/ui/Text';
import { Container } from 'shared/ui/Container/Container';
import s from './PreviewBlock.module.css';

export interface PreviewBlockProps {
    className?: string;
    imgSrc: string;
    altImg?: string;
}

export const PreviewBlock = (props: PreviewBlockProps) => {
    const { className, imgSrc, altImg } = props;

    return (
        <Container>
            <div className={clsx(s.PreviewBlock, className)}>
                <div className={s.imgBlock}>
                    <img src={imgSrc} alt={altImg} className={s.img} />
                </div>
                <div className={s.textBlock}>
                    <Subtitle className={s.title} size="l">
                        6 марта "Хлынов" - отмечает день рождения!
                    </Subtitle>
                    <Text className={s.text} size="l" variant="third">
                        от 6 марта 1990 года идет отсчет нашей работы: Банк
                        Хлынов получает лицензию по новым правилам двух
                        уровневой банковской системы
                    </Text>
                </div>
            </div>
        </Container>
    );
};
