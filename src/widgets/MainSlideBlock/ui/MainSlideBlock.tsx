import clsx from 'clsx';
import { Title } from 'shared/ui/Title/Title';
import { MouseEvent, ReactNode } from 'react';
import { Container } from 'shared/ui/Container/Container';
import { mobile } from 'shared/libs';
import s from './MainSlideBlock.module.css';

export interface MainSlideBlockProps {
    className?: string;
    title: string;
    children: ReactNode;
    onMouseEnter?: (e: MouseEvent<HTMLDivElement>) => void;
    onMouseLeave?: (e: MouseEvent<HTMLDivElement>) => void;
}

export const MainSlideBlock = (props: MainSlideBlockProps) => {
    const { className, title, children, onMouseEnter, onMouseLeave } = props;
    const isMobile = mobile();

    return (
        // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
        <div
            className={clsx(s.MainSlideBlock, className)}
            onMouseOver={onMouseEnter}
            onMouseOut={onMouseLeave}
        >
            {!isMobile ? <Title className={s.title}>{title}</Title> : null}
            {children}
        </div>
    );
};
