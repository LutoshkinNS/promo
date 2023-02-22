import clsx from 'clsx';
import { Title } from 'shared/ui/Title/Title';
import { TitleWithTextBlock } from 'widgets/TitleWithTextBlock';
import { Container } from 'shared/ui/Container/Container';
import { Subtitle } from 'shared/ui/Subtitle';
import s from './FinalSlide.module.css';

export interface FinalSlideProps {
    className?: string;
}

export const FinalSlide = (props: FinalSlideProps) => {
    const { className } = props;

    return (
        <div className={clsx(s.FinalSlide, className)}>
            <Container>
                <Title size="m" className={s.title}>
                    Банк Сегодня
                </Title>
                <div className={s.successToday}>
                    <TitleWithTextBlock
                        variant="secondary"
                        align="center"
                        title="Развиваемся каждый день"
                        textAlign="center"
                        text="за последние 3 года Хлынов дал возможность своим клиентам переводить деньги через СБП идентифицироваться с помощью Единой Биометрической Системы"
                    />
                    <TitleWithTextBlock
                        variant="secondary"
                        align="center"
                        title="Развиваемся каждый день"
                        textAlign="center"
                        text="за последние 3 года Хлынов дал возможность своим клиентам переводить деньги через СБП идентифицироваться с помощью Единой Биометрической Системы"
                    />
                    <TitleWithTextBlock
                        variant="secondary"
                        align="center"
                        title="Развиваемся каждый день"
                        textAlign="center"
                        text="за последние 3 года Хлынов дал возможность своим клиентам переводить деньги через СБП идентифицироваться с помощью Единой Биометрической Системы"
                    />
                </div>
                <Subtitle size="l" variant="gradient" className={s.subtitle}>
                    сегодня дарим именно вам 4 персональных подарка
                </Subtitle>
            </Container>
        </div>
    );
};
