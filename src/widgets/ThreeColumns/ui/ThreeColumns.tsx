import clsx from 'clsx';
import { ReactNode } from 'react';
import s from './ThreeColumns.module.css';

export interface ThreeColumnsProps {
    className?: string;
    children: ReactNode;
    img?: ReactNode;
    slideScroll?: number;
}

export const ThreeColumns = (props: ThreeColumnsProps) => {
    const { className, children, img, slideScroll } = props;

    return (
        <div className={clsx(s.ThreeColumns, className)}>
            <div className={s.children}>{children}</div>
            <div
                className={s.imgContainer}
                style={
                    slideScroll
                        ? {
                              transform: `translateY(-${slideScroll}px) translateX(0%)`,
                          }
                        : {}
                }
            >
                <div className={s.bgImage} />
                {img}
            </div>
        </div>
    );
};
