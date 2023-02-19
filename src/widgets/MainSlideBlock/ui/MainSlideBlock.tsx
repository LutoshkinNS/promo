import clsx from 'clsx';
import { Title } from 'shared/ui/Title/Title';
import { ReactNode } from 'react';
import { Container } from 'shared/ui/Container/Container';
import { mobile } from 'shared/libs';
import s from './MainSlideBlock.module.css';

export interface MainSlideBlockProps {
    className?: string;
    title: string;
    children: ReactNode;
}

export const MainSlideBlock = (props: MainSlideBlockProps) => {
    const { className, title, children } = props;
    const isMobile = mobile();

    return (
        <Container>
            <div className={clsx(s.MainSlideBlock, className)}>
                {!isMobile ? <Title className={s.title}>{title}</Title> : null}
                {children}
            </div>
        </Container>
    );
};
